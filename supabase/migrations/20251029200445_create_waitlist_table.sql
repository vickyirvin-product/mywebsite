/*
  # Create Waitlist Table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key) - Unique identifier for each entry
      - `email` (text, unique, not null) - Email address of the user joining the waitlist
      - `created_at` (timestamptz) - Timestamp when the user joined
      
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for public users to insert their email
    - No read/update/delete policies needed (admin-only access via service role)
    
  3. Notes
    - Email is unique to prevent duplicate entries
    - Table is locked down by default, only allowing inserts from public users
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert their email to waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);