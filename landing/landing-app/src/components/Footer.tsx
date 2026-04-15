export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-sm font-semibold text-gray-900">Decision Map</span>
        <p className="text-xs text-gray-400 max-w-sm text-center sm:text-right leading-relaxed">
          Built for B2B service companies that want better delivery decisions before delivery starts.
        </p>
      </div>
    </footer>
  );
}
