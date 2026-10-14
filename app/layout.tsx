import type { Metadata } from "next";
import { Oswald, Montserrat } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Crust Pizza Co. | Chicago-Style Thin Crust Pizza",
  description: "Delicious made-from-scratch pizzas, handcrafted pasta, and award-winning service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-[#F7F5EE] text-[#1A1A1A] font-sans antialiased selection:bg-[#EB7424] selection:text-white">
        {children}
      </body>
    </html>
  );
}
