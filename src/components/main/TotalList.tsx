'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import createQueryString from '@/lib/helper/createQueryString';
import { GET_LIST } from '@/lib/constants/main';
import Image from 'next/image';
import { ListType } from '@/types/main';
import useMainItemStore from '@/stores/mainItemStore';

function TotalList() {
    const getItemList = useMainItemStore((state) => state.getItemList);
    const wantedItemList = useMainItemStore((state) => state.wantedItemList);
    const searchParams = useSearchParams();
    const router = useRouter();
    const listType = (searchParams.get('list_type') ?? GET_LIST) as ListType;
    const sortItemList = useMainItemStore((state) => state.sortItemList);

    return (
        <section className="z-20">
            <div className="flex px-2 items-center gap-x-1">
                <h2 className="text-2xl font-black text-primary-500">
                    전체 보기
                </h2>
                <button
                    className="ml-auto font-semibold"
                    onClick={() => {
                        sortItemList(listType, 'recent');
                        router.push(
                            '?' +
                                createQueryString(
                                    searchParams,
                                    'sort_type',
                                    'recent',
                                ),
                        );
                    }}
                >
                    최신순
                </button>
                /
                <button
                    className="font-semibold"
                    onClick={() => {
                        sortItemList(listType, 'price');
                        router.push(
                            '?' +
                                createQueryString(
                                    searchParams,
                                    'sort_type',
                                    'price',
                                ),
                        );
                    }}
                >
                    현상금순
                </button>
            </div>
            <div className="flex flex-col items-center bg-primary-4 py-2 gap-y-2">
                {(listType === 'get_list' ? getItemList : wantedItemList).map(
                    (item, idx) => (
                        <figure
                            key={item.id}
                            className="flex items-center h-20 bg-primary-2 group hover:bg-primary-5 hover:text-white rounded-xl w-5/6"
                        >
                            <span className="font-black text-3xl px-2">
                                {idx}
                            </span>
                            <Image
                                src={item.thumbnailURL}
                                alt="아이템 이미지"
                                width={300}
                                height={300}
                                style={{
                                    height: '75%',
                                    width: 'fit-content',
                                }}
                            />
                            <div className="px-3 flex flex-col ">
                                <span className="font-semibold">
                                    {item.title}
                                </span>
                                <span className="font-black text-xl">
                                    ${item.reward.toLocaleString()}
                                </span>
                            </div>
                            <span className="self-start flex-1 text-end py-2 px-3 group-hover:text-primary-4 text-sm font-semibold justify-self-end">
                                {item.createdAt}
                            </span>
                        </figure>
                    ),
                )}
            </div>
        </section>
    );
}

export default TotalList;
