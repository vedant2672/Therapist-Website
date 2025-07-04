import {
  Inter,
  Lora,
  Playfair_Display,
  Libre_Franklin,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Serena Blake - Clinical Psychologist in Los Angeles, CA",
  description:
    "Compassionate therapy for anxiety, relationships, and trauma recovery. 8+ years experience. In-person and virtual sessions available.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} ${playfair.variable} ${libreFranklin.variable}`}
    >
      <head>
        {/* Google Fonts are already being loaded via next/font/google, which is the recommended approach for Next.js */}

        {/* If you need Adobe Fonts/Typekit for freight-sans-pro */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/581004e67e0187b33dc82bc7dac41c70ea725c90 

.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
