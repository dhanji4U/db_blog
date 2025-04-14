import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tejas KP Blogs – Tech, Tutorials & Insights",
  description: "Explore the latest articles, tutorials, and insights on web development, programming, and technology by Tejas KP. Stay updated with high-quality, developer-focused content.",
  keywords: ["Tejas KP", "Tejas KP Blogs", "Web Development", "Programming", "Tech Blog", "JavaScript", "React", "Next.js", "Tutorials"],
  authors: [{ name: "Tejas KP", url: "https://tejaskp.vercel.app/" }],
  creator: "Tejas KP",
  openGraph: {
    title: "Tejas KP Blogs – Tech, Tutorials & Insights",
    description: "Dive into high-quality tech articles and tutorials on web development, React, Next.js and more by Tejas KP.",
    url: "https://tejaskp.vercel.app/",
    siteName: "Tejas KP Blogs",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 antialiased`}
      >
        <div className='relative isolate px-6 pt-14 lg:px-8'>
          <div aria-hidden='true' className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
              className='relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#de481d] to-[#ec8428] opacity-30 sm:left-[calc(50%-60rem)] sm:w-[72.1875rem]'
            />
          </div>
          <Header />
          <Toaster position="top-center" reverseOrder={false} />
          {children}
          <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-22em)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-44rem)]">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#de481d] to-[#ec8428] opacity-30 sm:left-[calc(50%+60rem)] sm:w-[72.1875rem]"
            />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
