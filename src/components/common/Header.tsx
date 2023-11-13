import React from 'react';
import Image from 'next/image';
import TopBg from '$/images/background/top.png';
import MainLogo from '@/components/common/MainLogo';

export default function Header() {
    return (
        <header className="flex w-full relative min-h-max">
            <Image
                src={TopBg}
                alt="헤더"
                style={{
                    width: '100%',
                    height: 'auto',
                    position: 'absolute',
                    top: 0,
                    zIndex: 1,
                }}
            />
            <MainLogo
                style={{
                    width: '30%',
                    height: 'fit-content',
                    zIndex: 2,
                    margin: '1.5rem auto',
                }}
            />
            {/*<div className="text-white p-6 absolute right-0">*/}
            {/*    <Image*/}
            {/*        style={{ height: '21px', width: '24px' }}*/}
            {/*        src={SearchImg}*/}
            {/*        alt="검색 아이콘"*/}
            {/*    />*/}
            {/*</div>*/}
        </header>
    );
}
