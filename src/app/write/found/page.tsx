'use client';

import React, { useState } from 'react';
import TypeButton from '@/components/write/TypeButton';
import fetchFoundPost from '@/lib/helper/fetchFoundPost';
import { useRouter } from 'next/navigation';

export default function Write() {
    const [type, setType] = useState<'수배' | '습득'>('수배');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const TitleRef = React.useRef<HTMLTextAreaElement>(null);
    const hourRef = React.useRef<HTMLInputElement>(null);
    const minuteRef = React.useRef<HTMLInputElement>(null);
    const checkboxRef = React.useRef<HTMLInputElement>(null);
    const rewardRef = React.useRef<HTMLInputElement>(null);
    const ImageRef = React.useRef<HTMLInputElement>(null);
    const router = useRouter();

    const onClick = async () => {
        const title = inputRef.current?.value;
        const content = TitleRef.current?.value;
        const hour = hourRef.current?.value;
        const minute = minuteRef.current?.value;
        const checkbox = checkboxRef.current?.checked;
        const reward = rewardRef.current?.value;
        const image = ImageRef.current?.files?.[0];

        if (
            !title ||
            !content ||
            !reward ||
            (!checkbox && (!hour || !minute)) ||
            !image
        ) {
            alert('빈칸을 모두 채워주세요');
            return;
        }
        const time = checkbox ? '모르겠음' : `${hour}시 ${minute}분`;

        const response = await fetchFoundPost({
            title,
            content,
            time,
            reward,
            image,
        });

        if (!(response.result === 'success')) {
            return alert('게시에 실패하였습니다.');
        }

        alert('게시에 성공하였습니다.');
        router.push('/');
        return;
    };

    return (
        <section className="flex flex-col pt-6 flex-1 bg-primary-3">
            <div className="bg-primary-3 py-8 gap-y-6 z-20 flex flex-col flex-1 px-6">
                <TypeButton type={type} setType={setType} />
                <div className="gap-y-2 ">
                    <h2 className="font-semibold">제목</h2>
                    <input
                        ref={inputRef}
                        type="text"
                        className="w-full h-10 border border-primary-5 rounded-xl p-2 bg-primary-2"
                        placeholder="제목을 입력하세요"
                    />
                </div>
                <div className="gap-y-2 ">
                    <h2 className="font-semibold">내용</h2>
                    <textarea
                        ref={TitleRef}
                        className="w-full h-40 border border-primary-5 rounded-xl p-2 bg-primary-2"
                        placeholder="내용을 입력하세요"
                    />
                </div>
                <div className="gap-y-2 ">
                    <h2 className="font-semibold">분실 시간</h2>
                    <div className="flex flex-wrap gap-x-4">
                        <input
                            ref={hourRef}
                            max={24}
                            min={0}
                            type="number"
                            className="w-2/5 h-10 border border-primary-5 rounded-xl p-2 bg-primary-2"
                            placeholder="시 --"
                        />
                        <input
                            ref={minuteRef}
                            max={60}
                            min={0}
                            type="number"
                            className="w-2/5 h-10 border border-primary-5 rounded-xl p-2 bg-primary-2"
                            placeholder="분 --"
                        />
                        <div className="flex my-2 gap-x-2 w-full ">
                            <input
                                ref={checkboxRef}
                                type="checkbox"
                                className="w-6 h-6"
                            />
                            <span>분실 시간 모르겠음</span>
                        </div>
                    </div>
                </div>
                <div className="gap-y-2 ">
                    <h2 className="font-semibold">현상금 입력</h2>
                    <input
                        ref={rewardRef}
                        type="number"
                        className="w-full h-10 border border-primary-5 rounded-xl p-2 bg-primary-2"
                        placeholder="숫자로만 입력하세요"
                    />
                </div>
                <div className="gap-y-2 ">
                    <h2 className="font-semibold">사진 첨부</h2>
                    <button
                        onClick={() => {
                            ImageRef.current?.click();
                        }}
                        className="flex flex-col leading-none justify-center border-primary-5 border-4 rounded-lg w-16 h-16 items-center"
                    >
                        <div className="text-5xl leading-[0.8]">+</div>
                        <span className="text-sm leading-none">추가하기</span>
                    </button>
                    <input
                        ref={ImageRef}
                        type="file"
                        className="hidden"
                        placeholder="제목을 입력하세요"
                    />
                </div>
            </div>
            <button
                onClick={onClick}
                className="bg-primary-5 my-6 text-white w-2/3 mx-auto h-12 rounded-lg"
            >
                게시하기
            </button>
        </section>
    );
}
