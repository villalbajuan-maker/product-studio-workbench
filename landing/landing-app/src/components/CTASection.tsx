interface CTASectionProps {
  onCTA: () => void;
}

export default function CTASection({ onCTA }: CTASectionProps) {
  return (
    <section className="py-24 px-6 bg-gray-900 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">
          Bring one ambiguous opportunity.
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
          We will help you turn it into a clearer delivery decision before your team pays for the ambiguity.
        </p>
        <button
          onClick={onCTA}
          className="bg-accent-600 text-white text-sm font-semibold px-8 py-3.5 rounded hover:bg-accent-700 transition-colors"
        >
          Review a real opportunity
        </button>
      </div>
    </section>
  );
}
