const steps = [
  'Initial request',
  'Reframed problem',
  'Value at stake',
  'Delivery risks',
  'Defensible scope',
  'Proportional next step',
  'Sales/delivery handoff',
];

export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
            Before delivery starts, we turn ambiguity into a decision.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We take one real opportunity or project and create a Pre-Delivery Decision Map: a structured view of the problem, value at stake, risks, scope, next step, and handoff.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2" />
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 relative">
            {steps.map((step, i) => (
              <div key={step} className="flex md:flex-col items-center md:items-start gap-3 md:gap-2 flex-1">
                <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white border-2 border-gray-300 shrink-0 z-10 md:mx-auto">
                  <span className="text-xs font-semibold text-gray-500">{i + 1}</span>
                </div>
                <div className="md:text-center md:px-1 md:mt-3">
                  <p className="text-xs font-medium text-gray-700 leading-snug">{step}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="md:hidden w-px h-4 bg-gray-200 ml-3 -my-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
