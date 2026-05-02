export default function Mission() {
  return (
    <section className="py-24 bg-surface-container-low px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Mission Card */}
          <div className="md:col-span-8 glass-card p-12 rounded-3xl flex flex-col justify-center space-y-6 shadow-ambient border-primary/5">
            <span className="material-symbols-outlined text-primary text-4xl" data-icon="volunteer_activism">volunteer_activism</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Mission &amp; Purpose</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Our mission is to provide evidence-based education and support for couples in <span className="font-bold text-primary">Barangay San Isidro, Parañaque City</span>. We believe that informed choices lead to stronger, happier families.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold text-primary">SI</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-xs font-bold text-primary">PC</div>
              </div>
              <span className="text-sm font-label-caps text-outline uppercase">Supporting Parañaque Families</span>
            </div>
          </div>
          
          {/* Local Connection Card */}
          <div className="md:col-span-4 bg-primary text-on-primary p-12 rounded-3xl shadow-ambient relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-9xl" data-icon="location_on">location_on</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Location Focus</h3>
            <p className="font-body-md opacity-90 mb-6">Dedicated clinical services and educational workshops right here in San Isidro.</p>
            <div className="h-32 w-full rounded-xl overflow-hidden mb-4">
              <img className="w-full h-full object-cover" alt="Aerial view of a vibrant residential neighborhood in Parañaque City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBArnMfIi498JVIGCv7cZTZoLTRQiTMOZstNfZeBXCgclTbrE13mt2Ro0k-rq_5DW3_zy2wSFfRCzX9gv7IFH5k0rbgdRFz1N95E5hnHpwlgmT7NlBWerLwi98d8SfIfrAbtIaHcNmgiVE7jLSZpdz3M9NcI6iMuXUH8DURCNtcAh1g0qCl46yXuXj2KkFvyADCTTstqLQIQqPaHw4mahSyYO6V2mQnZLQ66ScnLxJ3heqKOc1hZZH0MvzOXa5oh2X-yAQ7n9br_2U"/>
            </div>
            <a className="inline-flex items-center gap-2 font-bold hover:underline" href="#">
              View Clinics <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
