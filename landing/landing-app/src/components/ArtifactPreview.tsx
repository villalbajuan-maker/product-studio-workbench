import { useState } from 'react';
import { Lock, ChevronRight, AlertTriangle, CheckCircle2, XCircle, HelpCircle, FileText } from 'lucide-react';

const guidedQuestions = [
  'Why should we not build yet?',
  'What must sales clarify before closing?',
  'What does delivery need to protect margin?',
  'Which assumptions could break the scope?',
  'What is the proportional next step?',
];

export default function ArtifactPreview() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <section id="artifact" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            See what the decision map looks like.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A consulting firm receives a client request to "automate client onboarding." Sales wants to move fast. Delivery is worried the scope is vague. The founder would normally step in to translate what the client actually needs.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-gray-900 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-gray-600" />
                <span className="w-3 h-3 rounded-full bg-gray-600" />
                <span className="w-3 h-3 rounded-full bg-gray-600" />
              </div>
              <div className="flex items-center gap-2 ml-2 bg-gray-800 px-3 py-1 rounded text-xs text-gray-400 font-mono">
                <Lock size={10} />
                <span>decision-map.io/map/onboarding-clarification</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-accent-500 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 inline-block" />
                Draft
              </span>
            </div>
          </div>

          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FileText size={14} className="text-gray-400" />
                <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">Pre-Delivery Decision Map</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Client Onboarding Automation</h3>
              <p className="text-sm text-gray-500 mt-0.5">Consulting firm — April 2025</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded">
                Requires clarification
              </span>
            </div>
          </div>

          <div className="p-6 border-b border-gray-100 bg-accent-50">
            <div className="flex items-start gap-3">
              <div className="w-1 h-full min-h-12 bg-accent-600 rounded-full shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-accent-700 uppercase tracking-wide mb-2">Executive Recommendation</p>
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  Do not sell a full automation build yet. Start with a short clarification and workflow design phase to define the onboarding process, readiness criteria, and sales-to-delivery handoff before committing to implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            <div className="p-6 space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Initial Request</p>
                <p className="text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded px-4 py-3 font-mono italic">
                  "We want to automate client onboarding."
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Reframed Problem</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Client onboarding depends on manual coordination, scattered information, and unclear handoffs between sales and delivery. Automating too early could speed up a broken process instead of fixing it.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Observed Signals</p>
                <ul className="space-y-2">
                  {[
                    'New clients start with missing context.',
                    'Delivery asks sales for the same information repeatedly.',
                    'Clients ask questions that should have been answered before kickoff.',
                    'Senior leaders step in to clarify expectations.',
                    'Project margins are affected by repeated alignment work.',
                  ].map((signal) => (
                    <li key={signal} className="flex items-start gap-2 text-sm text-gray-600">
                      <ChevronRight size={14} className="text-gray-400 mt-0.5 shrink-0" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Likely Cause</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  There is no shared definition of what information must move from sales to delivery, who validates client readiness, and what conditions must be true before onboarding begins.
                </p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Value at Stake</p>
                <div className="flex flex-wrap gap-2">
                  {['Senior time', 'Project margin', 'Speed to kickoff', 'Delivery capacity', 'Client experience', 'Sales-delivery trust'].map((v) => (
                    <span key={v} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  <AlertTriangle size={11} className="inline mr-1.5 text-amber-500" />
                  Risks If Misframed
                </p>
                <ul className="space-y-2">
                  {[
                    'Building automation on top of an unclear workflow.',
                    'Moving errors faster.',
                    'Creating more exceptions.',
                    'Committing delivery to a scope that does not address the real bottleneck.',
                  ].map((risk) => (
                    <li key={risk} className="flex items-start gap-2 text-sm text-gray-600">
                      <XCircle size={13} className="text-red-400 mt-0.5 shrink-0" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Defensible Scope</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-2">Included</p>
                    <ul className="space-y-1.5">
                      {[
                        'Map current onboarding flow.',
                        'Define client readiness criteria.',
                        'Design sales-to-delivery handoff.',
                        'Identify automation candidates.',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 size={13} className="text-accent-600 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-500 mb-2">Not included yet</p>
                    <ul className="space-y-1.5">
                      {[
                        'Full automation build.',
                        'CRM integration.',
                        'Complete tooling redesign.',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-500 line-through">
                          <XCircle size={13} className="text-gray-300 mt-0.5 shrink-0 no-underline" style={{ textDecoration: 'none' }} />
                          <span className="line-through">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-t border-gray-100">
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Proportional Next Step</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Run a focused workflow clarification phase before committing to build.
              </p>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Success Criteria</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Delivery can start a new client with enough context, fewer repeated questions, less senior intervention, and clearer expectations.
              </p>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Sales/Delivery Handoff</p>
              <ul className="space-y-1.5">
                {[
                  'What was requested.',
                  'What problem is actually being solved.',
                  'What is in scope.',
                  'What is out of scope.',
                  'What assumptions must be validated.',
                  'What would justify moving into implementation.',
                ].map((item) => (
                  <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5">
                    <span className="text-accent-500 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle size={13} className="text-gray-400" />
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Guided Questions</p>
              <span className="text-xs text-gray-400 ml-1 font-normal normal-case">— explore this map</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {guidedQuestions.map((q, i) => (
                <button
                  key={q}
                  onClick={() => setActiveQuestion(activeQuestion === i ? null : i)}
                  className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                    activeQuestion === i
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-800'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
            {activeQuestion !== null && (
              <div className="mt-4 bg-white border border-gray-200 rounded p-4 text-sm text-gray-500 italic">
                This feature will surface structured reasoning from the decision map. Available in the full artifact.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
