import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K Sree Charan - Portfolio",
  description: "Full Stack Developer at MAQ Software Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted">
            <Navbar />
            <main className="relative">
              {children}
            </main>
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
