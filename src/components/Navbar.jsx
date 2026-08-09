import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#top">
          BARSHA
        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="https://github.com/barsha-git" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
        <button className="nav-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
