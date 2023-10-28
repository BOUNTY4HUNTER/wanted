import Link from 'next/link';

// todo: 화면 아이콘 받아서 넣기
export default function Footer() {
    return (
        <div className="flex justify-between w-full sticky bottom-0 items-center bg-primary-5 p-6">
            <Link href={'/'}>
                <img
                    src="/images/buttons/home.png"
                    alt="홈"
                    style={{ width: '32px' }}
                />
            </Link>
            <Link href={'/rank'}>
                <img
                    src="/images/buttons/rank.png"
                    alt="랭킹"
                    style={{ width: '32px' }}
                />
            </Link>
            <Link href={'/write'}>
                <img
                    src="/images/buttons/upload.png"
                    alt="글쓰기"
                    style={{ width: '32px' }}
                />
            </Link>
            <Link href={'/message'}>
                <img
                    src="/images/buttons/message.png"
                    alt="메시지"
                    style={{ width: '32px' }}
                />
            </Link>
            <Link href={'/mypage'}>
                <img
                    src="/images/buttons/mypage.png"
                    alt="마이 페이지"
                    style={{ width: '32px' }}
                />
            </Link>
        </div>
    );
}
