import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sinan Şamil Köylü — Yazılım Mühendisi',
  description:
    'Sinan Şamil Köylü - Yazılım Mühendisi. Gömülü sistemler, İHA mimarileri, Edge AI ve ölçeklenebilir Full-Stack web platformları geliştiren mühendis.',
  keywords: [
    'Sinan Şamil Köylü',
    'Yazılım Mühendisi',
    'Embedded Systems',
    'Gömülü Sistemler',
    'İHA',
    'Edge AI',
    'Next.js',
    'Full Stack Developer',
    'Kayseri',
    'Aksaray',
  ],
  authors: [{ name: 'Sinan Şamil Köylü' }],
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%23000%22/><text x=%2250%22 y=%2265%22 font-size=%2245%22 font-family=%22monospace%22 font-weight=%22900%22 fill=%22%23fff%22 text-anchor=%22middle%22>SŞK</text></svg>',
  },
  openGraph: {
    title: 'Sinan Şamil Köylü — Yazılım Mühendisi',
    description:
      'Gömülü sistemler, İHA mimarileri, Edge AI ve ölçeklenebilir Full-Stack web platformları geliştiren mühendis.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
