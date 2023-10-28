import MouseImage from '$/images/mouse.png';
import React from 'react';
import Image from 'next/image';

type Props = {
    index: number;
};

// todo: 화면 아이콘 받아서 넣기
export default function Item({ index }: Props) {
    return (
        <div className="flex items-center bg-primary-2 rounded-2xl w-5/6">
            <div className="font-black text-3xl pl-4 w-1/6"> {index} </div>
            <div className="flex-1/2">
                <Image
                    src={MouseImage}
                    alt="아이템 이미지"
                    style={{ width: '50px' }}
                />
            </div>
            <div className="flex-1/3 p-2 ">
                <div>로지텍 마우스 G102</div>
                <div>$10000</div>
            </div>
            <div className="flex flex-col">
                <span>15분전</span>
                <span>도보 10분</span>
            </div>
        </div>
    );
}
