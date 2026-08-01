import "./globals.css";

export const metadata = {
  title: "Trade Firm | Premium Market Research & Education",
  description: "Premium market education, structured index research and risk-first trading education."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
