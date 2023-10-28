import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import localFont from 'next/font/local';

export const metadata: Metadata = {
    title: 'Wnated',
    description: 'Wanted',
};

const pretendard = localFont({
    src: '../../public/fonts/PretendardVariable.woff2',
    variable: '--font-pretendard',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className={pretendard.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
