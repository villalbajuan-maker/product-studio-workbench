/*
  # Create contact_submissions table

  ## Summary
  Creates a table to store landing page contact form submissions from prospective clients.

  ## New Tables

  ### contact_submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Submitter's full name
  - `company` (text) - Company name
  - `email` (text) - Contact email address
  - `service_type` (text) - Type of service business they run
  - `ambiguous_opportunity` (text) - Description of their ambiguous project/opportunity
  - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - RLS enabled
  - Authenticated users cannot read others' submissions (no read policy for public)
  - Anyone (anonymous) can insert a submission (public lead capture form)
  - No public read access to protect submitter privacy
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  service_type text NOT NULL DEFAULT '',
  ambiguous_opportunity text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
