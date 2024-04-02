import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Habibis|Home",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={''}>
      <Navbar/>
        {children}
        
      </body>
    </html>
  );
}
