
-- Create enum types for better data integrity
CREATE TYPE public.user_role AS ENUM ('girl', 'mentor', 'parent_guardian', 'admin');
CREATE TYPE public.mood_type AS ENUM ('happy', 'sad', 'excited', 'anxious', 'calm', 'frustrated', 'confident', 'overwhelmed');
CREATE TYPE public.content_type AS ENUM ('lesson', 'quiz', 'story', 'poem', 'drawing', 'journal');
CREATE TYPE public.session_status AS ENUM ('scheduled', 'completed', 'cancelled', 'no_show');
CREATE TYPE public.badge_category AS ENUM ('learning', 'community', 'wellness', 'mentorship', 'streak');

-- User profiles table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  role user_role NOT NULL DEFAULT 'girl',
  first_name TEXT NOT NULL,
  last_name TEXT,
  age INTEGER,
  language_preference TEXT DEFAULT 'en',
  interests TEXT[], -- Array of interest tags
  parent_email TEXT, -- For underage users
  parent_consent BOOLEAN DEFAULT FALSE,
  streak_days INTEGER DEFAULT 0,
  total_points INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Learning modules and lessons
CREATE TABLE public.learning_modules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- confidence, coding, life_skills, etc.
  age_group TEXT, -- 10-14, 15-18, 19-22
  difficulty_level INTEGER DEFAULT 1,
  estimated_duration INTEGER, -- in minutes
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Individual lessons within modules
CREATE TABLE public.lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id UUID REFERENCES public.learning_modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content JSONB, -- Rich content with text, images, videos
  quiz_questions JSONB, -- Array of quiz questions
  order_index INTEGER,
  points_reward INTEGER DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User progress tracking
CREATE TABLE public.user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  score INTEGER, -- Quiz score if applicable
  time_spent INTEGER, -- in minutes
  UNIQUE(user_id, lesson_id)
);

-- Mentorship connections
CREATE TABLE public.mentorships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  mentor_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  mentee_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  matched_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  notes TEXT, -- Mentor's notes about the mentee
  UNIQUE(mentor_id, mentee_id)
);

-- Mentorship sessions
CREATE TABLE public.mentorship_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  mentorship_id UUID REFERENCES public.mentorships(id) ON DELETE CASCADE,
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 30,
  status session_status DEFAULT 'scheduled',
  notes TEXT,
  feedback_rating INTEGER CHECK (feedback_rating >= 1 AND feedback_rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community posts
CREATE TABLE public.community_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  content_type content_type DEFAULT 'story',
  image_url TEXT,
  is_anonymous BOOLEAN DEFAULT FALSE,
  is_flagged BOOLEAN DEFAULT FALSE,
  is_approved BOOLEAN DEFAULT TRUE,
  likes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Post reactions/comments
CREATE TABLE public.post_reactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  reaction_type TEXT NOT NULL, -- 'empowered', 'inspired', 'related'
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(post_id, user_id, reaction_type)
);

-- Mood journal entries
CREATE TABLE public.mood_entries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  mood mood_type NOT NULL,
  intensity INTEGER CHECK (intensity >= 1 AND intensity <= 5),
  notes TEXT,
  gratitude_note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Wellness activities (meditation, breathing exercises)
CREATE TABLE public.wellness_activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL, -- meditation, breathing, journaling
  duration_minutes INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Badges and achievements
CREATE TABLE public.badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  category badge_category NOT NULL,
  icon_url TEXT,
  points_required INTEGER,
  is_active BOOLEAN DEFAULT TRUE
);

-- User badges (earned achievements)
CREATE TABLE public.user_badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  badge_id UUID REFERENCES public.badges(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

-- Daily affirmations and quotes
CREATE TABLE public.daily_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content_text TEXT NOT NULL,
  content_type TEXT NOT NULL, -- affirmation, quote, tip
  language TEXT DEFAULT 'en',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Chat messages between mentors and mentees
CREATE TABLE public.chat_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  mentorship_id UUID REFERENCES public.mentorships(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  message_text TEXT,
  voice_note_url TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentorships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentorship_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_reactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mood_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wellness_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Public read access for learning content
CREATE POLICY "Anyone can view learning modules" ON public.learning_modules
  FOR SELECT TO authenticated USING (is_active = true);

CREATE POLICY "Anyone can view lessons" ON public.lessons
  FOR SELECT TO authenticated USING (true);

-- User progress policies
CREATE POLICY "Users can view their own progress" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress" ON public.user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Community posts policies
CREATE POLICY "Anyone can view approved posts" ON public.community_posts
  FOR SELECT TO authenticated USING (is_approved = true AND is_flagged = false);

CREATE POLICY "Users can create posts" ON public.community_posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own posts" ON public.community_posts
  FOR UPDATE USING (auth.uid() = user_id);

-- Mood entries policies (private to user)
CREATE POLICY "Users can manage their mood entries" ON public.mood_entries
  FOR ALL USING (auth.uid() = user_id);

-- Wellness activities policies
CREATE POLICY "Users can manage their wellness activities" ON public.wellness_activities
  FOR ALL USING (auth.uid() = user_id);

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'first_name', 'Anonymous'),
    NEW.raw_user_meta_data->>'last_name',
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'girl')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample badges
INSERT INTO public.badges (name, description, category, points_required) VALUES
  ('First Steps', 'Complete your first lesson', 'learning', 10),
  ('Community Helper', 'Help 5 other girls in the community', 'community', 50),
  ('Wellness Warrior', 'Complete 7 days of mood journaling', 'wellness', 70),
  ('Mentor''s Pride', 'Receive positive feedback from mentor', 'mentorship', 30),
  ('Week Streak', 'Login for 7 consecutive days', 'streak', 40);

-- Insert sample learning modules
INSERT INTO public.learning_modules (title, description, category, age_group) VALUES
  ('Confidence Building 101', 'Learn to build self-confidence and believe in yourself', 'confidence', '10-14'),
  ('Digital Safety Basics', 'Stay safe while navigating the online world', 'safety', '10-22'),
  ('Communication Skills', 'Express yourself clearly and confidently', 'life_skills', '15-22'),
  ('Goal Setting & Achievement', 'Set meaningful goals and work towards them', 'personal_development', '13-22');
