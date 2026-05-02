import { useState, useEffect } from 'react';

// Extend window interface for the beforeinstallprompt event
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function PwaPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {

    // Capture the beforeinstallprompt event for Android/Chrome
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  useEffect(() => {
    if (showPrompt) {
      const timer = setTimeout(() => {
        setShowPrompt(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showPrompt]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleClose = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-[100] animate-slide-up">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-5 max-w-md mx-auto relative flex items-center gap-4">
        
        <button 
          onClick={handleClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full flex items-center justify-center hover:bg-slate-200 hover:text-slate-900 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>

        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">add_to_home_screen</span>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-slate-900 dark:text-white mb-1">Do you want to install?</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-tight mb-3">
            Install the Vasectomy Edu app on your device for quick, offline access.
          </p>

          <button 
            onClick={handleInstallClick}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition-colors"
          >
            Install App
          </button>
        </div>

      </div>
    </div>
  );
}
