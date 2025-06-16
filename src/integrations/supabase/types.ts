export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      badges: {
        Row: {
          category: Database["public"]["Enums"]["badge_category"]
          description: string | null
          icon_url: string | null
          id: string
          is_active: boolean | null
          name: string
          points_required: number | null
        }
        Insert: {
          category: Database["public"]["Enums"]["badge_category"]
          description?: string | null
          icon_url?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          points_required?: number | null
        }
        Update: {
          category?: Database["public"]["Enums"]["badge_category"]
          description?: string | null
          icon_url?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          points_required?: number | null
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          id: string
          is_read: boolean | null
          mentorship_id: string | null
          message_text: string | null
          sender_id: string | null
          sent_at: string | null
          voice_note_url: string | null
        }
        Insert: {
          id?: string
          is_read?: boolean | null
          mentorship_id?: string | null
          message_text?: string | null
          sender_id?: string | null
          sent_at?: string | null
          voice_note_url?: string | null
        }
        Update: {
          id?: string
          is_read?: boolean | null
          mentorship_id?: string | null
          message_text?: string | null
          sender_id?: string | null
          sent_at?: string | null
          voice_note_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_mentorship_id_fkey"
            columns: ["mentorship_id"]
            isOneToOne: false
            referencedRelation: "mentorships"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      community_posts: {
        Row: {
          content: string
          content_type: Database["public"]["Enums"]["content_type"] | null
          created_at: string | null
          id: string
          image_url: string | null
          is_anonymous: boolean | null
          is_approved: boolean | null
          is_flagged: boolean | null
          likes_count: number | null
          user_id: string | null
        }
        Insert: {
          content: string
          content_type?: Database["public"]["Enums"]["content_type"] | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_anonymous?: boolean | null
          is_approved?: boolean | null
          is_flagged?: boolean | null
          likes_count?: number | null
          user_id?: string | null
        }
        Update: {
          content?: string
          content_type?: Database["public"]["Enums"]["content_type"] | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_anonymous?: boolean | null
          is_approved?: boolean | null
          is_flagged?: boolean | null
          likes_count?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "community_posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_content: {
        Row: {
          content_text: string
          content_type: string
          created_at: string | null
          id: string
          is_active: boolean | null
          language: string | null
        }
        Insert: {
          content_text: string
          content_type: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          language?: string | null
        }
        Update: {
          content_text?: string
          content_type?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          language?: string | null
        }
        Relationships: []
      }
      learning_modules: {
        Row: {
          age_group: string | null
          category: string
          created_at: string | null
          description: string | null
          difficulty_level: number | null
          estimated_duration: number | null
          id: string
          is_active: boolean | null
          title: string
        }
        Insert: {
          age_group?: string | null
          category: string
          created_at?: string | null
          description?: string | null
          difficulty_level?: number | null
          estimated_duration?: number | null
          id?: string
          is_active?: boolean | null
          title: string
        }
        Update: {
          age_group?: string | null
          category?: string
          created_at?: string | null
          description?: string | null
          difficulty_level?: number | null
          estimated_duration?: number | null
          id?: string
          is_active?: boolean | null
          title?: string
        }
        Relationships: []
      }
      lessons: {
        Row: {
          content: Json | null
          created_at: string | null
          id: string
          module_id: string | null
          order_index: number | null
          points_reward: number | null
          quiz_questions: Json | null
          title: string
        }
        Insert: {
          content?: Json | null
          created_at?: string | null
          id?: string
          module_id?: string | null
          order_index?: number | null
          points_reward?: number | null
          quiz_questions?: Json | null
          title: string
        }
        Update: {
          content?: Json | null
          created_at?: string | null
          id?: string
          module_id?: string | null
          order_index?: number | null
          points_reward?: number | null
          quiz_questions?: Json | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "learning_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      mentorship_sessions: {
        Row: {
          created_at: string | null
          duration_minutes: number | null
          feedback_rating: number | null
          id: string
          mentorship_id: string | null
          notes: string | null
          scheduled_at: string
          status: Database["public"]["Enums"]["session_status"] | null
        }
        Insert: {
          created_at?: string | null
          duration_minutes?: number | null
          feedback_rating?: number | null
          id?: string
          mentorship_id?: string | null
          notes?: string | null
          scheduled_at: string
          status?: Database["public"]["Enums"]["session_status"] | null
        }
        Update: {
          created_at?: string | null
          duration_minutes?: number | null
          feedback_rating?: number | null
          id?: string
          mentorship_id?: string | null
          notes?: string | null
          scheduled_at?: string
          status?: Database["public"]["Enums"]["session_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "mentorship_sessions_mentorship_id_fkey"
            columns: ["mentorship_id"]
            isOneToOne: false
            referencedRelation: "mentorships"
            referencedColumns: ["id"]
          },
        ]
      }
      mentorships: {
        Row: {
          id: string
          is_active: boolean | null
          matched_at: string | null
          mentee_id: string | null
          mentor_id: string | null
          notes: string | null
        }
        Insert: {
          id?: string
          is_active?: boolean | null
          matched_at?: string | null
          mentee_id?: string | null
          mentor_id?: string | null
          notes?: string | null
        }
        Update: {
          id?: string
          is_active?: boolean | null
          matched_at?: string | null
          mentee_id?: string | null
          mentor_id?: string | null
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mentorships_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mentorships_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      mood_entries: {
        Row: {
          created_at: string | null
          gratitude_note: string | null
          id: string
          intensity: number | null
          mood: Database["public"]["Enums"]["mood_type"]
          notes: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          gratitude_note?: string | null
          id?: string
          intensity?: number | null
          mood: Database["public"]["Enums"]["mood_type"]
          notes?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          gratitude_note?: string | null
          id?: string
          intensity?: number | null
          mood?: Database["public"]["Enums"]["mood_type"]
          notes?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mood_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      post_reactions: {
        Row: {
          comment: string | null
          created_at: string | null
          id: string
          post_id: string | null
          reaction_type: string
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: string
          post_id?: string | null
          reaction_type: string
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: string
          post_id?: string | null
          reaction_type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "post_reactions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_reactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          age: number | null
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          first_name: string
          id: string
          interests: string[] | null
          language_preference: string | null
          last_name: string | null
          level: number | null
          parent_consent: boolean | null
          parent_email: string | null
          role: Database["public"]["Enums"]["user_role"]
          streak_days: number | null
          total_points: number | null
          updated_at: string | null
        }
        Insert: {
          age?: number | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          first_name: string
          id: string
          interests?: string[] | null
          language_preference?: string | null
          last_name?: string | null
          level?: number | null
          parent_consent?: boolean | null
          parent_email?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          streak_days?: number | null
          total_points?: number | null
          updated_at?: string | null
        }
        Update: {
          age?: number | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          first_name?: string
          id?: string
          interests?: string[] | null
          language_preference?: string | null
          last_name?: string | null
          level?: number | null
          parent_consent?: boolean | null
          parent_email?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          streak_days?: number | null
          total_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_badges: {
        Row: {
          badge_id: string | null
          earned_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          badge_id?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          badge_id?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_badges_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_progress: {
        Row: {
          completed_at: string | null
          id: string
          lesson_id: string | null
          score: number | null
          time_spent: number | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          id?: string
          lesson_id?: string | null
          score?: number | null
          time_spent?: number | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          id?: string
          lesson_id?: string | null
          score?: number | null
          time_spent?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      wellness_activities: {
        Row: {
          activity_type: string
          completed_at: string | null
          duration_minutes: number | null
          id: string
          user_id: string | null
        }
        Insert: {
          activity_type: string
          completed_at?: string | null
          duration_minutes?: number | null
          id?: string
          user_id?: string | null
        }
        Update: {
          activity_type?: string
          completed_at?: string | null
          duration_minutes?: number | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wellness_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      badge_category:
        | "learning"
        | "community"
        | "wellness"
        | "mentorship"
        | "streak"
      content_type: "lesson" | "quiz" | "story" | "poem" | "drawing" | "journal"
      mood_type:
        | "happy"
        | "sad"
        | "excited"
        | "anxious"
        | "calm"
        | "frustrated"
        | "confident"
        | "overwhelmed"
      session_status: "scheduled" | "completed" | "cancelled" | "no_show"
      user_role: "girl" | "mentor" | "parent_guardian" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      badge_category: [
        "learning",
        "community",
        "wellness",
        "mentorship",
        "streak",
      ],
      content_type: ["lesson", "quiz", "story", "poem", "drawing", "journal"],
      mood_type: [
        "happy",
        "sad",
        "excited",
        "anxious",
        "calm",
        "frustrated",
        "confident",
        "overwhelmed",
      ],
      session_status: ["scheduled", "completed", "cancelled", "no_show"],
      user_role: ["girl", "mentor", "parent_guardian", "admin"],
    },
  },
} as const
