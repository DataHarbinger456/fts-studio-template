# FTS Studios - Tech Audit Landing Page

## Project Overview
A premium, dark-themed multi-step lead qualification form designed for a high-end tech consultancy. The application features a glassmorphic UI, fluid animations, and a progress-tracked questionnaire.

## Tech Stack
- **Framework**: React 19 (Functional Components & Hooks)
- **Icons**: Lucide React
- **Typography**: Space Grotesk (Body) & Inter (Headings) via Google Fonts
- **Styling**: CSS3 with Custom Properties (Variables)
- **Runtime**: Browser-native ES Modules (via ESM.sh import maps)

## Project Structure
- `index.html`: Main entry point. Uses `<script type="importmap">` to handle dependencies without a heavy build step.
- `index.tsx`: Core application logic. Manages multi-step state, progress, and the success summary.
- `index.css`: Global design system. Contains the theme variables, glassmorphism effects, and responsive layout rules.
- `constants.ts`: The "Source of Truth" for the questionnaire. Modify this file to add, remove, or change form questions.
- `types.ts`: TypeScript interfaces for the form state and options.
- `components/`:
    - `DottedGlowBackground.tsx`: A high-performance HTML5 Canvas background effect.
    - `ArtifactCard.tsx`: A utility component for previewing content.
    - `Icons.tsx`: Custom SVG icons.

## Developer Instructions
1. **Local Development**: You can serve this directory using any simple HTTP server (e.g., `npx serve .` or Live Server in VS Code).
2. **Dependencies**: All dependencies are loaded via `https://esm.sh`. No `npm install` is required for basic functionality.
3. **Customization**:
    - To change the colors, update the `:root` variables in `index.css`.
    - To change the questions, edit the `FORM_STEPS` array in `constants.ts`.
4. **Hosting**: This project is static-site ready. Simply upload the files to Vercel, Netlify, or GitHub Pages.

## Form Flow
1. **Business Type** (Single Select)
2. **Challenge/Needs** (Multi-Select)
3. **Revenue Scale** (Single Select)
4. **Timing** (Single Select)
5. **Budget** (Single Select)
6. **Contact Info** (Text Inputs)
7. **Success Screen**: Shows a summary of user choices and a placeholder for a Cal.com embed.

---
Created by FTS Studios Tech Audit Builder.