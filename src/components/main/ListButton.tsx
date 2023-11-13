'use client';

import React from 'react';
import { ListType } from '@/types/main';
import { cn } from '@/lib/utils/style';
import { GET_LIST, WANTED_LIST } from '@/lib/constants/main';
import { useRouter, useSearchParams } from 'next/navigation';
import createQueryString from '@/lib/helper/createQueryString';

function ListButton() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentListType = (searchParams.get('list_type') ??
        GET_LIST) as ListType;
    const title = currentListType === GET_LIST ? '수배' : '습득';

    return (
        <section className="flex mt-5 z-20">
            <button
                onClick={() => {
                    router.push(
                        '?' +
                            createQueryString(
                                searchParams,
                                'list_type',
                                currentListType === 'get_list'
                                    ? WANTED_LIST
                                    : GET_LIST,
                            ),
                    );
                }}
                className={cn(
                    'flex  bg-primary-3 text-font-title font-semibold px-6 py-2 shadow shadow-primary-5',
                    {
                        'justify-self-end': title === '습득',
                        'ml-auto': title === '수배',
                    },
                )}
            >
                <b>{title}목록</b>으로 가기
            </button>
        </section>
    );
}

export default ListButton;
