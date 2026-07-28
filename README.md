# Vanessa Battung — Portfolio Website

A modern, responsive personal portfolio and freelance-lead-generation website for **Vanessa Battung**, a Full Stack Developer based in Cabuyao, Laguna, Philippines. Built from her resume content, with a dedicated section for prospective clients to submit freelance project inquiries.

## 🎯 Project Goal
Showcase Vanessa's skills, education, and achievements in a modern, dark-themed developer portfolio, while actively generating freelance leads through an on-site inquiry form that stores submissions in a database for follow-up.

## ✅ Completed Features

- **Hero Section** — animated typed role text, gradient name styling, floating orbs, an animated "code card" visual, quick action buttons (Hire Me / View Resume), and social/contact icons.
- **About Section** — professional summary derived from resume (background, tech stack, education path from Food Technology to development), quick-glance info cards (location, email, phone, availability).
- **Skills Section** — categorized skill tags for Frontend, Backend, DevOps & Tools, and Languages, exactly matching resume content.
- **Services Section ("Freelance Services")** — 6 service offering cards (Web App Dev, API/Backend Dev, Database Design, Bug Fixing/Maintenance, Deployment/DevOps, Consultation).
- **Education Timeline** — BS in Food Technology (LSPU, 2010), High School (Pulo Nat'l HS, 2005), Elementary (Jose Rizal Mem'l School, 2001).
- **Achievements/Certifications** — ASP.NET Core MVC certification (TRENDS Academy, 2022), TESDA Computer Systems Servicing courses (2021).
- **Freelance / "Hire Me" Section** — a prominent call-to-action area explicitly stating Vanessa is accepting freelance projects, with:
  - Contact info cards (email, phone, location)
  - A **project inquiry form** (Name, Email, Project Type, Budget Range, Project Details) that saves submissions to a database table for Vanessa to review.
- **Responsive Design** — fully responsive layout for desktop, tablet, and mobile, including a mobile hamburger nav menu.
- **UI Polish** — smooth scroll navigation, active nav-link highlighting, AOS scroll animations, back-to-top button, preloader.
- **Resume file** — the uploaded resume PDF is included in the project (`resume/Vanessa-Battung-Resume.pdf`) and linked from the "View Resume" button.

## 🌐 Functional Entry Points

| Path | Description |
|---|---|
| `/index.html` (root) | Main single-page portfolio site with all sections (`#home`, `#about`, `#skills`, `#services`, `#education`, `#achievements`, `#freelance`) |
| `resume/Vanessa-Battung-Resume.pdf` | Downloadable/viewable original resume PDF |

### API Endpoints Used (RESTful Table API)
| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `tables/freelance_inquiries` | Submits a new freelance project inquiry from the contact form |

## 🗄️ Data Model — `freelance_inquiries` table

| Field | Type | Description |
|---|---|---|
| `id` | text | Unique inquiry ID (auto-generated) |
| `name` | text | Client's full name |
| `email` | text | Client's email address |
| `project_type` | text (enum) | Web Application / Website - Landing Page / API Development / Bug Fix - Maintenance / Full Stack Development / Other |
| `budget` | text (enum) | Below $200 / $200-$500 / $500-$1000 / $1000-$3000 / Above $3000 / Not sure yet |
| `message` | rich_text | Project details/message from client |
| `status` | text (enum) | New / In Review / Contacted / In Progress / Completed / Declined — for Vanessa's own tracking |

Data is stored via the project's built-in RESTful Table API (`tables/freelance_inquiries`), backed by CosmosDB in preview and Cloudflare D1 once hosted-deployed.

## 📁 File Structure

```
index.html               (main single-page site)
css/
  └── style.css           (all styling, responsive breakpoints, animations)
js/
  └── main.js             (typed text, nav, scroll effects, form submission logic)
resume/
  └── Vanessa-Battung-Resume.pdf   (original uploaded resume)
README.md
```

## 🚧 Not Yet Implemented
- A dedicated **admin/dashboard page** for Vanessa to view, filter, and manage incoming freelance inquiries (currently, submissions are stored in the table and can be viewed via the Table API or backend tools, but there's no in-site management UI).
- Portfolio **project showcase/case studies** section — the resume did not include specific past project details, so this section was omitted. Can be added once project details/screenshots are provided.
- Email/notification integration (e.g., auto-email Vanessa on new inquiry) — this requires a backend/email service, which is outside static-site capability. A user-provided authorization-free, CORS-enabled email API could be integrated if available.
- Live social links (GitHub/LinkedIn) — placeholder `#` links used since actual profile URLs weren't provided.

## 🔜 Recommended Next Steps
1. Provide actual GitHub/LinkedIn profile URLs to activate social links.
2. Share specific past projects/screenshots to build out a "Portfolio/Projects" showcase section.
3. Consider adding a simple password-gated admin view (or use the Table API directly) to review/manage `freelance_inquiries` submissions.
4. If desired, connect a client-approved email-notification API (CORS-enabled, no auth) so Vanessa gets notified instantly on new inquiries.

## 🚀 Deployment
To make this website live and publicly accessible, use the **Publish tab** in this workspace — it will handle deployment automatically and provide a live URL.
