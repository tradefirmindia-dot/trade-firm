import Script from "next/script";

export default function Analytics() {
  const measurementId = (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "").trim();

  if (!/^G-[A-Z0-9]+$/i.test(measurementId)) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="trade-firm-ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            anonymize_ip: true,
            send_page_view: true
          });

          document.addEventListener('click', function (event) {
            var link = event.target.closest && event.target.closest('a');
            if (!link) return;

            var href = link.getAttribute('href') || '';
            var eventName = link.dataset.analyticsEvent || '';
            if (!eventName && href.indexOf('t.me/') !== -1) eventName = 'telegram_click';
            if (!eventName && href.indexOf('tel:') === 0) eventName = 'phone_click';
            if (!eventName && href.indexOf('mailto:') === 0) eventName = 'email_click';
            if (!eventName && href.indexOf('#lead') !== -1) eventName = 'lead_cta_click';
            if (!eventName) return;

            window.gtag('event', eventName, {
              link_url: link.href,
              link_text: (link.innerText || '').trim().slice(0, 100),
              transport_type: 'beacon'
            });
          }, true);
        `}
      </Script>
    </>
  );
}
