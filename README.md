# LeanGrowth Agency - Landing Page

A modern, high-performance Landing Page for a Marketing Agency focused on "Lean Marketing" solutions for SMEs (Small and Medium Enterprises).

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Plus Jakarta Sans & Inter (Google Fonts)

## 🎨 Design System

### Colors
- **Deep Navy Blue**: `#0F172A` - Primary brand color
- **Electric Blue**: `#3B82F6` - Accent/CTA color
- **Light Slate**: `#F8FAFC` - Background color

### Typography
- **Headings**: Plus Jakarta Sans (700/800 weight)
- **Body**: Inter (400/500 weight)

### Design Principles
- Minimalist & Corporate Modern
- Mobile-first responsive design
- Generous whitespace
- Subtle shadows and rounded corners
- Smooth animations

## 📁 Project Structure

```
lean-marketing/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Header.tsx      # Sticky navigation
│   │   │   ├── Hero.tsx        # Hero section with CTA
│   │   │   ├── Problems.tsx    # Pain points cards
│   │   │   ├── Solutions.tsx   # Value proposition (zig-zag)
│   │   │   ├── Services.tsx    # Pricing/service cards
│   │   │   ├── SocialProof.tsx # Testimonials & logos
│   │   │   ├── LeadCapture.tsx # Lead form
│   │   │   ├── Footer.tsx      # Footer links
│   │   │   └── index.ts
│   │   └── ui/                 # Shadcn UI components
│   └── lib/
│       └── utils.ts
├── tailwind.config.ts
└── package.json
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Landing Page Sections

1. **Header** - Sticky navigation with logo, menu items, and CTA button
2. **Hero** - High-impact headline with statistics and dual CTAs
3. **Problems** - Three pain point cards highlighting common marketing issues
4. **Solutions** - Zig-zag layout showcasing value propositions
5. **Services** - Three pricing cards (BUILD, RUN, SCALE packages)
6. **Social Proof** - Logo slider and featured testimonial
7. **Lead Capture** - Contact form with benefits
8. **Footer** - Links, contact info, and social media

## ✨ Features

- ✅ Fully responsive (Mobile-first)
- ✅ Smooth scroll animations (Framer Motion)
- ✅ Sticky header with scroll detection
- ✅ Interactive form with loading/success states
- ✅ Logo carousel animation
- ✅ Accessibility-friendly
- ✅ SEO optimized metadata
- ✅ Vietnamese content with high-converting copywriting

## 📝 Vietnamese Content

All content is written in Vietnamese with professional marketing copywriting, optimized for SME business owners looking for lean marketing solutions.

## 🔧 Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --navy-deep: 222.2 47.4% 11.2%;
  --electric-blue: 217.2 91.2% 59.8%;
  --slate-light: 210 40% 98%;
}
```

### Content
Update the content arrays in each section component:
- `Problems.tsx` - Problem cards data
- `Solutions.tsx` - Solution features
- `Services.tsx` - Pricing packages
- `SocialProof.tsx` - Logos and testimonials

## 📄 License

MIT License - Feel free to use for your projects.

---

Built with ❤️ by LeanGrowth Agency
