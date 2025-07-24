# Dr. Salma - Women Ontario Hub (Next.js)

A modern, professional Next.js website for Dr. Salma, a Medical Naturopath specializing in women's health in Ontario.

## 🎨 Brand Colors
- **Primary Pink**: `#e40056` - Used for CTAs, highlights, and primary elements
- **Primary Green**: `#126610` - Used for secondary elements and accents
- **Light Gray**: `#e8e7e7` - Used for backgrounds and subtle elements

## 🚀 Features

### Modern Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Design System
- **Feminine Aesthetic** - Soft curves, warm colors, elegant typography
- **Professional Credibility** - Clean design, medical expertise messaging
- **Mobile-First** - Responsive design for all devices
- **Accessibility** - WCAG compliant, keyboard navigation

### Components
- **Header** - Fixed navigation with dropdowns and mobile menu
- **Hero Section** - Animated content with trust indicators
- **Modern Animations** - Smooth transitions and micro-interactions
- **Performance Optimized** - Image optimization, lazy loading

## 📁 Project Structure
```
Dr.Salma website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation component
│   └── Hero.tsx           # Hero section
├── public/                 # Static assets
│   └── images/            # Image assets
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Move images to public folder
cp assets/images/* public/images/

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

## 🎯 Key Improvements Over Static HTML

### Performance
- **Server-Side Rendering** - Better SEO and initial load
- **Image Optimization** - Automatic WebP conversion
- **Code Splitting** - Smaller bundle sizes
- **Lazy Loading** - Faster page loads

### Developer Experience
- **TypeScript** - Type safety and better IDE support
- **Component Reusability** - Modular architecture
- **Hot Reloading** - Instant development feedback
- **Modern Tooling** - ESLint, Prettier, etc.

### User Experience
- **Smooth Animations** - Framer Motion integration
- **Interactive Elements** - Hover effects, micro-interactions
- **Mobile Optimized** - Touch-friendly interface
- **Accessibility** - Screen reader support

## 📸 Required Images
1. **Logo** (`public/images/logo.png`) - Dr. Salma's professional logo
2. **Hero Image** (`public/images/salma-1.png`) - Professional photo of Dr. Salma

## 🎨 Design Principles
- **Feminine aesthetic** with soft curves and warm colors
- **Professional credibility** through clean typography
- **Trust-building** through medical expertise messaging
- **Accessibility** for all users
- **Mobile-first** responsive design

## 🚀 Next Steps
- [ ] Add About Dr. Salma section
- [ ] Create Services pages with dynamic routing
- [ ] Add Resources/Blog section with CMS
- [ ] Create Locations page with maps
- [ ] Add Contact form with validation
- [ ] Implement booking system
- [ ] Add testimonials section
- [ ] Create FAQ page
- [ ] Add SEO optimization
- [ ] Implement analytics

## 📞 Support
For any questions or modifications, please refer to the code comments or contact the development team.

---

**Built with ❤️ for Dr. Salma's Women Ontario Hub using Next.js** 