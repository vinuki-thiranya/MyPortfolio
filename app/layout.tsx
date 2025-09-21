import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavCursor from "@/components/NavCursor";
import FloatingStars from "@/components/FloatingStars";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Doe - Portfolio",
  description: "Software Engineer & Web Developer Portfolio",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${robotoMono.variable}`}>
      <body className="bg-white dark:bg-[#0a192f] text-[#1a202c] dark:text-white antialiased transition-colors duration-300 cursor-none">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <FloatingStars />
          <NavCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}