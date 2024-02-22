import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import NextAuthSessionProvider from '@/providers/sessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'DinDin Project',
    description: 'Generated by create next app'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="use-credentials"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Rubik:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={inter.className}>
                <NextAuthSessionProvider>
                    {children}
                </NextAuthSessionProvider>
                <Toaster richColors duration={3000} />
            </body>
        </html>
    );
}
