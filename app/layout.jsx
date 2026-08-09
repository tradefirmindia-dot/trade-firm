import "./globals.css";
import MobileActionBar from "../components/MobileActionBar";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  metadataBase: new URL("https://www.tradefirm.in"),

  title: {
  default: "Trade Firm | India's Premium Stock Market Research Platform",
  template: "%s | Trade Firm",
},

  description:
    "Trade Firm provides professional Indian stock-market research across major NSE and BSE indices, options, futures, F&O, equities, intraday, swing and IPO opportunities.",
icons: {
  icon: "/tf-brand-mark.svg",
  shortcut: "/tf-brand-mark.svg",
  apple: "/tf-brand-mark.svg",
},
  keywords: [
    "Trade Firm",
    "stock market research India",
    "NIFTY research",
    "BANK NIFTY analysis",
    "FINNIFTY research",
    "SENSEX research",
    "MIDCPNIFTY research",
    "Indian stock options research",
    "futures and options research India",
    "IPO research India",
    "price action analysis",
    "options strategy research",
    "intraday market research",
    "stock market advisory India",
  ],

  alternates: {
    canonical: "https://www.tradefirm.in",
  },

  openGraph: {
    title: "Trade Firm | Premium Stock Market Research India",
    description:
      "Professional research across Indian indices, options, futures, F&O, equities and IPOs with structured levels and disciplined risk management.",
    url: "https://www.tradefirm.in",
    siteName: "Trade Firm",
    locale: "en_IN",
    type: "website",
    images: [
  {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Trade Firm - India's Premium Stock Market Research Platform",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "Trade Firm | Premium Stock Market Research India",
    description:
      "Professional Indian stock-market research across indices, derivatives, equities and IPOs with a defined-risk process.",
      images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Trade Firm",
  url: "https://www.tradefirm.in",
  logo: "https://www.tradefirm.in/icon.png",
  image: "https://www.tradefirm.in/og-image.jpg",
  description:
    "Professional Indian stock-market research across indices, options, futures, F&O, equities and IPOs with disciplined risk management.",
  email: "tradefirmindia@gmail.com",

  sameAs: [
    "https://instagram.com/tradefirmindia",
    "https://t.me/TRADE_FIRM"
  ],

  areaServed: "IN",

  address: {
    "@type": "PostalAddress",
    addressCountry: "IN"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <div className="page-ambient" aria-hidden="true"><i /><i /><i /></div>
        <SiteHeader />
        {children}
        <MobileActionBar />
        <SiteFooter />
      </body>
    </html>
  );
}
