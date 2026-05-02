import { useState } from 'react';
import logoIcon from '../assets/icon.svg';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'TL' | 'EN'>('TL');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="flex justify-between items-center px-6 py-2 max-w-7xl mx-auto w-full">
        {/* Brand Logo Only - Clicking this goes Home */}
        <a href="#" className="flex items-center shrink-0 group">
          <img src={logoIcon} alt="Cutting Ties Logo" className="h-16 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
        </a>

        {/* Primary Navigation - Minimalist */}
        <div className="hidden lg:flex items-center space-x-8">
          <a className="text-slate-600 hover:text-blue-700 font-semibold text-[15px] tracking-wide transition-colors" href="#">What is Vasectomy?</a>
          <a className="text-slate-600 hover:text-blue-700 font-semibold text-[15px] tracking-wide transition-colors" href="#">Myths vs Facts</a>
          <a className="text-slate-600 hover:text-blue-700 font-semibold text-[15px] tracking-wide transition-colors" href="#">Benefits</a>
          <a className="text-slate-600 hover:text-blue-700 font-semibold text-[15px] tracking-wide transition-colors" href="#">Research</a>
        </div>

        {/* Secondary Actions - Icon Only for cleaner UX */}
        <div className="flex items-center space-x-1 shrink-0">
          {/* Desktop Search Toggle */}
          <div className="hidden md:flex items-center justify-end relative h-10 transition-all duration-300 ease-in-out" style={{ width: isSearchOpen ? '200px' : '40px' }}>
            {isSearchOpen ? (
              <div className="flex items-center w-full relative">
                <input 
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                  className="w-full bg-slate-100 border border-slate-200 rounded-full pl-4 pr-10 py-2 text-[14px] text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner" 
                  placeholder="Search..." 
                  type="text"
                />
                <span 
                  className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px] cursor-pointer hover:text-slate-600" 
                  onMouseDown={(e) => e.preventDefault()} 
                  onClick={() => setIsSearchOpen(false)}
                >
                  close
                </span>
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center justify-center w-10 h-10 rounded-full text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors" 
                aria-label="Search" 
                title="Search"
              >
                <span className="material-symbols-outlined text-[22px]">search</span>
              </button>
            )}
          </div>
          
          {/* Appearance Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors" 
            aria-label="Toggle Appearance" 
            title="Appearance"
          >
            <span className="material-symbols-outlined text-[22px]">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>

          {/* Language Toggle */}
          <div className="relative hidden md:block">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-colors relative" 
              aria-label="Change Language" 
              title="Translate"
            >
              <span className="material-symbols-outlined text-[22px]">language</span>
              {/* Subtle indicator of current language */}
              <span className="absolute -bottom-1 -right-1 bg-white text-[10px] font-bold text-blue-600 px-1 rounded-sm shadow-sm border border-slate-100">
                {language}
              </span>
            </button>
            
            {/* Language Dropdown */}
            {isLangOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Select Language
                </div>
                <button 
                  onClick={() => { setLanguage('TL'); setIsLangOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-[15px] flex items-center justify-between hover:bg-slate-50 transition-colors ${language === 'TL' ? 'text-blue-600 font-bold' : 'text-slate-600 font-medium'}`}
                >
                  Tagalog {language === 'TL' && <span className="material-symbols-outlined text-[18px]">check</span>}
                </button>
                <button 
                  onClick={() => { setLanguage('EN'); setIsLangOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-[15px] flex items-center justify-between hover:bg-slate-50 transition-colors ${language === 'EN' ? 'text-blue-600 font-bold' : 'text-slate-600 font-medium'}`}
                >
                  English {language === 'EN' && <span className="material-symbols-outlined text-[18px]">check</span>}
                </button>
              </div>
            )}
          </div>

          <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-[14px] tracking-wide transition-colors shadow-sm ml-3">
            Contact Us
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-200 shadow-sm ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-8 flex flex-col space-y-5">
          {/* Mobile Search */}
          <div className="relative mb-2">
            <input className="bg-slate-100 border border-slate-200 rounded-xl pl-4 pr-12 py-3 text-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" placeholder="Search..." type="text"/>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl">search</span>
          </div>

          <a className="text-slate-700 hover:text-blue-700 font-semibold text-lg tracking-wide pl-2 py-1 transition-colors" href="#">What is Vasectomy?</a>
          <a className="text-slate-700 hover:text-blue-700 font-semibold text-lg tracking-wide pl-2 py-1 transition-colors" href="#">Myths vs Facts</a>
          <a className="text-slate-700 hover:text-blue-700 font-semibold text-lg tracking-wide pl-2 py-1 transition-colors" href="#">Benefits</a>
          <a className="text-slate-700 hover:text-blue-700 font-semibold text-lg tracking-wide pl-2 py-1 transition-colors" href="#">Research</a>
          
          <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col space-y-4">
            <div className="flex md:hidden items-center justify-between pl-2 pr-4">
              <button 
                onClick={() => setLanguage(language === 'TL' ? 'EN' : 'TL')}
                className="flex items-center gap-3 text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">language</span>
                <span className="text-lg">{language === 'TL' ? 'Tagalog (TL)' : 'English (EN)'}</span>
              </button>
              
              <button onClick={toggleDarkMode} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors p-2 rounded-lg bg-slate-50 border border-slate-100">
                <span className="material-symbols-outlined text-2xl">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
              </button>
            </div>
            
            <button className="sm:hidden bg-blue-600 hover:bg-blue-700 text-white px-5 py-4 rounded-xl font-bold text-lg transition-colors shadow-sm w-full text-center mt-2">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
