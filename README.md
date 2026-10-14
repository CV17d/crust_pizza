# Crust Pizza Co. - Pixel-Perfect Clone

A pixel-perfect, highly responsive clone of the **Crust Pizza Co.** landing page built using **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS**, strictly engineered following the **Atomic Design Methodology**.

---

## Architecture & Atomic Design

Every UI element is modularized into dedicated single-responsibility files (1 Component = 1 File):

```
components/
├── atoms/                # Fundamental UI building blocks
│   ├── Button.tsx        # Crust Orange pill CTA button
│   ├── NavLink.tsx       # Navigation item with active badge state
│   ├── Logo.tsx          # Centered circular Crust Pizza Co. emblem
│   ├── IconButton.tsx    # Circular profile & social icon buttons
│   ├── TapeSticker.tsx   # Scrapbook translucent masking tape
│   ├── SectionHeading.tsx# Responsive display headers
│   ├── PriceBadge.tsx    # Circular orange pricing button
│   ├── FeatureIconBadge.tsx # Squircle icon badge with label
│   ├── TextLink.tsx      # Uppercase inline link
│   ├── CircularIconBadge.tsx # Circular badge for promo cards
│   └── QuickContactBadge.tsx # Square quick-action contact badges
├── molecules/            # Combinations of atoms
│   ├── NavMenu.tsx       # Left navigation links cluster
│   ├── HeaderActions.tsx # Right utility actions, social & call prompt
│   ├── HeroContentCard.tsx # Dark torn-paper card with headline & CTA
│   ├── MenuCard.tsx      # Individual dish card with photo & price badge
│   ├── ChicagoFeatureGrid.tsx # 3x2 squircle feature badges
│   ├── TeamPolaroids.tsx # Overlapping tilted Polaroid photos with tape
│   ├── PromoDarkCard.tsx # Dark promo card with circular badge & button
│   ├── CommunityCard.tsx # @yourbrandhandle & outreach illustration
│   ├── WhyChooseUsCard.tsx # White card with 3x2 photo gallery
│   ├── FranchiseCard.tsx # Franchise pitch & request button
│   ├── FooterOrderPrompt.tsx # Brand emblem paired with order invitation
│   └── FooterNav.tsx     # Spanning bottom navigation links
└── organisms/            # Assembled view sections
    ├── Navbar.tsx        # Top navigation with mobile drawer
    ├── HeroBanner.tsx    # Rounded photographic hero showcase
    ├── HeroSection.tsx   # Section 1: Header & Hero
    ├── MenuSection.tsx   # Section 2: "Our Menu" 4-dish grid
    ├── ChicagoStyleSection.tsx # Section 3: "Home of Chicago-Style"
    ├── WaysToEnjoySection.tsx # Section 4: Ways to Enjoy & Why Choose Us
    ├── FranchiseSection.tsx # Section 5A: Storefront & Franchise block
    └── Footer.tsx        # Section 5B: Global footer bar
```

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: [Oswald](https://fonts.google.com/specimen/Oswald) (Condensed Display) & [Montserrat](https://fonts.google.com/specimen/Montserrat) (Body)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: Next.js `<Image />` + [Sharp](https://sharp.pixelplumbing.com/)

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/CV17d/crust_pizza.git
cd crust_pizza
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```
