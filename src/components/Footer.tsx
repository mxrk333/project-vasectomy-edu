export default function Footer() {
  return (
    <footer className="bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-lg py-12 border-t border-slate-200 dark:border-slate-800 flat no-shadows">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="font-bold text-blue-600 text-xl">Cutting Ties, Keeping Love</div>
          <p className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400">
            © 2024 Cutting Ties, Keeping Love. Clinical precision meets human empathy.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 md:justify-end">
          <a className="text-slate-500 hover:text-blue-600 transition-colors hover:underline decoration-blue-600 underline-offset-4 text-sm font-['Inter']" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-blue-600 transition-colors hover:underline decoration-blue-600 underline-offset-4 text-sm font-['Inter']" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-blue-600 transition-colors hover:underline decoration-blue-600 underline-offset-4 text-sm font-['Inter']" href="#">Clinical Sources</a>
          <a className="text-slate-500 hover:text-blue-600 transition-colors hover:underline decoration-blue-600 underline-offset-4 text-sm font-['Inter']" href="#">Medical Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
