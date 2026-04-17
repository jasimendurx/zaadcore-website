import { ArrowRight } from "lucide-react";

const faqItems = [
  {
    q: "Is ZaadWorks UAE WPS compliant?",
    a: "Yes. ZaadWorks handles SIF file generation and WPS submission automatically for every pay run.",
  },
  {
    q: "Does ZaadWorks support Arabic?",
    a: "Yes. The full platform — including payslips, reports, and the employee portal — is available in Arabic and English.",
  },
  {
    q: "Can it handle multiple entities?",
    a: "Yes. You can manage multiple companies or entities from a single ZaadWorks account.",
  },
  {
    q: "How do I get a demo?",
    a: "Contact us at hello@zaadcore.com or use the form on the contact page. We will schedule a demo within 24 hours.",
  },
];

export default function ZaadWorksCTA() {
  return (
    <>
      {/* FAQ */}
      <section
        id="faq"
        className="py-20 border-b border-white/5"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="section-label mb-3">FAQ</p>
              <h2
                id="faq-heading"
                className="text-3xl font-bold text-white"
              >
                Common questions about ZaadWorks.
              </h2>
            </div>

            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.q} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-sm font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20"
        aria-labelledby="zaadworks-cta"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-xl">
            <p className="section-label mb-4">Get started</p>
            <h2
              id="zaadworks-cta"
              className="text-3xl sm:text-4xl font-bold text-white mb-5"
            >
              Ready to see ZaadWorks in action?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Request a demo and we will walk you through the platform with your
              specific use case in mind. We respond within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="btn-primary">
                Request a demo <ArrowRight size={14} />
              </a>
              <a href="mailto:hello@zaadcore.com" className="btn-ghost">
                hello@zaadcore.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
