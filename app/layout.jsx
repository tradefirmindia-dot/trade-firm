import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.tradefirm.in"),

  title: {
  default: "Trade Firm | India's Premium Stock Market Research Platform",
  template: "%s | Trade Firm",
},

  description:
  "Trade Firm provides professional stock market research across NIFTY, BANK NIFTY, FINNIFTY and SENSEX, offering price action analysis, structured market research and disciplined risk management.",
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
    "SENSEX analysis",
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
      "Professional NIFTY, BANK NIFTY, FINNIFTY and SENSEX research with price action analysis, options strategy and disciplined risk management.",
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
      "Professional Indian stock market research, price action analysis and risk-focused trading insights.",
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
    "Professional Indian stock market research, price action analysis, options trading education and risk management.",
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
        {children}
      </body>
    </html>
  );
}