# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Designed to showcase projects, experience, and skills in a visually appealing and interactive manner.

## Features

*   **Animated Hero Section:** Engaging introduction with text animations.
*   **About Me Section:** Detailed information about skills and background, with an avatar.
*   **Projects Showcase:** Grid display of projects with descriptions, tech stacks, and links.
*   **Resume/Experience Timeline:** Chronological display of work experience and education.
*   **Contact Form:** User-friendly form (ready for Email.js integration) and social media links.
*   **Light/Dark Mode Toggle:** User-selectable theme preference, persists across sessions.
*   **Responsive Design:** Optimized for viewing on all devices (desktop, tablet, mobile).
*   **SEO Optimized:** Meta tags for better search engine visibility and social sharing.
*   **Page Load Animation:** Smooth loading experience.
*   **Subtle Animations:** UI elements animate into view using Framer Motion for a dynamic feel.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (v15.x with App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4.x)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
*   **Language:** TypeScript
*   **Linting/Formatting:** ESLint (configured with Next.js defaults)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18.x or later recommended)
*   [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/personal-portfolio.git
    ```
    *(Replace `https://github.com/yourusername/personal-portfolio.git` with the actual repository URL once available.)*

2.  **Navigate to the project directory:**
    ```bash
    cd personal-portfolio
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    or if you prefer yarn:
    ```bash
    yarn install
    ```
    *Note: This project encountered some peer dependency conflicts with React 19 and older packages. If you face issues, try:*
    ```bash
    npm install --legacy-peer-deps
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
```
or
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the files.

## Building for Production

To create an optimized production build:

```bash
npm run build
```
or
```bash
yarn build
```
This command bundles the application for production usage.

To run the production build locally (after building):
```bash
npm run start
```
or
```bash
yarn start
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/), the platform from the creators of Next.js.

### Deploying to Vercel

1.  **Push your project to a GitHub repository.**
2.  **Sign up or log in to Vercel:** Visit [vercel.com](https://vercel.com/).
3.  **Connect your GitHub account** to Vercel.
4.  **Import Project:** Click on "Add New..." and select "Project".
5.  **Select your repository** from the list. Vercel should automatically detect it as a Next.js project and configure the build settings.
6.  **Configure Project (Optional):** You can set up environment variables here (e.g., for Email.js `SERVICE_ID`, `TEMPLATE_ID`, `USER_ID` if you integrate it).
7.  **Deploy:** Click the "Deploy" button.

Vercel will then build and deploy your application, providing you with a live URL.

## Project Structure

Here's a brief overview of the key directories:

*   `app/`: Contains the core application logic and page routes using Next.js App Router.
    *   `layout.tsx`: The main layout component, including `<html>`, `<body>` tags, font setup, and theme provider.
    *   `page.tsx`: The main page content for the portfolio.
*   `components/`: Reusable React components used throughout the application (e.g., `Hero.tsx`, `ProjectCard.tsx`, `Footer.tsx`).
*   `public/`: Static assets like images (e.g., `placeholder-avatar.svg`, `og-image.svg`) and other files directly accessible via the web server.
*   `styles/`: Global styles.
    *   `globals.css`: Global stylesheets, including Tailwind CSS directives and base styles.
*   `tailwind.config.ts`: Configuration file for Tailwind CSS, including theme customizations (fonts, colors) and `darkMode` strategy.
*   `next.config.ts`: Configuration file for Next.js.

## Customization

This portfolio is designed to be easily customizable. Here are some key places to update with your personal information:

*   **Site Metadata & SEO:**
    *   Edit `app/layout.tsx` for site-wide title, description, keywords, and Open Graph details (like `metadataBase` for your domain and `og:image`).
    *   Replace `public/og-image.svg` with your own Open Graph image (recommended size: 1200x630px).
*   **Personal Information:**
    *   **Hero Section (`components/Hero.tsx`):** Update your name/title, headline, and subtext.
    *   **About Me Section (`components/AboutMe.tsx`):** Modify the introductory paragraphs and the `skills` array with your skills and proficiency levels. Replace `public/placeholder-avatar.svg` with your own photo.
    *   **Projects Showcase (`components/ProjectsShowcase.tsx`):** Update the `projectsData` array with your own projects, including titles, descriptions, tech stacks, and live/GitHub URLs.
    *   **Resume/Experience (`components/ResumeExperience.tsx`):** Update the `experienceData` array with your work history and education.
    *   **Contact Section (`components/ContactSection.tsx`):** Update placeholder GitHub, LinkedIn URLs, and email addresses.
    *   **Footer (`components/Footer.tsx`):** The copyright name ("Adept Agent") can be changed here.
*   **Styling:**
    *   **Fonts:** Font definitions (Inter, Poppins) are in `app/layout.tsx`. Tailwind CSS font utility classes (`font-sans`, `font-heading`) are configured in `tailwind.config.ts`.
    *   **Colors:** Primary color themes (purples, blues, greens) are used throughout the components via Tailwind utility classes (e.g., `bg-purple-600`, `dark:text-green-400`). You can adjust these in the respective component files or define custom colors in `tailwind.config.ts`.
*   **Contact Form Integration:**
    *   The contact form in `components/ContactForm.tsx` is set up to be integrated with a service like Email.js. Follow comments in the `handleSubmit` function to add your service ID, template ID, and user ID.

---

This README provides a good starting point. Feel free to expand on any section or add more details as the project evolves.
