import logoIcon from '../assets/icon.svg';
import { useAppContext } from '../context/AppContext';

export default function Footer() {
  const { t: allT } = useAppContext();
  const t = allT.footer;

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logoIcon} alt="Logo" className="h-16 w-16 invert" />
            </div>
            <p className="text-sm max-w-xs leading-relaxed">{t.tagline}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {t.links.map((link, i) => (
              <a key={i} href="#" className="text-sm hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500">{t.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
