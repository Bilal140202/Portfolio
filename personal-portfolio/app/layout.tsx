import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import { ThemeProviders } from "../components/ThemeProviders"; // Import ThemeProviders

// Setup Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Added display swap for better UX
  variable: "--font-inter", // CSS variable for Inter
});

// Setup Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // Added display swap
  weight: ["400", "500", "600", "700", "800", "900"], // Common weights for headings
  variable: "--font-poppins", // CSS variable for Poppins
});

// Define metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // Add metadataBase
  title: "Adept Agent - Personal Portfolio",
  description: "Welcome to the personal portfolio of Adept Agent, showcasing projects and skills in web development and creative digital experiences.",
  keywords: ["portfolio", "full-stack developer", "web developer", "react", "nextjs", "tailwindcss", "framer-motion", "adept agent"],
  authors: [{ name: "Adept Agent" }],
  openGraph: {
    title: "Adept Agent - Personal Portfolio",
    description: "Creative digital experiences by Adept Agent.",
    url: "https://yourdomain.com", // Replace with actual domain later
    siteName: "Adept Agent Portfolio",
    images: [
      {
        url: "/og-image.svg", // Updated to SVG
        width: 1200,
        height: 630,
        alt: "Adept Agent - Personal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: { // Optional: Add Twitter specific card data
    card: "summary_large_image",
    title: "Adept Agent - Personal Portfolio",
    description: "Creative digital experiences by Adept Agent.",
    images: ["/og-image.svg"], // Updated to SVG, must be an absolute URL in production
    // creator: "@yourtwitterhandle", // Optional: Twitter username
  },
  robots: { // Optional: Define robots meta tag
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* suppressHydrationWarning is recommended by next-themes */}
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`} // Updated className
      >
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
