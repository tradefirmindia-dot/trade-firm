import { Building2, Mail, MapPin, Phone, Send } from "lucide-react";
import LeadForm from "../../components/LeadForm";
import PageIntro from "../../components/PageIntro";
import { siteIdentity } from "../../lib/site-identity";

export const metadata = {
  title: "Contact Our Research Desk | Thane & Navi Mumbai",
  description: "Contact Trade Firm's advisory and research desk by phone or email. Main branch in Thane and second branch in Navi Mumbai, Maharashtra.",
  alternates: { canonical: `${siteIdentity.url}/contact` },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteIdentity.url}/contact`,
    name: "Contact Trade Firm",
    mainEntity: { "@id": `${siteIdentity.url}/#organization` },
  };

  return (
    <main className="inner-page contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro
        eyebrow="OFFICIAL CONTACT CHANNELS"
        title="Speak with the"
        accent="Trade Firm desk."
        text="Use the official phone, email or enquiry form below for service-scope questions, research enquiries, website feedback or grievance support."
        primaryLabel="Call our desk"
        primaryHref={`tel:${siteIdentity.phoneHref}`}
      >
        <div className="contact-hero-card">
          <span>TRADE FIRM</span>
          <h3>Advisory &amp; Research Desk</h3>
          <a href={`tel:${siteIdentity.phoneHref}`} data-analytics-event="phone_click"><Phone size={18} /> {siteIdentity.phoneDisplay}</a>
          <a href={`mailto:${siteIdentity.email}`} data-analytics-event="email_click"><Mail size={18} /> {siteIdentity.email}</a>
          <a href={siteIdentity.socials.telegram} target="_blank" rel="noopener noreferrer" data-analytics-event="telegram_click"><Send size={18} /> Official Telegram</a>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first contact-grid">
        <div className="contact-details">
          <div className="section-head"><span>BRANCH PRESENCE</span><h2>Maharashtra market desk.</h2><p>Detailed meeting or correspondence instructions should be confirmed through the official phone or email before a visit.</p></div>
          <article><MapPin size={23} /><div><small>MAIN BRANCH</small><h3>Thane, Maharashtra</h3><p>Official Trade Firm main-branch location.</p></div></article>
          <article><Building2 size={23} /><div><small>SECOND BRANCH</small><h3>Navi Mumbai, Maharashtra</h3><p>Official Trade Firm second-branch location.</p></div></article>
          <aside><b>Security note</b><p>Never share broker passwords, trading PINs, OTPs or remote-device access through the website, phone or social channels.</p></aside>
        </div>
        <div className="contact-form-wrap" id="enquiry"><LeadForm /></div>
      </section>
    </main>
  );
}
