'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import ItemBackground from '$/images/item_bg.png';
import { GET_LIST, WANTED_LIST } from '@/lib/constants/main';
import { Item, ListType } from '@/types/main';
import fetchItemsList from '@/lib/helper/fetchItemList';
import useMainItemStore from '@/stores/mainItemStore';

function RecentItemList() {
    const searchParams = useSearchParams();
    const listType = (searchParams.get('list_type') ?? GET_LIST) as ListType;
    const title = listType === GET_LIST ? '습득' : '수배';
    const setItemList = useMainItemStore((state) => state.setItemList);
    const getCurrentItemList = useMainItemStore(
        (state) => state.getCurrentItemList,
    );
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchItems() {
            const getItemList = await fetchItemsList(GET_LIST);
            const wantedItemList = await fetchItemsList(WANTED_LIST);
            setItemList(getItemList, GET_LIST);
            setItemList(wantedItemList, WANTED_LIST);
            setItems(getCurrentItemList(listType));
        }
        fetchItems();
    }, [setItemList, setItems]);

    useEffect(() => {
        setItems(getCurrentItemList(listType));
    }, [getCurrentItemList, listType]);

    return (
        <section className="flex flex-col gap-y-2 z-20">
            <h2 className="flex text-2xl font-[800] text-primary-500 px-2">
                <b className="font-black mr-1">최근</b> {title}된 목록
            </h2>
            <div className="w-screen overflow-x-scroll">
                <div className="flex w-max bg-primary-4 h-44 relative">
                    {items.map((v) => {
                        console.log(v);
                        return (
                            <div
                                className="relative w-32 overflow-hidden h-full"
                                key={v.id}
                            >
                                {/*<Image*/}
                                {/*    alt="마우스"*/}
                                {/*    className="m-2"*/}
                                {/*    src={v.thumbnailURL}*/}
                                {/*    width={300}*/}
                                {/*    height={300}*/}
                                {/*    style={{*/}
                                {/*        height: 'fit-content',*/}
                                {/*        width: '60%',*/}
                                {/*        objectFit: 'contain',*/}
                                {/*        zIndex: 1,*/}
                                {/*        position: 'absolute',*/}
                                {/*        top: '50%',*/}
                                {/*        left: '50%',*/}
                                {/*        transform: 'translate(-45%, -65%)',*/}
                                {/*    }}*/}
                                {/*/>*/}
                                <Image
                                    src={ItemBackground}
                                    alt="bg"
                                    style={{
                                        position: 'absolute',
                                        height: 'fit-content',
                                        width: '100%',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-40%, -45%)',
                                        zIndex: 0,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default RecentItemList;
