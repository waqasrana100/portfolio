import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('www.youtube.com/c/@edraakproduction'),

  title: 'Rana Waqas',
  authors: {
    name: 'Rana Waqas',
  },

  description:
    "I'm a software engineer passionate about building a modern web application that users love 🏗",
  openGraph: {
    title: 'Rana Waqas',  
    description:
      "I'm a software engineer passionate about building a modern web application that users love 🏗",
    url: 'www.youtube.com/c/@edraakproduction',
    siteName: 'Rana Waqas',
    images: '/og.png',
    type: 'website',
  },
  keywords: ['web coding', 'nmashchenko', 'react', 'developer', 'ts', 'nextjs', 'tailwind'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
