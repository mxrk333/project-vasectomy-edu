import { useRef } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Myths() {
  const { t: allT, setReferencesModalOpen } = useAppContext();
  const t = allT.myths;
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="myths" className="py-20 px-6 bg-slate-100 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto space-y-12 relative">

        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t.title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto" />
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Buttons (Hidden on very small screens, visible on hover for md+) */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 lg:-ml-12 z-10 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hidden md:flex"
            aria-label="Previous myth"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 lg:-mr-12 z-10 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hidden md:flex"
            aria-label="Next myth"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 pt-4 px-2 -mx-2 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {t.items.map((item: { myth: string; fact: string }, i: number) => (
              <div 
                key={i} 
                className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 flex flex-col h-auto"
              >
                {/* Myth Section (Top Half) */}
                <div className="p-6 bg-red-50 dark:bg-red-950/20 border-b border-red-100 dark:border-red-900/30 shrink-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-red-500 text-xl bg-red-100 dark:bg-red-900/50 rounded-full p-1">close</span>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">Myth</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    "{item.myth}"
                  </h3>
                </div>

                {/* Fact Section (Bottom Half) */}
                <div className="p-6 bg-white dark:bg-slate-900 flex-grow relative">
                  {/* Decorative connector */}
                  <div className="absolute -top-3 left-8 w-6 h-6 bg-white dark:bg-slate-900 rotate-45 border-l border-t border-red-100 dark:border-red-900/30" />
                  
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-xl bg-green-100 dark:bg-green-900/50 rounded-full p-1">check</span>
                      <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Fact</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                      {item.fact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* References Footer */}
        {t.references && t.references.length > 0 && (
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 mt-12 max-w-4xl mx-auto">
            <div className="flex justify-center mb-3">
              <button 
                onClick={() => setReferencesModalOpen(true)}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider hover:underline flex items-center gap-1 transition-colors bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full"
              >
                <span className="material-symbols-outlined text-[14px]">library_books</span>
                {allT.hero.badge === 'Cutting Ties, Keeping Love' ? 'Tingnan Lahat ng Sanggunian' : 'View All References'}
              </button>
            </div>
            <ul className="text-xs text-slate-400 dark:text-slate-500 flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
              {t.references.map((ref: { text: string; url: string }, i: number) => (
                <li key={i}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:underline transition-colors">
                    {ref.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </section>
  );
}
