import { writable } from 'svelte/store';

// Check if dark mode is preferred
const prefersDark = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-color-scheme: dark)').matches
  : false;

// Initialize from localStorage or system preference
const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return prefersDark ? 'dark' : 'light';
};

export const theme = writable<'light' | 'dark'>(getInitialTheme());

// Subscribe to changes and update localStorage and document class
if (typeof window !== 'undefined') {
  theme.subscribe((value) => {
    localStorage.setItem('theme', value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}

export const toggleTheme = () => {
  theme.update(current => current === 'light' ? 'dark' : 'light');
}; 