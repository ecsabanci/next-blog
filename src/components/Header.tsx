'use client';

import Link from 'next/link';
import { NavMenu } from './NavMenu';
import { Container } from './Container';

const Header = () => {
  return (
    <header className="py-8">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
          <Link href="/" className="text-4xl font-bold logo flex flex-col">
            <span>Melisa Çevik</span>
            <span className='text-sm'>Jr. Data Scientist</span>
          </Link>
          <NavMenu />
        </div>
      </Container>
    </header>
  );
};

export { Header }; 