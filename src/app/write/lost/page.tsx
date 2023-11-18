'use client';

import React from 'react';
import TypeButton from '@/components/write/TypeButton';
import { useRouter } from 'next/navigation';
import fetchLostPost from '@/lib/helper/fetchLostPost';

export default function Write() {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const TitleRef = React.useRef<HTMLTextAreaElement>(null);
    const rewardRef = React.useRef<HTMLInputElement>(null);
    const router = useRouter();

    const onClick = async () => {
        const title = inputRef.current?.value;
        const content = TitleRef.current?.value;
        const reward = rewardRef.current?.value;

        if (!title || !content || !reward) {
            alert('빈칸을 모두 채워주세요');
            return;
        }

        const response = await fetchLostPost({
            title,
            content,
            reward,
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
                <TypeButton />
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
                    <h2 className="font-semibold">현상금 입력</h2>
                    <input
                        ref={rewardRef}
                        type="number"
                        className="w-full h-10 border border-primary-5 rounded-xl p-2 bg-primary-2"
                        placeholder="숫자로만 입력하세요"
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
