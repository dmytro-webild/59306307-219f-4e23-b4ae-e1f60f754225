import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Gone in a Haul | Junk Removal Moreno Valley & Inland Empire",
  description: "Fast, reliable junk removal in Moreno Valley, Riverside, San Bernardino & the Inland Empire. Same-day service, licensed & insured, eco-friendly.",
  keywords: "junk removal Moreno Valley, junk removal Riverside CA, junk removal San Bernardino, Inland Empire junk removal, same day junk removal",
  metadataBase: new URL("https://goneinahaul.com"),
  alternates: {
    canonical: "https://goneinahaul.com",
  },
  openGraph: {
    title: "Gone in a Haul | Professional Junk Removal",
    description: "Same-day junk removal across the Inland Empire. Licensed, insured, and eco-friendly.",
    url: "https://goneinahaul.com",
    siteName: "Gone in a Haul",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/utility-vehicle-quiet-street-work-progress_169016-69895.jpg",
        alt: "Gone in a Haul junk removal service truck",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gone in a Haul | Junk Removal Inland Empire",
    description: "Fast. Reliable. Local. Same-day junk removal service.",
    images: ["http://img.b2bpic.net/free-photo/utility-vehicle-quiet-street-work-progress_169016-69895.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${lato.variable} antialiased`}
        >
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}