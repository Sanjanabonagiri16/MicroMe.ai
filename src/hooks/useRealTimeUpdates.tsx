
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface CourseEnrollment {
  id: string;
  course_id: string;
  progress_percentage: number;
  last_watched_position: number;
  completed_at: string | null;
}

interface MentorBooking {
  id: string;
  mentor_id: string;
  scheduled_at: string;
  status: string;
  notes: string | null;
}

export const useRealTimeUpdates = () => {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<CourseEnrollment[]>([]);
  const [bookings, setBookings] = useState<MentorBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    // Fetch initial data
    const fetchInitialData = async () => {
      try {
        // Fetch course enrollments
        const { data: enrollmentData } = await supabase
          .from('user_course_enrollments')
          .select('*')
          .eq('user_id', user.id);
        
        if (enrollmentData) setEnrollments(enrollmentData);

        // Fetch mentor bookings
        const { data: bookingData } = await supabase
          .from('mentor_bookings')
          .select('*')
          .eq('user_id', user.id);
        
        if (bookingData) setBookings(bookingData);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching initial data:', error);
        setLoading(false);
      }
    };

    fetchInitialData();

    // Set up real-time subscriptions
    const enrollmentChannel = supabase
      .channel('user-course-enrollments-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_course_enrollments',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          console.log('Course enrollment update:', payload);
          
          if (payload.eventType === 'INSERT') {
            setEnrollments(prev => [...prev, payload.new as CourseEnrollment]);
          } else if (payload.eventType === 'UPDATE') {
            setEnrollments(prev => 
              prev.map(enrollment => 
                enrollment.id === payload.new.id 
                  ? payload.new as CourseEnrollment 
                  : enrollment
              )
            );
          } else if (payload.eventType === 'DELETE') {
            setEnrollments(prev => 
              prev.filter(enrollment => enrollment.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    const bookingChannel = supabase
      .channel('mentor-bookings-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'mentor_bookings',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          console.log('Mentor booking update:', payload);
          
          if (payload.eventType === 'INSERT') {
            setBookings(prev => [...prev, payload.new as MentorBooking]);
          } else if (payload.eventType === 'UPDATE') {
            setBookings(prev => 
              prev.map(booking => 
                booking.id === payload.new.id 
                  ? payload.new as MentorBooking 
                  : booking
              )
            );
          } else if (payload.eventType === 'DELETE') {
            setBookings(prev => 
              prev.filter(booking => booking.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    // Cleanup subscriptions
    return () => {
      supabase.removeChannel(enrollmentChannel);
      supabase.removeChannel(bookingChannel);
    };
  }, [user]);

  const enrollInCourse = async (courseId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_course_enrollments')
        .insert({
          user_id: user.id,
          course_id: courseId,
          progress_percentage: 0
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error enrolling in course:', error);
    }
  };

  const updateCourseProgress = async (courseId: string, progress: number, watchPosition: number = 0) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('user_course_enrollments')
        .update({
          progress_percentage: progress,
          last_watched_position: watchPosition,
          completed_at: progress >= 100 ? new Date().toISOString() : null
        })
        .eq('user_id', user.id)
        .eq('course_id', courseId);

      if (error) throw error;
    } catch (error) {
      console.error('Error updating course progress:', error);
    }
  };

  const bookMentor = async (mentorId: string, scheduledAt: string, notes?: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('mentor_bookings')
        .insert({
          user_id: user.id,
          mentor_id: mentorId,
          scheduled_at: scheduledAt,
          notes: notes,
          status: 'scheduled'
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error booking mentor:', error);
    }
  };

  return {
    enrollments,
    bookings,
    loading,
    enrollInCourse,
    updateCourseProgress,
    bookMentor
  };
};
