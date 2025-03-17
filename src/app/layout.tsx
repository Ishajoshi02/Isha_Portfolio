import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Isha | Data Analyst Portfolio",
  description: "Data Analyst skilled in SQL, Power BI, and Python. Transforming data into insights.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#0d1b2a] text-white min-h-screen">
        {/* ✅ Navbar Component */}
        <Navbar />

        {/* ✅ Main Content */}
        <main className="container mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
