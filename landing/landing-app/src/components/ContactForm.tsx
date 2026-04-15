import { useState } from 'react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

interface FormState {
  name: string;
  company: string;
  email: string;
  service_type: string;
  ambiguous_opportunity: string;
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  service_type: '',
  ambiguous_opportunity: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!isSupabaseConfigured || !supabase) {
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

      if (!contactEmail) {
        setStatus('error');
        setErrorMsg('The contact form is not configured yet. Add Supabase credentials or VITE_CONTACT_EMAIL.');
        return;
      }

      const subject = encodeURIComponent(`Pre-Delivery Decision Map inquiry from ${form.company}`);
      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Company: ${form.company}`,
          `Email: ${form.email}`,
          `Service type: ${form.service_type}`,
          '',
          'Ambiguous opportunity:',
          form.ambiguous_opportunity,
        ].join('\n')
      );

      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setStatus('idle');
      return;
    }

    const { error } = await supabase.from('contact_submissions').insert([form]);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or reach out directly.');
    } else {
      setStatus('success');
      setForm(initialState);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              Bring a real opportunity.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Tell us what you are working with. One opportunity, one project, one conversation where something feels off between what sales promised and what delivery will inherit.
            </p>
            <div className="space-y-4 text-sm text-gray-500">
              <div className="flex items-start gap-3">
                <span className="text-accent-600 font-semibold mt-0.5">01</span>
                <p>We review what you share and prepare questions.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-600 font-semibold mt-0.5">02</span>
                <p>We run a focused conversation to unpack the opportunity.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-600 font-semibold mt-0.5">03</span>
                <p>You leave with a clearer decision, not another proposal.</p>
              </div>
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div className="bg-accent-50 border border-accent-200 rounded-lg p-8 text-center">
                <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-700 text-xl">✓</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">We will be in touch.</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We have received your submission. Expect a response within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="email">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="service_type">
                    Type of service business
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    required
                    value={form.service_type}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors bg-white"
                  >
                    <option value="" disabled>Select one</option>
                    <option>Agency</option>
                    <option>Consultancy</option>
                    <option>Implementation firm</option>
                    <option>Studio</option>
                    <option>Professional services</option>
                    <option>Other B2B service business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="ambiguous_opportunity">
                    What opportunity or project feels ambiguous right now?
                  </label>
                  <textarea
                    id="ambiguous_opportunity"
                    name="ambiguous_opportunity"
                    required
                    value={form.ambiguous_opportunity}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the opportunity, project, or situation where something feels unclear, underspecified, or at risk..."
                    className="w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded hover:bg-gray-800 transition-colors disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Review a real opportunity'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  No pitch. No obligation. One focused conversation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
