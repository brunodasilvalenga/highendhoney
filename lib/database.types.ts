export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      models: {
        Row: {
          age: number | null
          created_at: string | null
          description: string | null
          id: number
          is_verified: boolean | null
          location: string | null
          name: string | null
          phone_number: string | null
          price: number | null
        }
        Insert: {
          age?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          is_verified?: boolean | null
          location?: string | null
          name?: string | null
          phone_number?: string | null
          price?: number | null
        }
        Update: {
          age?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          is_verified?: boolean | null
          location?: string | null
          name?: string | null
          phone_number?: string | null
          price?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
