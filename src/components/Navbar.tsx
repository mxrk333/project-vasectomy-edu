import { useState, useEffect } from 'react';
import logoIcon from '../assets/icon.svg';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const { language, setLanguage, theme, toggleTheme, t: allT } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = allT.navbar;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
    );
    const ids = ['home', 'whatis', 'myths', 'benefits', 'faq', 'research', 'contact'];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) => {
    const id = href.replace('#', '');
    return `text-sm font-semibold transition-colors ${
      activeSection === id
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
    }`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg shadow-sm py-3'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={logoIcon} alt="Logo" className="h-16 w-16 dark:invert" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {t.links.map((link, i) => (
            <a key={i} href={link.href} className={linkClass(link.href)}>
              {link.name}
              {activeSection === link.href.replace('#', '') && (
                <span className="block h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-0.5 transition-all"></span>
              )}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>

          <button
            onClick={() => setLanguage(language === 'EN' ? 'TL' : 'EN')}
            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-all"
          >
            {language === 'EN' ? 'TL' : 'EN'}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 px-6 py-4 space-y-3">
          {t.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 ${linkClass(link.href)}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
