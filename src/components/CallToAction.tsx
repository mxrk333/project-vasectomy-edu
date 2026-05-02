export default function CallToAction() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto glass-card rounded-[2rem] overflow-hidden shadow-ambient flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-12 space-y-8">
          <h2 className="font-headline-lg text-headline-lg">Ready to take the next step?</h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Join hundreds of families in Parañaque who have chosen a future of peace of mind and shared responsibility.
          </p>
          <button className="w-full py-4 bg-primary text-on-primary font-headline-md rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Get Started Today <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 h-full min-h-[400px]">
          <img className="w-full h-full object-cover" alt="A happy Filipino couple laughing and relaxing in a sun-drenched home garden, symbolizing peace of mind and recovery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd8OosJe8LDoFXO622YevTrvfITxTe1CqwaluyHXZQOAdZ6S4GbVop7Cmmj9uX3sU1y5S-Rg7C4f64ThfugKZ2n86wl6B_V4mrJGy_R_GBMK5Hh8chLU0NaVswVjjEL2zH5B866rKyFsUgENM3TRc2lIbnpdWeHYcS3X2x2ZfdInJCLcDycTQ4KprTFyZS-6BaTy6Ca9TNGXlgUDmGPBelw8zXaYwntHOqb0nIKZkFLK4ke0fob8HDw1XVLOr8Uwqfrrgy_wmpjV0"/>
        </div>
      </div>
    </section>
  );
}
