'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { IoHomeOutline, IoPersonOutline, IoBriefcaseOutline } from 'react-icons/io5';

export function NavMenu() {
  const menuItems = [
    { href: '/', label: 'home', icon: <IoHomeOutline className="w-4 h-4" /> },
    { href: '/who', label: 'who', icon: <IoPersonOutline className="w-4 h-4" /> },
    { href: '/work', label: 'work', icon: <IoBriefcaseOutline className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-lg text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800/90 dark:bg-gray-950/90 backdrop-blur-lg z-50 rounded-t-xl">
        <div className="flex items-center justify-between max-w-4xl mx-auto px-12 py-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label={item.label}
            >
              {item.icon}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
} 