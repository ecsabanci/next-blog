'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`p-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors ${className}`}
      aria-label="Tema değiştir"
    >
      {theme === 'dark' ? (
        <IoSunnyOutline className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      ) : (
        <IoMoonOutline className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      )}
    </button>
  );
} 