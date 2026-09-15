import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fikerte Kiflu | Full-Stack Software Engineer & Developer',
  description: 'Personal portfolio of Fikerte Kiflu (Fikir). Full-stack developer specializing in Next.js, React, TypeScript, Node.js, and Go. Building apps people actually use.',
  keywords: [
    'Fikerte Kiflu',
    'Fikir',
    'Full-Stack Developer',
    'Software Engineer',
    'Next.js',
    'TypeScript',
    'React',
    'Go',
    'Golang',
    'Node.js',
    'PostgreSQL',
    'Portfolio'
  ],
  authors: [{ name: 'Fikerte Kiflu', url: 'https://github.com/fikertekiflu' }],
  creator: 'Fikerte Kiflu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/fikertekiflu',
    title: 'Fikerte Kiflu | Full-Stack Developer & Software Engineer',
    description: 'Explore production SaaS projects, microservices, and 89+ repositories by Fikerte Kiflu.',
    siteName: 'Fikerte Kiflu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fikerte Kiflu | Full-Stack Developer & Software Engineer',
    description: 'Building apps people actually use. Next.js, TypeScript, Go, Node.js.',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
