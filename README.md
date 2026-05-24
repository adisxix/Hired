# Hired — Job Portal Platform

**Hired** is a modern, full-stack job portal web application built with React that connects job seekers with recruiters in a seamless, intuitive experience. The platform allows candidates to browse, search, filter, and apply for job openings across top global companies, while recruiters can post new job listings, manage applicants, and track hiring status — all from a single, beautifully designed dashboard. Powered by Supabase for real-time backend services and Clerk for secure, production-ready authentication, Hired delivers a polished experience with role-based access, resume uploads, saved jobs, markdown-powered job descriptions, and a responsive design that works flawlessly on any device. Whether you're a developer hunting for your next role or a startup looking to fill positions fast, Hired makes the hiring process simpler, smarter, and more transparent for everyone involved.

---

## ✨ Features

### For Job Seekers (Candidates)
- 🔍 **Search & Filter Jobs** — Search by title, filter by location (Indian states) and company
- 📄 **Apply to Jobs** — Submit applications with experience, skills, education, and resume upload
- ❤️ **Save Jobs** — Bookmark jobs for later and manage your saved list
- 📊 **Track Applications** — View all submitted applications with real-time status updates
- 👤 **Role-Based Onboarding** — Choose your role (Candidate or Recruiter) on first sign-in

### For Recruiters
- 📝 **Post Jobs** — Create detailed job listings with markdown-powered requirements
- 🏢 **Add Companies** — Register new companies with logo uploads
- 📋 **Manage Applications** — Review applicants, download resumes, update statuses (Applied → Interviewing → Hired/Rejected)
- 🔒 **Toggle Hiring Status** — Open or close job postings at any time
- 🗑️ **Delete Jobs** — Remove job postings you no longer need

### General
- 🔐 **Authentication** — Secure sign-in/sign-up powered by Clerk with dark theme
- 🛡️ **Protected Routes** — Role-based route protection (candidates can't access recruiter pages and vice versa)
- 🌙 **Dark Mode** — Full dark theme with custom grid background and glassmorphism UI
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop screens
- 🎠 **Company Carousel** — Auto-scrolling logo carousel showcasing partner companies
- 📖 **FAQ Section** — Accordion-based frequently asked questions
- 📬 **Contact Form** — Get-in-touch form on the landing page
- 💰 **Pricing Plans** — Display of Basic, Premium, and Enterprise tiers

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, React Router v7 |
| **Styling** | Tailwind CSS v4, shadcn/ui components, custom CSS |
| **State Management** | React Hooks, Custom `useFetch` hook |
| **Forms & Validation** | React Hook Form, Zod schema validation |
| **Authentication** | Clerk (with dark theme, role-based metadata) |
| **Backend / Database** | Supabase (PostgreSQL, Storage, Row Level Security) |
| **Rich Text** | MDEditor (`@uiw/react-md-editor`) for job requirements |
| **UI Components** | Radix UI primitives, Lucide React icons, Vaul (drawer) |
| **Carousel** | Embla Carousel with autoplay |
| **Build Tool** | Vite 8 |
| **Location Data** | `country-state-city` (Indian states) |
| **Loaders** | React Spinners (BarLoader) |

---

## 📁 Project Structure

```
Hired - Job Portal Platform/
├── public/
│   ├── hiredlogo.svg              # App logo
│   ├── bgvid.mp4                  # Landing page hero video
│   ├── aboutus.mp4                # About section video
│   ├── companies/                 # Company logo assets
│   └── community/                 # Community section images
├── src/
│   ├── api/
│   │   ├── apiJobs.js             # Jobs CRUD, save/unsave, filters
│   │   ├── apiApplication.js      # Apply, update status, fetch applications
│   │   └── apiCompanies.js        # Fetch & add companies
│   ├── components/
│   │   ├── ui/                    # shadcn/ui primitives (Button, Card, Select, etc.)
│   │   ├── header.jsx             # Navigation bar with auth
│   │   ├── footer.jsx             # Footer with socials & newsletter
│   │   ├── job-card.jsx           # Job listing card with save/delete
│   │   ├── apply-job.jsx          # Application drawer form
│   │   ├── application-card.jsx   # Application details card
│   │   ├── add-company-drawer.jsx # New company registration drawer
│   │   ├── created-jobs.jsx       # Recruiter's posted jobs grid
│   │   ├── created-applications.jsx # Candidate's applications list
│   │   ├── protected-route.jsx    # Auth & role guard wrapper
│   │   └── theme-provider.jsx     # Dark/light theme context
│   ├── pages/
│   │   ├── landing.jsx            # Home page with hero, services, pricing, FAQ
│   │   ├── onboarding.jsx         # Role selection (Candidate/Recruiter)
│   │   ├── job-listing.jsx        # Browse & filter all jobs
│   │   ├── job.jsx                # Single job detail page
│   │   ├── post-job.jsx           # Create new job form (Recruiter only)
│   │   ├── saved-job.jsx          # Saved jobs page (Candidate only)
│   │   └── my-jobs.jsx            # My applications / posted jobs
│   ├── hooks/
│   │   └── use-fetch.jsx          # Custom data-fetching hook with loading/error states
│   ├── utils/
│   │   ├── supabase.js            # Supabase client with Clerk token auth
│   │   └── company-logo.js        # Company logo path resolver
│   ├── layouts/
│   │   └── app-layout.jsx         # Root layout with Header, Outlet, Footer
│   ├── lib/
│   │   └── utils.js               # cn() utility (clsx + tailwind-merge)
│   ├── data/
│   │   ├── companies.json         # Company carousel data
│   │   └── faq.json               # FAQ content
│   ├── App.jsx                    # Router configuration
│   ├── main.jsx                   # Entry point with ClerkProvider
│   ├── App.css                    # Grid background styles
│   ├── index.css                  # Tailwind config, CSS variables, theme tokens
│   └── shadcn-tailwind.css        # shadcn animation keyframes & custom variants
├── .env                           # Environment variables (gitignored)
├── .gitignore
├── components.json                # shadcn/ui config
├── vite.config.js                 # Vite + Tailwind + path aliases
├── package.json
└── LICENSE                        # MIT License
```

---

## 🚀 Getting Started

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

---

## 📸 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Landing** | `/` | Hero video, company carousel, services, pricing, about, FAQ, contact |
| **Onboarding** | `/onboarding` | Role selection — Candidate or Recruiter |
| **Job Listings** | `/jobs` | Browse all jobs with search, location & company filters |
| **Job Details** | `/job/:id` | Full job details, requirements (markdown), apply button |
| **Post a Job** | `/post-job` | Job creation form with markdown editor (Recruiter only) |
| **Saved Jobs** | `/saved-jobs` | Bookmarked jobs list (Candidate only) |
| **My Jobs** | `/my-jobs` | Candidate: applications list · Recruiter: posted jobs grid |

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/public key |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |

---

## 🗄️ Database Schema

### `companies`
| Column | Type | Description |
|--------|------|-------------|
| `id` | `int8` (PK) | Auto-incrementing ID |
| `name` | `text` | Company name |

### `jobs`
| Column | Type | Description |
|--------|------|-------------|
| `id` | `int8` (PK) | Auto-incrementing ID |
| `title` | `text` | Job title |
| `description` | `text` | Job description |
| `location` | `text` | Job location (Indian state) |
| `company_id` | `int8` (FK) | References `companies.id` |
| `recruiter_id` | `text` | Clerk user ID of the recruiter |
| `isOpen` | `boolean` | Whether the job is accepting applications |
| `requirements` | `text` | Markdown-formatted requirements |

### `applications`
| Column | Type | Description |
|--------|------|-------------|
| `id` | `int8` (PK) | Auto-incrementing ID |
| `job_id` | `int8` (FK) | References `jobs.id` |
| `candidate_id` | `text` | Clerk user ID of the candidate |
| `name` | `text` | Candidate's full name |
| `status` | `text` | `applied`, `interviewing`, `hired`, `rejected` |
| `experience` | `int4` | Years of experience |
| `skills` | `text` | Comma-separated skills |
| `education` | `text` | `Intermediate`, `Graduate`, `Post Graduate` |
| `resume` | `text` | Public URL to uploaded resume |
| `created_at` | `timestamptz` | Application timestamp |

### `saved_jobs`
| Column | Type | Description |
|--------|------|-------------|
| `id` | `int8` (PK) | Auto-incrementing ID |
| `user_id` | `text` | Clerk user ID |
| `job_id` | `int8` (FK) | References `jobs.id` |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Aditya Sharma**

- GitHub: [@adisxix](https://github.com/adisxix)

---

<p align="center">
  Built with ❤️ using React, Supabase & Clerk
</p>
