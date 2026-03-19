# AxSyntheGroup Corporate Website

A premium corporate business website built with Angular 21. It showcases AxSyntheGroup's main company vision, core values, diverse portfolio of subsidiary brands, comprehensive service offerings, and completed projects with seamless navigation, smooth animations, and professional branding.

## What Is This? (Project Overview)

AxSyntheGroup Corporate Website is the digital flagship of AxSyntheGroup, designed to establish corporate presence, communicate company vision and values, and showcase our diverse ecosystem of subsidiary brands and business units.

- Visitors discover AxSyntheGroup's mission, vision, and core business values through an engaging homepage.
- The platform showcases our portfolio of subsidiary brands (Devora, Edvana, Tutoriq, Pixora, Evontis, Creovis, Ledgrix), each with individual brand identity, vision, and service offerings.
- A comprehensive "About Us" section details company history, leadership, organizational structure, and corporate culture.
- The "Services" section highlights core competencies, service offerings, and industry expertise across all business units.
- The "Completed Projects" section demonstrates proven track record, client success stories, and industry impact.
- An integrated contact system enables prospective clients, partners, and investors to reach out for business inquiries and collaborations.
- Smooth scroll-reveal animations, optimized image handling, and mobile-responsive design ensure a premium user experience across all devices.
- Dynamic routing and standalone component architecture support fast, scalable expansion as the company grows.

## Tech Stack

- Frontend: Angular 21 (Standalone Components)
- Language: TypeScript 5.9
- Styling: Tailwind CSS
- Build Tool: Angular CLI 21
- Testing: Vitest
- Icons/Animations: Custom CSS animations, scroll-reveal directives
- Code Quality: Prettier, ESLint
- Package Manager: npm 11.6+

## Requirements

### Technical Requirements

- Node.js 18.17+ (recommended: latest LTS)
- npm 9+
- Modern browser with ES2022+ support
- 1GB+ free disk space for dependencies

### Environment Variables

This project is primarily client-side but may integrate with backend services for form submissions and inquiries. Configure the following optional environment variables:

- `ANGULAR_APP_API_URL`: Backend API endpoint for form submissions and lead management
- `ANGULAR_APP_COMPANY_EMAIL`: Primary contact email address for display and inquiries
- `ANGULAR_APP_SUPPORT_EMAIL`: Support email for technical inquiries
- `ANGULAR_APP_PHONE`: Corporate phone number for contact information
- `ANGULAR_APP_WHATSAPP_NUMBER`: WhatsApp business number for direct messaging (international format, no +)
- `ANGULAR_APP_GA_ID`: Google Analytics tracking ID for website analytics
- `ANGULAR_APP_COMPANY_ADDRESS`: Corporate office address for contact information
- `ANGULAR_APP_SOCIAL_MEDIA_LINKS`: Social media profile URLs (LinkedIn, Twitter, Facebook, etc.)

Note: The repository includes `.env.example` as a template. For production builds, configure these service endpoints in `src/app/app.config.ts` and your hosting platform's environment settings.

## Stakeholders

- **Executive Leadership & Board**: Wants a professional digital presence that communicates corporate vision, values, and market positioning
- **Business Development Team**: Needs a platform to attract new clients, partners, and investment opportunities
- **Brand & Marketing Team**: Manages corporate messaging, subsidiary brand storytelling, and content strategy
- **Subsidiary Companies**: Each brand (Devora, Edvana, Tutoriq, etc.) requires dedicated brand presence and service showcase
- **Prospective Clients & Partners**: Discover company capabilities, completed work, and contact for business opportunities
- **Engineering & IT Team**: Maintains and extends the website with new features, CMS integration, analytics, and scalability

## Features

### Core Company Pages

- **Home / Landing Page**: Hero section with company vision statement, core values, and featured subsidiary brands
- **About Us**: Company history, mission, vision, organizational structure, leadership team, and corporate culture
- **Services**: Comprehensive overview of core competencies, service offerings, and industry expertise across all business units
- **Completed Projects Section**: Portfolio of successful projects, case studies, client testimonials, and industry impact metrics
- **Contact Us**: Professional inquiry form, multiple contact channels, location information, and business development inquiries
- **Subsidiary Brand Showcase**: Individual branded pages for each company (Devora, Edvana, Tutoriq, Pixora, Evontis, Creovis, Ledgrix) with:
  - Brand identity and vision
  - Service offerings and specializations
  - Portfolio of completed work
  - Company-specific contact information

### Technical Features

- **Premium User Experience**: Smooth scroll-reveal animations, polished transitions, and modern design
- **Mobile Responsive**: Fully optimized for mobile, tablet, and desktop devices for all business visitors
- **Brand Consistency**: Unified design system across all subsidiary brand pages with individual customization
- **SEO Optimized**: Meta tags, structured data, semantic HTML for corporate visibility and search ranking
- **Professional Contact Management**: Form validation, inquiry routing, and lead capture capabilities
- **Image Optimization**: Lazy-loading, responsive images, and optimized asset delivery for performance
- **Standalone Component Architecture**: Modular, scalable code structure for easy maintenance and expansion
- **404 Error Handling**: Custom error page maintains professional appearance even for invalid routes

## How To Install

1. Clone the repository:

```bash
git clone <your-repo-url>
cd axsynthegroup-web
```

2. Install dependencies:

```bash
npm install
```

3. Build shared assets (optional, for production optimization):

```bash
npm run build
```

Alternatively on Windows PowerShell:

```powershell
npm run build
```

4. Start the development server:

```bash
npm run dev
```

This will launch the application at `http://localhost:4200` by default.

5. Open in browser:

- `http://localhost:4200` (Main portfolio)
- `http://localhost:4200/about` (About page)
- `http://localhost:4200/portfolio` (Portfolio listing)
- `http://localhost:4200/contact` (Contact form)
- Individual project pages: `/devora`, `/edvana`, `/tutoriq`, `/pixora`, `/evontis`, `/creovis`, `/ledgrix`

## How To Use

### Visitor (Client/Partner) Flow

1. Land on the home page and review AxSyntheGroup's mission and vision.
2. Browse the About Us section to understand company structure and leadership.
3. Explore Services to identify relevant business offerings.
4. Review Completed Projects to assess company track record and capabilities.
5. Visit individual subsidiary brand pages to understand specific service lines.
6. Submit a business inquiry or contact form for partnerships, project discussions, or sales inquiries.

### Business Development Flow

1. Access all company pages to understand corporate positioning and market reach.
2. Review subsidiary brand pages and services for comprehensive portfolio understanding.
3. Use completed projects to support pitches and demonstrate proven results.
4. Utilize contact forms and inquiry system to capture leads and follow up on opportunities.
5. Share relevant subsidiary brand pages with prospective clients and partners.

### Internal Team / Administrator Flow

1. Update company information in About Us section (mission, vision, leadership).
2. Manage Services section to reflect current offerings and capabilities.
3. Add or update project case studies in Completed Projects section.
4. Maintain individual subsidiary brand pages with current information and branding.
5. Monitor and respond to contact form submissions through the inquiry system.
6. Track and manage business development leads from website inquiries.

### Developer/Maintainer Flow

1. Clone and install the project as described in the Installation section.
2. Update company content in relevant page components (`/src/app/pages`).
3. Customize branding colors, fonts, and assets in Tailwind CSS and public assets.
4. Add new subsidiary brands by creating new page components following existing patterns.
5. Test locally with `npm run start` and validate all routes work correctly.
6. Build for production with `npm run build` and deploy to hosting platform.

### Project Structure

- **`src/app/pages/`**: Main company pages (Home, About, Services, Portfolio, Contact) and individual subsidiary brand pages
- **`src/app/shared/`**: Reusable components (Header, Footer) and directives (RevealOnScroll) for consistent branding
- **`src/app/app.routes.ts`**: Route definitions for all company pages and subsidiary brands
- **`src/app/app.config.ts`**: Application-wide configuration and theme settings
- **`public/`**: Static assets (logos, images, company photos, project gallery, brand assets)

## Scripts

- `npm run start`: Run local development server (`ng serve`)
- `npm run build`: Production build
- `npm run watch`: Watch mode for continuous development builds
- `npm run test`: Run unit tests with Vitest
- `npm run lint`: Run linting checks (if configured)

## Future Improvements

- **CMS Integration** (Contentful, Strapi): Dynamic content management without code changes for corporate pages and project updates
- **Backend Integration**: Form submissions, lead tracking, and inquiry management system
- **Blog & News Section**: Corporate blog, press releases, and company news/announcements
- **Analytics Integration** (Google Analytics, Mixpanel): Track visitor behavior, conversion sources, and user engagement
- **Dark Mode Toggle**: Brand flexibility and improved user experience options
- **Multi-Language Support** (i18n): Expand market reach across international markets and regions
- **Client Testimonials Carousel**: Showcase customer success stories and client feedback
- **Team Directory**: Interactive team profiles and org chart for internal communications
- **Social Media Integration**: Linked social feeds and company social presence
- **Advanced SEO**: Dynamic sitemaps, structured data, and SEO optimization for search visibility
- **Lead Management Dashboard**: Internal dashboard for tracking and managing business inquiries
- **Newsletter Signup**: Email marketing integration for company announcements and updates
- **Career/Jobs Page**: Recruitment section for open positions and company careers information
- **Partner Portal**: Dedicated area for business partners and integrations
- **Performance Optimization**: Image CDN, code splitting, and advanced caching strategies

## Deployment

### Production Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Hosting Options

- **Vercel**: Optimized for Angular with automatic deployments from Git
- **Netlify**: Simple drag-and-drop or Git integration
- **Firebase Hosting**: Free tier available with `firebase-tools`
- **AWS Amplify**: Integrated CI/CD pipeline
- **Azure Static Web Apps**: Enterprise-grade hosting with Microsoft integration

### Environment Setup for Deployment

Ensure all environment variables are configured in your hosting platform's dashboard before deployment.

## Development Tips

- Use the **Reveal On Scroll directive** on elements to trigger animations when they scroll into view.
- Leverage **Tailwind CSS utility classes** for rapid UI development without custom CSS.
- Keep component files organized with collocated `.ts`, `.html`, and `.css` files.
- Run tests frequently with `npm run test` to catch regressions early.

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request for review

## Support & Contact

For business inquiries, partnerships, and collaboration opportunities:

- **📧 Corporate Email**: info@axsynthegroup.com
- **💬 Contact Form**: [http://localhost:4200/contact](http://localhost:4200/contact)
- **🌐 Corporate Website**: [https://www.axsynthegroup.com](https://www.axsynthegroup.com)
- **📱 Business Development**: [Direct inquiry page](http://localhost:4200/contact)

## Internal Development Documentation

### Updating Corporate Content

- Update company vision and mission in Home component
- Modify About Us section in About component
- Add/edit services in Services component
- Update completed projects in Portfolio component
- Manage subsidiary brand information on individual brand pages

### Building & Deployment

For production builds and deployment guidelines, see the [Deployment](#deployment) section below.

For technical support or development questions, contact the Engineering team.

---

**AxSyntheGroup Corporate Website** | Built with Angular 21 and Tailwind CSS | © 2026 AxSyntheGroup. All rights reserved.

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
