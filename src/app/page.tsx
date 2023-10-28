import React from 'react';

export default function Home() {
    return (
        <div className="bg-background-500">
            <main className="relative mx-auto flex w-4/5 flex-col gap-y-6 py-24">
                <span className="flex w-11/12 flex-wrap pb-4 pr-2 text-3xl font-black text-primary-500">
                    wanted 시작 페이지입니다.
                </span>

                <p className="mt-6 text-2xl leading-loose">wanted 설명</p>
            </main>
        </div>
    );
}
