import "./globals.css";
// import Header from "./componentss/header";



export const metadata = {
  title: "Elbow",
  description: "for elbows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
>
        {children}
      </body>
    </html>
  );
}
