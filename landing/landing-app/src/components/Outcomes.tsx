const outcomes = [
  {
    title: 'Clearer scope',
    body: 'The team knows what is included, excluded, and still assumed.',
  },
  {
    title: 'Less senior dependency',
    body: 'The reasoning is captured so the founder or senior lead does not have to keep translating.',
  },
  {
    title: 'Better delivery handoff',
    body: 'Sales and delivery share the same problem, risks, and success criteria.',
  },
  {
    title: 'Smarter next step',
    body: 'Move forward, resize, pause, reject, or clarify before committing capacity.',
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            What changes after the map?
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            One clear artifact that sales and delivery both trust, before the team commits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {outcomes.map((outcome, i) => (
            <div
              key={outcome.title}
              className="bg-white border border-gray-200 rounded-lg p-7"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl font-extrabold text-gray-100">0{i + 1}</span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{outcome.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{outcome.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
