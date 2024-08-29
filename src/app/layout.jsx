import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "card site",
  description: "showing the cards about posts ,users, recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline/>
        {children}
        </body>
    </html>
  );
}
