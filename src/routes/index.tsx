import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceTerms } from "@/lib/service-terms";
import { TermsModal } from "@/components/terms-modal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import logo from "@/assets/logo.webp";
import reporting from "@/assets/reporting.webp";
import hygiene from "@/assets/hygiene.webp";
import dataReporting from "@/assets/data-reporting.webp";
import before from "@/assets/before.webp";
import after from "@/assets/after.webp";
import dashboard from "@/assets/dashboard.webp";
import trial from "@/assets/trial.webp";

const emailUrl = "mailto:support@andrewsdataservices.online?subject=Inquiry%20About%20Your%20Data%20Services&body=Hi%20Andrew%2C%0A%0AI%27m%20interested%20in%20your%20offer%20and%20would%20appreciate%20some%20more%20details%20about%20how%20it%20works%20and%20how%20we%20can%20get%20started.%0A%0AClient%20Name%3A%20%5BYour%20Name%5D%0AAgency%20Name%3A%20%5BAgency%20Name%5D%0A%0AKind%20regards%2C%0A%5BYour%20Name%5D";

const faqs = [
  ["1. Do I have to pay anything to try the service?", "No. You can try and evaluate our service with zero upfront cost for two weeks. Just provide a quick email to get started."],
  ["2. How is my data stored and protected?", "We give each client a personal, password-protected Proton Drive folder (connection details sent via email) to safely store your CSV files. Based on this, we build your spreadsheet and dashboard. Your data is automatically deleted every two weeks. Alternatively, at your request, we can use Google Drive, Google Sheets, or extend storage time based on your company's preferences."],
  ["3. Is this service right for me?", "You can try it risk-free by emailing us. We personalize our service to each client based on their specific needs. If you have questions, don't hesitate to email us using the button at the bottom of the website."],
  ["4. Do you accept credit cards?", "Yes. We collaborate with RULL.io to securely process card payments and invoices for Andrew's Data Services."],
  ["5. What platforms do you use, and how do I upload the data?", "No API access is needed. Simply download the CSV files from your platforms, upload them to a secure Proton Drive (or your preferred option), and we do the magic. We support Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, Amazon Ads, Bing/Microsoft Ads, Pinterest Ads, X (Twitter), and Shopify store data."],
  ["6. Do you work with marketing/agency data only?", "We specialize in marketing and agency data, but we can also help organize and clean data for other niches such as logistics, real estate, and finance. For more details, please email us."],
] as const;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "Andrew’s Data Services — Turning Data Into Actionable Growth" },
    { name: "description", content: "Weekend reporting delivery, consistent data, and less manual work for your agency. Explore Andrew’s Data Services and try agency reporting free for two weeks." },
    { property: "og:title", content: "Andrew’s Data Services — Turning Data Into Actionable Growth" },
    { property: "og:description", content: "Marketing data cleaning, standardized spreadsheets, and interactive Looker Studio dashboards. Ready before Monday morning." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function Band({ children, id }: { children: string; id?: string }) {
  return <section className="section-band" id={id}><div className="page-width"><h2>{children}</h2></div></section>;
}

function Faq({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(true);
  return <div className="faq-item">
    <Button variant="ghost" className="faq-trigger" aria-expanded={open} aria-controls={`faq-${index}`} onClick={() => setOpen(!open)}>
      <span>{question}</span><ChevronDown className={`faq-chevron shrink-0 ${open ? "open" : ""}`} />
    </Button>
    <div id={`faq-${index}`} className="faq-answer" hidden={!open}>{answer}</div>
  </div>;
}

function Index() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  return <>
    <header className="site-header">
      <div className="page-width header-inner">
        <a className="brand" href="#home"><img src={logo} alt="" width="35" height="32" /><span>Andrew’s Data Services</span></a>
        <nav aria-label="Main navigation" className="desktop-nav">
          <Button asChild variant="premium"><a href="#home">Home</a></Button>
          <Button variant="navigation" onClick={() => setTermsOpen(true)}>Terms &amp; Conditions<ArrowUpRight /></Button>
          <Button asChild variant="outline" size="icon" aria-label="Contact Me / Get Started"><a href={emailUrl}><Mail /></a></Button>
        </nav>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><Button asChild variant="premium"><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></Button><Button variant="navigation" onClick={() => { setMenuOpen(false); setTermsOpen(true); }}>Terms &amp; Conditions<ArrowUpRight /></Button></nav>}
    </header>
    <main id="home">
      <section className="page-width intro reveal">
        <h1>TURNING DATA INTO ACTIONABLE GROWTH</h1>
        <h2 className="editorial-heading">WHAT IF YOUR CLIENTS’ WEEKLY MARKETING REPORTS WERE READY BEFORE MONDAY MORNING?</h2>
        <p className="body-copy">We handle the cleaning, standardization, and consolidation of your clients' marketing data into organized spreadsheets and interactive Looker Studio dashboards. We work with advertising exports from platforms including Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, Pinterest Ads, and GA4, helping your agency start each week with reporting prepared and ready to review.</p>
        <div className="photo-frame"><img className="intro-photo" src={reporting} alt="Marketing charts, a laptop, and handwritten reporting notes" width="1024" height="575" fetchPriority="high" /></div>
      </section>
      <div className="section-tone">
      <Band>WHAT YOUR AGENCY GETS</Band>
      <section className="page-width section-content">
        <h2 className="editorial-heading">WEEKEND REPORTING DELIVERY, CONSISTENT DATA, AND LESS MANUAL WORK FOR YOUR AGENCY.</h2>
        <p className="body-copy">Instead of spending valuable hours combining fragmented exports, your team can hand off the reporting preparation. We standardize inconsistent formats, consolidate campaign data, and organize performance metrics into a unified reporting workflow. The service is designed around agency operations, with reporting prepared over the weekend for Monday-morning delivery, without adding another software system for your team to manage.</p>
      </section>
      </div>
      <Band>SERVICES OFFERED</Band>
      <section className="page-width services-grid">
        <div className="service photo-frame"><img src={hygiene} alt="Clipboard and pencil" width="1024" height="1024" loading="lazy" /><h3>Data Hygiene &amp; Consolidation</h3><p>Clean, standardize, and combine fragmented marketing data.</p></div>
        <div className="service photo-frame"><img src={dataReporting} alt="Performance chart and magnifying glass" width="1024" height="1024" loading="lazy" /><h3>Data Reporting</h3><p>Interactive dashboards and concise weekly performance summaries.</p></div>
      </section>
      <Band>SEE HOW FRAGMENTED ADVERTISING EXPORTS BECOME ORGANIZED, CLIENT-READY REPORTING DASHBOARDS.</Band>
      <section className="page-width section-content">
        <p className="body-copy">Explore a sample reporting dashboard to see how campaign data can be brought together into a clear, interactive view. Our workflow combines standardized spreadsheets with Looker Studio dashboards to make information easier to navigate across client accounts. The examples below demonstrate the reporting format and presentation you can expect. All demonstrations use sample or appropriately anonymized data. <strong><em>Explore the sample dashboard and spreadsheet below to see how fragmented advertising data becomes clear, interactive reporting.</em></strong></p>
        <div className="sample-buttons">
          <Button asChild variant="premium"><a href="https://datastudio.google.com/u/0/reporting/f6e7c413-b10f-49f7-8167-754353ac3264/page/kdABG" target="_blank" rel="noopener noreferrer">Press For The Dashboard<ArrowUpRight /></a></Button>
          <Button asChild variant="premium"><a href="https://docs.google.com/spreadsheets/d/1NjBhRKNolKfNb-kklQTWOUACmPL1wl4yQ42vkNAIjHw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Press For Spreadsheet<ArrowUpRight /></a></Button>
        </div>
      </section>
      <section className="page-width">
        <figure className="report-figure centered photo-frame"><img src={before} alt="Seven separate advertising CSV exports before consolidation" width="1280" height="1070" loading="lazy" /><figcaption><h3>BEFORE</h3><p>Seven separate platform CSV files (Google, Facebook, Instagram, TikTok, LinkedIn, Twitter, Bing) containing fragmented, unstandardized marketing data stored individually.</p></figcaption></figure>
        <figure className="report-figure centered photo-frame"><img src={after} alt="Consolidated standardized spreadsheet with unified marketing metrics" width="1280" height="1075" loading="lazy" /><figcaption><h3>AFTER</h3><p>One consolidated standardised XLSX file merging all platform data, featuring unified marketing metrics (Spend, Impressions, Clicks, Conversions, Revenue, ROAS, etc.) for comprehensive analysis.</p></figcaption></figure>
        <figure className="report-figure photo-frame"><img src={dashboard} alt="Original sample marketing performance dashboard showing platform spend, revenue, and campaign performance" width="1280" height="895" loading="lazy" /><figcaption><h3>MARKETING PERFORMANCE DASHBOARD</h3><p>This interactive Looker Studio dashboard provides a comprehensive overview of cross-platform advertising performance, built from the consolidated standardized XLSX file.</p></figcaption></figure>
      </section>
      <div className="section-tone">
      <Band>WHY AGENCIES CHOOSE US?</Band>
      <section className="page-width section-content">
        <p className="body-copy">We handle the reporting workload while your team focuses on clients and campaign decisions. Upload up to {serviceTerms.weeklyExports} data exports across five clients on Friday, and we clean, standardize, and consolidate your data into a master spreadsheet and interactive Looker Studio dashboards over the weekend. By Monday morning, receive your dashboards, downloadable spreadsheet, and a concise performance summary by email. Your data stays private and is deleted according to our retention policy.</p>
        <h2 className="faq-heading">FAQS</h2>
        <div>{faqs.map(([question, answer], index) => <Faq key={question} question={question} answer={answer} index={index} />)}</div>
      </section>
      </div>
      <Band>OUR CLIENTS REVIEWS</Band>
      <section className="page-width section-content reviews-grid">
        <blockquote className="review">"I was amazed at how Andrew transformed our messy, unstandardized client platform exports into clean, unified, and actionable marketing data. The automation workflow is fast, professional, and seamless, saving our agency dozens of hours every weekend. Highly recommend Andrew's Data Services for any agency looking to turn chaotic marketing metrics into clear, client-ready insights."</blockquote>
        <blockquote className="review">"Working with Andrew is genuinely different. You get more than task completion—you get a data partner who truly understands how cross-platform metrics impact the bigger picture. The weekend report delivery and proactive data hygiene have been absolute game-changers for our account managers. It's the absolute consistency and quality that make this partnership so valuable."</blockquote>
      </section>
      <Band>TRY OUR AGENCY REPORTING SERVICE FREE FOR TWO WEEKS, WITH NO RISK.</Band>
      <section className="trial-section">
        <div className="page-width section-content">
          <h2 className="editorial-heading">NOT SURE IF OUR REPORTING SERVICE IS RIGHT FOR YOUR AGENCY?</h2>
          <p className="body-copy">We're offering qualifying digital marketing agencies a limited two weeks free trial covering up to five client reporting accounts and {serviceTerms.weeklyExports} source spreadsheets or data exports per week. No credit card is required, and the trial does not automatically become a paid subscription. If the service fits your workflow, you can continue at our introductory rate of ${serviceTerms.monthlyPriceUSD} per month.</p>
          <Button asChild variant="premium" className="trial-button"><a href={emailUrl}><Mail />Press To Email Me Directly<ArrowUpRight /></a></Button>
          <div className="photo-frame"><img className="trial-photo" src={trial} alt="Blue marketing reports and performance charts in an office" width="1024" height="768" loading="lazy" /></div>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="page-width">
      <div className="footer-top scroll-reveal">
        <div className="footer-identity"><a className="footer-brand" href="#home">Andrew’s Data Services<ArrowUpRight aria-hidden="true" /></a><span className="footer-location">Europe Based (GMT+3)</span></div>
        <div className="footer-contact"><span>Support:</span><a href="mailto:support@andrewsdataservices.online">support@andrewsdataservices.online</a></div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Button asChild variant="ghost" className="footer-link"><a href="https://www.linkedin.com/in/andrew-ryton-93971b3a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">LinkedIn Profile<ArrowUpRight /></a></Button>
          <Button variant="ghost" className="footer-link" onClick={() => setTermsOpen(true)}>Terms &amp; Conditions<ArrowUpRight /></Button>
        </nav>
      </div>
      <div className="footer-notices">
      <p className="footer-copy">Confidential data handling in accordance with our privacy commitments and NDA. Limited promotional places available.</p>
      <p className="footer-copy footer-legal">All services, evaluations, and data transfers are strictly governed by our standard Terms &amp; Conditions and Data Processing Schedule. By interacting with this platform or transmitting data files, the Client explicitly acknowledges and accepts our professional operational limits and liability caps.</p>
      </div>
      <div className="footer-bottom">© 2026 Andrew’s Data Services. All rights reserved.</div>
    </div></footer>
    <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
  </>;
}
