import Navbar from "./componentss/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elbow",
  description: "for elbows",
};

const navLinks = [
  { name: "All Pipes", href: "#" },
  { name: "All Fittings", href: "#" },
  { name: "By Use", href: "#" },
  { name: "Installation", href: "#" },
  { name: "Sanitary", href: "#" },
  { name: "Contact45", href: "#" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar navLinks={navLinks} />
        {children}
      </body>
    </html>
  );
}
