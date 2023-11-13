import Link from 'next/link';
import Image from 'next/image';
import HomeIcon from '$/images/buttons/home.png';
import RankIcon from '$/images/buttons/rank.png';
import UploadIcon from '$/images/buttons/upload.png';
import MypageIcon from '$/images/buttons/mypage.png';

// todo: 화면 아이콘 받아서 넣기
export default function Footer() {
    return (
        <div className="flex justify-between z-50 w-full sticky bottom-0 items-center bg-primary-5 p-6">
            <Link href={'/'}>
                <Image src={HomeIcon} alt="홈" style={{ width: '32px' }} />
            </Link>
            <Link href={'/rank'}>
                <Image src={RankIcon} alt="랭킹" style={{ width: '32px' }} />
            </Link>
            <Link href={'/write/found'}>
                <Image
                    src={UploadIcon}
                    alt="글쓰기"
                    style={{ width: '32px' }}
                />
            </Link>

            <Link href={'/mypage'}>
                <Image
                    src={MypageIcon}
                    alt="마이 페이지"
                    style={{ width: '32px' }}
                />
            </Link>
        </div>
    );
}
