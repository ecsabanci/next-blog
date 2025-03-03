'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function NavMenu() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'home' },
    { href: '/projects', label: 'projects' },
    { href: '/bookmarks', label: 'bookmarks' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    } else if (href === '/projects') {
      return pathname === '/projects' || pathname?.startsWith('/projects/');
    } else if (href === '/bookmarks') {
      return pathname === '/bookmarks' || pathname?.startsWith('/bookmarks/');
    }
    return pathname === href;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="flex items-center gap-8 w-full md:w-auto">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-md transition-colors ${isActive(item.href)
              ? 'text-emerald-600 dark:text-emerald-400 font-medium underline'
              : 'text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
          >
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </>
  );
} 