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
      <body
        className={`antialiased ${inter.variable} ${lora.variable} ${playfair.variable} ${libreFranklin.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
