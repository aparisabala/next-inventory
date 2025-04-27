import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Dashboard ",
  description: "This project manages retail/wholesale sells effectively",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <section className="card p-2 w-full"> Compnay Name </section>
      <section className="main  text-white">
        <div className="flex">
          <div className="w-2/12">A</div>
          <div className="w-10/12">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
