import React from 'react';
import MainLogo from '@/components/common/MainLogo';
import Image from 'next/image';
import SearchImg from '$/images/buttons/search.png';

export default function Header() {
    return (
        <header className="flex w-full mx-auto bg-primary-5 justify-center items-center h-[5rem]">
            <MainLogo
                style={{
                    width: '8rem',
                    height: '3rem',
                }}
            />
            <div className="text-white p-6 absolute right-0">
                <Image
                    style={{ height: '21px', width: '24px' }}
                    src={SearchImg}
                    alt="검색 아이콘"
                />
            </div>
        </header>
    );
}
