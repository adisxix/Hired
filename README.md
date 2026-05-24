# Hired - Job Portal Platform

Hired - Job Portal Platform is a modern recruitment web app built with React and Vite for connecting job seekers and recruiters in one clean workflow. Candidates can browse jobs, save listings, view detailed job pages, and apply with their resume, while recruiters can post jobs, create companies, manage applications, and update hiring status from a role-based dashboard. The platform uses Clerk for authentication, Supabase for data and storage, and a responsive UI designed to work smoothly on desktop and mobile. It includes reusable components, protected routes, dynamic job/company data, and a polished landing page that presents the product as a complete hiring experience.

## Features

- Role-based access for candidates and recruiters
- Recruiter onboarding with job posting and company creation
- Candidate job search, filtering, and saved jobs
- Detailed job pages with apply flow and recruiter status controls
- Application management for recruiters
- Responsive landing page with sections for companies, services, pricing, FAQs, and contact
- Supabase-powered data fetching and file uploads
- Clean reusable UI components built with shadcn-style primitives

## Tech Stack

- React 19
- Vite
- React Router
- Clerk
- Supabase
- Tailwind CSS v4
- React Hook Form
- Zod
- Lucide React
- @uiw/react-md-editor
- Embla Carousel

## Other Important Things

- Auth and role data are stored through Clerk unsafe metadata.
- Company logos and resumes are handled through Supabase Storage.
- Protected routes ensure only signed-in users can access app pages.
- Recruiter and candidate experiences are separated across the UI and routes.
- The project ships with a dark theme and reusable page/card components.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/adisxix/Hired.git
cd Hired
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add the required keys:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

### 4. Set up Supabase

- Create the required tables for companies, jobs, saved_jobs, and applications.
- Create the `company-logo` and `resumes` storage buckets.
- Make sure the bucket permissions match the app flow you want to use.

### 5. Set up Clerk

- Create a Clerk application.
- Add the publishable key to your `.env` file.
- Make sure sign-in redirects and metadata updates are enabled for onboarding.

### 6. Run the project

```bash
npm run dev
```

### 7. Build for production

```bash
npm run build
```

### 8. Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
	api/           Supabase data access helpers
	components/    Reusable UI and feature components
	data/          Static JSON content
	hooks/         Shared hooks
	layouts/       App shell layout
	pages/         Route-level screens
	utils/         Utility helpers
	App.jsx        Router setup
```

## Page Routes

- `/` - Landing page
- `/onboarding` - Role selection and onboarding
- `/jobs` - Job listings
- `/job/:id` - Single job details
- `/post-job` - Recruiter job posting page
- `/saved-jobs` - Saved jobs for candidates
- `/saved-job` - Saved jobs alias route
- `/my-jobs` - Recruiter jobs or candidate applications

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
