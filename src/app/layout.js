import Navbar from "./componentss/navbar";
import "./globals.css";
// import Header from "./componentss/header";

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
      <body>
        <Navbar navLinks={navLinks} />
        {children}
      </body>
    </html>
  );
}
