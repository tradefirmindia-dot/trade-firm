import "./globals.css";
import MobileActionBar from "../components/MobileActionBar";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  metadataBase: new URL("https://www.tradefirm.in"),

  title: {
  default: "Trade Firm | Stock Market Advisory & Research Firm India",
  template: "%s | Trade Firm",
},

  description:
    "Trade Firm is an Indian stock market advisory and research firm covering NIFTY, BANK NIFTY, options, futures, equities, intraday, swing and IPO research.",
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
    "stock market advisory firm in India",
    "stock market advisory services",
    "investment advisory firm India",
    "options trading advisory",
    "NIFTY advisory",
    "BANK NIFTY advisory",
    "stock market research analyst India",
  ],

  alternates: {
    canonical: "https://www.tradefirm.in",
  },

  openGraph: {
    title: "Trade Firm | Stock Market Advisory & Research Firm India",
    description:
      "Professional stock market advisory and research across Indian indices, options, futures, equities and IPOs with structured levels and defined-risk thinking.",
    url: "https://www.tradefirm.in",
    siteName: "Trade Firm",
    locale: "en_IN",
    type: "website",
    images: [
  {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Trade Firm - Stock Market Advisory and Research Firm India",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "Trade Firm | Stock Market Advisory & Research Firm India",
    description:
      "Professional Indian stock market advisory and research across indices, derivatives, equities and IPOs with a defined-risk process.",
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
    "Professional Indian stock market advisory and research across indices, options, futures, F&O, equities and IPOs with disciplined risk management.",
  email: "tradefirmindia@gmail.com",

  sameAs: [
    "https://instagram.com/tradefirmindia",
    "https://t.me/TRADE_FIRM"
  ],

  areaServed: "IN",

  knowsAbout: [
    "Indian stock market advisory",
    "Stock market research",
    "NIFTY and BANK NIFTY",
    "Options and futures research",
    "Equity and IPO research",
    "Trading risk management"
  ],

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
