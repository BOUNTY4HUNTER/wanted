'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import fetchRankItemList from '@/lib/helper/fetchRankItemList';
import { Item } from '@/types/main';
import CoinImage from '$/images/icons/coin.png';

export default function Rank() {
    const [itemList, setItemList] = useState<Item[]>([]);
    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetchRankItemList();
            setItemList(data);
        };
        fetchItems();
    }, []);

    return (
        <div className="flex flex-col items-center py-8 bg-primary-1 gap-y-2">
            {itemList.map((item, idx) => {
                return (
                    <figure
                        key={item.id}
                        className="flex items-center h-20 bg-primary-2 group hover:bg-primary-5 hover:text-white rounded-xl w-5/6"
                    >
                        <span className="font-black text-3xl px-2">{idx}</span>
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
                                로지텍 마우스 G102
                            </span>
                            <span className="font-black text-xl flex">
                                <Image
                                    src={CoinImage}
                                    alt="코인 이미지"
                                    style={{
                                        height: '1.5rem',
                                        width: '1.5rem',
                                    }}
                                />
                                {item.reward}
                            </span>
                        </div>
                        <span className="self-start flex-1 text-end py-2 px-3 group-hover:text-primary-4 text-sm font-semibold justify-self-end">
                            {item.createdAt}
                        </span>
                    </figure>
                );
            })}
        </div>
    );
}
