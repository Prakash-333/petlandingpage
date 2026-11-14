---
name: Lush Precision
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#9b3e3b'
  on-tertiary: '#ffffff'
  tertiary-container: '#ba5551'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#7f2928'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
  max-width: 1280px
---

## Brand & Style

The design system is anchored in a **Corporate Modern** aesthetic with a strong emphasis on ecological precision and technological reliability. It targets a professional audience that values efficiency and clarity in complex SaaS environments. 

The visual direction prioritizes **Minimalism** with a high-end, clean execution. It leverages expansive whitespace to reduce cognitive load while using a focused emerald palette to guide user attention and reinforce the brand's identity. The atmosphere is calm and trustworthy, blending the stability of enterprise software with the freshness of a sustainable-tech startup. High-quality typography and crisp geometric alignment serve as the primary structural elements, ensuring the interface feels both robust and innovative.

## Colors

The color strategy for this design system utilizes a tiered green hierarchy to establish clear information architecture. 

- **Primary & Action:** Emerald 600 (#059669) serves as the primary action color, providing high contrast against white backgrounds for buttons and active states. 
- **Accents & Icons:** Emerald 500 (#10b981) is reserved for illustrative icons and subtle brand flourishes, ensuring a vibrant but professional look.
- **Typography:** Emerald 900 (#064e3b) is used for bold headings to reinforce brand presence, while Foreground Text (#0f172a) handles standard body content for maximum legibility.
- **Surfaces:** Pure White (#ffffff) is the base surface, utilizing Emerald 50 and 100 for sectional differentiation and hover feedback. Emerald 200 and standard slate borders provide structural definition without clutter.

## Typography

This design system employs a dual-font strategy to balance character with utility. **Manrope** is used for all headlines (H1-H3), providing a modern, geometric feel that pairs perfectly with the SaaS aesthetic. Headlines in Emerald 900 should utilize tighter letter spacing for a more "locked-in" professional look.

**Inter** is utilized for all functional text, including body copy, labels, and UI elements. Its neutral, highly legible character ensures that data-heavy screens remain scannable. For small labels and metadata, uppercase styling with slight tracking increases visibility and provides a technical, organized feel.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop views, centered with a maximum width of 1280px to maintain readability. A 12-column system is used for dashboard layouts and marketing pages, featuring 24px gutters.

The spacing rhythm is built on a 4px baseline, ensuring all vertical and horizontal gaps are multiples of four. This mathematical consistency creates a disciplined, "tech-focused" layout. Large vertical sections use 80px (xl) padding to create clear breathing room between disparate content blocks, while interactive components use tighter 8px (xs) or 16px (sm) intervals.

## Elevation & Depth

To maintain a clean, modern SaaS look inspired by contemporary templates, depth is achieved through **Tonal Layers** and **Ambient Shadows**.

1.  **Surfaces:** The primary background is white. Secondary areas (sidebars, footers) use Emerald 50 or 100 to create subtle separation.
2.  **Shadows:** Shadows are used sparingly and should be highly diffused. Use a "soft-lift" approach: a subtle 10% opacity shadow with a large blur radius (e.g., 20px) and a hint of the primary emerald tint to avoid a "dirty" grey appearance.
3.  **Outlines:** Low-contrast outlines in Emerald 200 or Slate 200 are preferred over heavy shadows for defining cards and input fields, keeping the UI flat and lightweight.

## Shapes

The shape language for this design system is **Rounded**, utilizing a 0.5rem (8px) base radius for standard elements like buttons and input fields. This softened geometry counteracts the clinical nature of SaaS data, making the platform feel approachable yet precise.

- **Large Components:** Cards and modals use `rounded-xl` (1.5rem / 24px) to create a distinct containerized feel.
- **Small Elements:** Tooltips and tags use a smaller 4px radius or a full pill-shape where appropriate for categorization.

## Components

- **Buttons:** Primary buttons use Emerald 600 with white text and 8px corners. Secondary buttons use a transparent background with an Emerald 200 border and Emerald 600 text. Hover states for primary buttons should darken slightly, while secondary buttons should transition to an Emerald 50 fill.
- **Input Fields:** Use a 1px border (#e2e8f0). On focus, the border should transition to Emerald 500 with a subtle 2px outer glow (Emerald 50). Labels should be in Inter Bold 14px.
- **Chips & Tags:** Use Emerald 100 backgrounds with Emerald 900 text for high-contrast status indicators. Keep corners at 4px or pill-shaped.
- **Cards:** White background with an Emerald 200 border or a very soft ambient shadow. Use 24px internal padding for a spacious feel.
- **Logo Implementation:** The 'Green' (Bold, Emerald 900) and 'lane' (Normal, Emerald 500) must always be presented on a white or Emerald 50 background to maintain brand integrity.
- **Additional Elements:** Data visualizations should exclusively use the Emerald scale (50-900) to maintain a monochromatic, sophisticated aesthetic, utilizing Emerald 200 for axis lines and Emerald 600 for primary data points.