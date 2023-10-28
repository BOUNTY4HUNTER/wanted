import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex justify-center items-center">
            <Link href={'/'}>
                <div className="flex justify-center items-center h-16 w-full bg-gray-100">
                    <div className="flex justify-center items-center h-10 w-10 bg-gray-300 rounded-full">
                        <img src="/images/logo.png" alt="홈" />
                    </div>
                </div>
            </Link>
            <Link href={'/rank'}>
                <div className="flex justify-center items-center h-16 w-full bg-gray-100">
                    <div className="flex justify-center items-center h-10 w-10 bg-gray-300 rounded-full">
                        <img src="/images/logo.png" alt="랭킹" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
