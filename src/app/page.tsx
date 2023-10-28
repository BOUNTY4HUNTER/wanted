import React from 'react';
import Item from '@/components/item';
import MouseImg from '$/images/mouse.png';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="bg-primary-1">
            <main className="relative mx-auto flex flex-col gap-y-6 py-2">
                <section className="flex gap-x-2 justify-around">
                    <div className="flex bg-primary-3 flex-1 text-font-title py-2 justify-center ">
                        습득 목록으로 가기
                    </div>
                    <div className="flex bg-primary-3 flex-1 py-2 text-font-title justify-center">
                        수배 목록으로 가기
                    </div>
                </section>
                <section className="">
                    <span className="flex pb-4 pr-2 text-2xl font-black text-primary-500 px-2">
                        최근 수배된 목록
                    </span>
                    <div className="flex bg-primary-4 overflow-x-scroll p-6">
                        {Array(10)
                            .fill(0)
                            .map((_, idx) => {
                                return (
                                    <Image
                                        className="m-2"
                                        src={MouseImg}
                                        style={{
                                            height: '200px',
                                            width: '200px',
                                        }}
                                    />
                                );
                            })}
                    </div>
                </section>
                <section>
                    <div className="flex justify-between">
                        <span className="flex pb-4 pr-2 text-2xl font-black text-primary-500 px-2">
                            전체 보기
                        </span>
                        <div>
                            <span>최신순</span>
                            {' / '}
                            <span>거리순</span>
                            {' / '}
                            <span>현상금순</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-primary-4 py-2 gap-y-2">
                        {Array(10)
                            .fill(0)
                            .map((_, idx) => {
                                return <Item index={idx + 1} />;
                            })}
                    </div>
                </section>
            </main>
        </div>
    );
}
