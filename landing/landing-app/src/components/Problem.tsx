const cards = [
  {
    title: 'Senior leaders keep translating the real problem.',
    body: 'Founders, partners, or leads become the bridge between sales, clients, and delivery.',
  },
  {
    title: 'Delivery inherits vague promises.',
    body: 'The team starts with missing context, weak scope, and assumptions that should have been resolved earlier.',
  },
  {
    title: 'Margin leaks through rework.',
    body: 'Ambiguity turns into extra meetings, scope drift, repeated clarification, and delivery rescue work.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
            The problem does not start in delivery.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            It starts earlier, when an opportunity enters the pipeline with unclear assumptions, vague scope, solution-shaped requests, or expectations nobody has fully unpacked. By the time delivery gets involved, the team is already paying for the ambiguity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="w-1.5 h-8 bg-gray-900 rounded-full mb-5" />
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
