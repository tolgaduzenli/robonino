# Plan for Robonino International Education Website

## Project Overview
Building a bilingual (English/Turkish) responsive website using Next.js, TypeScript, and TailwindCSS, deployed to Vercel.

## Technical Approach
- **Framework**: Next.js with TypeScript
- **Styling**: TailwindCSS
- **Internationalization**: Single codebase with language detection (browser language/IP)
- **Content Management**: Constant files for all static content (no duplicate pages per language)
- **Design Reference**: Existing HTML files in `english_files/` and `turkish_files/` folders

## Implementation Plan

### Phase 1: Project Setup (High Priority)
- Initialize Next.js project with TypeScript and TailwindCSS
- Setup project structure and folder organization
- Create constant files for colors, fonts, and design elements
- Create bilingual content constants (English/Turkish strings)
- Setup i18n system with language detection

### Phase 2: Shared Components (High Priority)
- Create shared Navigation component
- Create shared Footer component
- Create shared Contact Form component with validation
- Create Gallery system component
- Create FAQ system component

### Phase 3: Page Development (High Priority)
- Create Home page (English & Turkish)
- Create Study in UK page (English) / Ingilterede Egitim page (Turkish)
- Create Robotic & Coding page (English) / Robotik & Kodlama page (Turkish)
- Create Corporate Events page (English) / Kurumsal Etkinlikler page (Turkish)
- Create About Us page (English) / Hakkımızda page (Turkish)
- Create Contact page (English) / İletişim page (Turkish)

### Phase 4: Polish & Deployment (Medium/Low Priority)
- Create 404 error page
- Review reference HTML files for design patterns
- Test responsiveness on mobile devices
- Setup Vercel deployment configuration

## Key Design Decisions
- **Single Component Architecture**: One component per page type, language determined by context
- **Centralized Content**: All text stored in constant files organized by language
- **Modular Structure**: Reusable components for navigation, footer, forms, gallery, FAQ
- **Responsive First**: Mobile-first design using TailwindCSS

## Design System
**Color Palette:**
- Primary: #0F172A (dark blue)
- Secondary: #F97316 (bright orange)
- Tertiary: #06B6D4 (cyan/blue)
- Neutral: #F8FAFC (off-white)

**Typography:**
- Font Family: Plus Jakarta Sans (headlines, body, labels)

## Contact Form & Footer
- Contact form will send emails to: info@robonino.com
- Footer will include email under contact us section

## Images & Icons
- Use image links from existing HTML files (to be updated later with better images)
- Add icon library (Lucide React recommended) to project
- Replace HTML icons with equivalent icons from icon library
