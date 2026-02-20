import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoltan Burjan | Accountant & Software Engineer",
  description:
    "Taking legacy solutions to highly optimized, cost-effective, fully automated systems.",
  openGraph: {
    title: "Zoltan Burjan | Accountant & Software Engineer",
    description:
      "Delivering efficient solutions that optimize resources, saving companies both time and money.",
    url: "https://zoltanburjan.com",
    siteName: "Zoltan Burjan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoltan Burjan | Accountant & Software Engineer",
    description:
      "Delivering efficient solutions that optimize resources, saving companies both time and money.",
    creator: "@z_burjan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
