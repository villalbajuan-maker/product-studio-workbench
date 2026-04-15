interface HeroProps {
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}

export default function Hero({ onPrimaryCTA, onSecondaryCTA }: HeroProps) {
  return (
    <section className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 bg-accent-50 border border-accent-200 rounded text-xs font-medium text-accent-700 uppercase tracking-wide">
          Pre-Delivery Decision Map
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
          Turn ambiguous opportunities into defensible scopes before delivery starts.
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
          We help growing B2B service companies reduce rework, senior dependency, and margin loss when unclear opportunities move from sales into delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
          <button
            onClick={onPrimaryCTA}
            className="bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Review a real opportunity
          </button>
          <button
            onClick={onSecondaryCTA}
            className="text-sm font-medium text-gray-700 border border-gray-300 px-6 py-3 rounded hover:border-gray-500 hover:text-gray-900 transition-colors"
          >
            View sample map
          </button>
        </div>

        <p className="text-sm text-gray-400">
          For agencies, consultancies, studios, implementation firms, and B2B service teams with complex delivery.
        </p>
      </div>
    </section>
  );
}
