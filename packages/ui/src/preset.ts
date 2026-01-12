/**
 * CampusIQ Tailwind CSS v4 Preset
 *
 * This preset provides the theme configuration for CampusIQ components.
 * Import this in your CSS file alongside the styles.css file.
 *
 * Usage in your main CSS file:
 * ```css
 * @import 'tailwindcss';
 * @import '@campusiq/ui/styles.css';
 * ```
 *
 * The styles.css file includes:
 * - CSS custom properties for colors
 * - @theme inline directive for Tailwind v4
 * - Light and dark mode variants
 */

// Re-export the theme configuration for programmatic access
export const campusiqTheme = {
  colors: {
    // Primary - CampusIQ Purple
    primary: {
      DEFAULT: "#5e4890",
      foreground: "#ffffff",
      dark: "#a78bfa",
      darkForeground: "#1e1b4b",
    },
    // Secondary
    secondary: {
      DEFAULT: "#f4f4f5",
      foreground: "#3f3f46",
      dark: "#3f3f46",
      darkForeground: "#fafafa",
    },
    // Semantic colors
    destructive: {
      DEFAULT: "#be123c",
      foreground: "#fef2f2",
      weak: "#fff1f2",
    },
    success: {
      DEFAULT: "#047857",
      foreground: "#ffffff",
      weak: "#ecfdf5",
    },
    warning: {
      DEFAULT: "#d97706",
      foreground: "#ffffff",
      weak: "#fffbeb",
    },
    informational: {
      DEFAULT: "#0284c7",
      foreground: "#ffffff",
      weak: "#f0f9ff",
    },
  },
  radius: "0.5rem",
} as const;

export type CampusIQTheme = typeof campusiqTheme;
