import type { Metadata } from "next";
import "./globals.css";
import "./refinements.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
