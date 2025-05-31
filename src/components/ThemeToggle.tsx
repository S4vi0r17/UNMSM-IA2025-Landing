'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleToggle = () => {
    setAnimating(true);
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      setAnimating(false);
    }, 300); // Duración de la animación
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-white shadow-lg shadow-blue-900 dark:shadow-yellow-300 dark:bg-[#121212] p-3 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#1b1b1b] active:scale-90 focus:outline-none cursor-pointer"
      onClick={handleToggle}
    >
      <span
        className={`
          block transition-all duration-300
          ${
            animating
              ? theme === 'dark'
                ? 'opacity-0 -rotate-90'
                : 'opacity-0 rotate-90'
              : 'opacity-100 rotate-0'
          }
        `}
      >
        {theme === 'dark' ? (
          // Sun icon
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          // Moon icon
          <svg
            className="w-6 h-6 text-blue-900 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        )}
      </span>
    </button>
  );
}
