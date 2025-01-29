# \*\*Next.js Contentful Integration Project

This is a Next.js application integrated with Contentful, built using TypeScript. It demonstrates how to use Contentful as a headless CMS for managing and rendering dynamic content on a Next.js front-end application. The app features a dynamic hero section, a feature section, and a call-to-action (CTA) section.

---

## **Tools and Technologies Used**

- **Next.js**: React-based framework for building server-rendered or statically-exported web applications.
- **React**: JavaScript library for building user interfaces, used alongside Next.js for component-driven development.
- **TypeScript**: A superset of JavaScript that adds static types for safer, more predictable code.
- **Contentful**: A headless CMS to manage and store content, accessed via Contentful's APIs.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive, modern UI designs.
- **Vercel**: A platform for deploying Next.js applications with optimized serverless functions.

---

## **Features of the Project**

- Responsive design with mobile-first approach
- Dynamic content rendering fetched from Contentful
- CTA and feature sections to display services or products
- Next.js image optimization (automatically resized and served in modern formats like WebP)
- Performance optimizations including lazy loading and static site generation

---

## **Set Up Contentful to Run the Application Locally**

To run the project locally with Contentful, follow these steps:

### 1. **Create a Contentful Account**

Sign up for a free account at [Contentful](https://www.contentful.com/).

### 2. **Create a New Space in Contentful**

- After logging into Contentful, create a new space that will serve as the backend for the project.

### 3. **Create Content Models in Contentful**

In your Contentful space, create the following content models:

- **Hero Section**: A model for the homepage hero section. This includes fields like `title`, `subtitle`, `ctaText`, `ctaLink`, and `backgroundImage`.
- **Feature Section**: A model for the feature section, including fields like `title`, `description`, and `icon` (image).
- **CTA Section**: A model for the Call-To-Action section, with fields like `title`, `ctaText`, `Link`, and `subtitle`.

After creating the models, you can create sample entries for each of them.

### 4. **Generate API Keys**

Go to **Settings** > **API keys** in Contentful and generate an API key for your space. Save your **Space ID** and **Content Delivery API Access Token**.

### 5. **Configure Environment Variables**

In the root directory of the Next.js project, create a `.env.local` file and add the following variables:

```bash
CONTENTFUL_SPACE_ID=<your-space-id>
CONTENTFUL_ACCESS_TOKEN=<your-access-token>
```

### Structure

```
/pages
   /index.tsx                # The main page that renders Hero, Feature, and CTA sections
/components
  /Hero.tsx                 # Component for Hero Section
  /Features.tsx             # Component for Features Section
  /CTA.tsx                  # Component for Call-to-Action Section
/types
  /type.ts                  # TypeScript types for Contentful data models (Hero, Feature, CTA)
/styles
  /globals.css              # Global styles (Tailwind setup, base styles, etc.)
  /tailwind.config.js       # Tailwind CSS configuration file
/.env.local                # Environment variables (Contentful API keys)
/next.config.js            # Configuration for Next.js

```
