import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import localFont from 'next/font/local';

export const metadata: Metadata = {
    title: 'Wanted',
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
                <div className="hidden md:flex">모바일로 접속해주세요</div>
                <div className="flex flex-col md:hidden h-screen max-h-screen">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
