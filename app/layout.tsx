import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./refinements.css";

const googleAnalyticsId = "G-QY09PW4VV0";

export const metadata: Metadata = {
  title: "Ram Sai Pavan Kumar Reddi (Ram) | Senior RAN Engineer",
  description: "Senior RAN Integration and Troubleshooting Engineer with 6+ years of Ericsson LTE and 5G network experience.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
      </Script>
      <body className="antialiased">{children}</body>
    </html>
  );
}
