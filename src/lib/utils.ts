import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prefix static asset paths with Vite's BASE_URL (e.g., "/repo-name/") so
// they resolve correctly on GitHub Pages or any subpath deployment.
export function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = path.replace(/^\/+/, "");
  return `${base}${cleanPath}`;
}
