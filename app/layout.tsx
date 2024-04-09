import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_sections/Navbar/Navbar';
import { BebasNeue } from './fonts';
import { Toaster } from 'react-hot-toast';
import SchrollUp from '@/components/shared/ScrollUp';
import Footer from './_sections/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pascal is coding - Portfolio',
  description:
    'Explore my world of coding and find inspiration for your personal project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${BebasNeue.variable}`}>
        <Navbar />
        <SchrollUp />
        {children}
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
