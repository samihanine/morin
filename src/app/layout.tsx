import "@/styles/tailwind.css";
import { Inter, Baloo_2 } from "next/font/google";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export async function generateMetadata({}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  return {
    title: "La Charpenterie Morin",
    description:
      "Theophile Morin charpentier sur Pau et alentours, basé a bizanos",
    keywords: "charpentier, bois, construction, rénovation, Pau, Bizanos",
  };
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"fr"}>
      <body
        className={`min-h-screen font-inter ${inter.variable} ${baloo.variable}`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="" />
    </html>
  );
}
