# Hired 

Hired is a modern, full-stack job portal web application built with React that connects job seekers with recruiters in a seamless, intuitive experience. The platform allows candidates to browse, search, filter, and apply for job openings across top global companies, while recruiters can post new job listings, manage applicants, and track hiring status — all from a single, beautifully designed dashboard. Powered by Supabase for real-time backend services and Clerk for secure, production-ready authentication, Hired delivers a polished experience with role-based access, resume uploads, saved jobs, markdown-powered job descriptions, and a responsive design that works flawlessly on any device. Whether you're a developer hunting for your next role or a startup looking to fill positions fast, Hired makes the hiring process simpler, smarter, and more transparent for everyone involved.

## Features

### For Job Seekers (Candidates)
- Search & Filter Jobs
- Apply to Jobs
- Save Jobs
- Track Applications
- Role-Based Onboarding

### For Recruiters
- Post Jobs
- Add Companies
- Manage Applications
- Toggle Hiring Status
- Delete Jobs

## Tech Stack

- ReactJS
- Tailwind CSS
- Shadcn UI
- Clerk Auth
- Supabase
- Lucide React Icons
- Embla Carousel
- React Hook Form

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- A **Supabase** project ([supabase.com](https://supabase.com))
- A **Clerk** application ([clerk.com](https://clerk.com))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/adisxix/Hired.git
   cd Hired
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Set up Supabase**

   - Create the following tables in your Supabase project:
     - `companies` — `id`, `name`
     - `jobs` — `id`, `title`, `description`, `location`, `company_id`, `recruiter_id`, `isOpen`, `requirements`
     - `applications` — `id`, `job_id`, `candidate_id`, `name`, `status`, `experience`, `skills`, `education`, `resume`
     - `saved_jobs` — `id`, `user_id`, `job_id`
   - Create storage buckets: `resumes`, `company-logo`
   - Enable Row Level Security (RLS) policies as needed

5. **Set up Clerk**

   - Create a Clerk application and enable the sign-in methods you prefer
   - Create a JWT template named `supabase` that includes the Supabase JWT secret
   - Copy your Publishable Key to the `.env` file

6. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/public key |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.


## 👤 Author

**Aditya Sharma**

- GitHub: [@adisxix](https://github.com/adisxix)
