'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { IoHomeOutline, IoBookmarkOutline, IoBriefcaseOutline } from 'react-icons/io5';

export function NavMenu() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'home', icon: <IoHomeOutline className="w-4 h-4" /> },
    { href: '/bookmarks', label: 'bookmarks', icon: <IoBookmarkOutline className="w-4 h-4" /> },
    { href: '/work', label: 'work', icon: <IoBriefcaseOutline className="w-4 h-4" /> },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname?.startsWith('/posts/');
    }
    return pathname === href;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-lg transition-colors ${isActive(item.href)
              ? 'text-emerald-600 dark:text-emerald-400 font-medium'
              : 'text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
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
              className={`transition-colors ${isActive(item.href)
                ? 'text-emerald-400'
                : 'text-gray-400 hover:text-emerald-400'
                }`}
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