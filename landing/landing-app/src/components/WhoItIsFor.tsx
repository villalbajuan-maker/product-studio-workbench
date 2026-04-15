const bullets = [
  'You sell custom or semi-custom B2B services.',
  'Your sales process is consultative.',
  'Delivery depends on context, judgment, and clear scope.',
  'Senior people still rescue too many opportunities.',
  'You suspect margin is being lost before delivery even begins.',
];

export default function WhoItIsFor() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              For service companies where opportunity quality determines delivery margin.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              This is not for high-volume transactional service businesses. It is for teams where every opportunity is different, where delivery judgment matters, and where ambiguity at the front of a project quietly costs margin throughout it.
            </p>
          </div>

          <div className="space-y-3">
            {bullets.map((bullet, i) => (
              <div
                key={bullet}
                className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors"
              >
                <div className="w-6 h-6 rounded bg-gray-900 text-white flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
