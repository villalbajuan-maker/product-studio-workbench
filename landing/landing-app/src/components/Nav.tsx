export default function Nav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900 tracking-tight">Decision Map</span>
        <nav className="hidden sm:flex items-center gap-8">
          {[
            { label: 'Problem', id: 'problem' },
            { label: 'Map', id: 'artifact' },
            { label: 'Outcomes', id: 'outcomes' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => scrollTo('contact')}
          className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Review an opportunity
        </button>
      </div>
    </header>
  );
}
