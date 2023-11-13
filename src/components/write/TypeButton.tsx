'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

function TypeButton() {
    const pathName = usePathname();
    const type = pathName.split('/')[2];
    const router = useRouter();

    return (
        <div className="flex flex-col gap-y-2 z-20">
            <h2 className="text-lg font-semibold">수배 유형</h2>
            <div className="flex z-20 h-10 gap-x-1 border border-primary-5 rounded-xl p-0.5 bg-primary-2 w-2/3">
                <button
                    className={`flex items-center justify-center flex-1 rounded-xl ${
                        type === 'found'
                            ? 'bg-primary-5 text-primary-2'
                            : 'bg-primary-2 text-primary-5'
                    } hover:bg-primary-5`}
                    onClick={() => {
                        router.push('/write/found');
                    }}
                >
                    물건 수배
                </button>
                <button
                    className={`flex items-center justify-center flex-1 rounded-xl ${
                        type === 'lost'
                            ? 'bg-primary-5 text-primary-2'
                            : 'bg-primary-2 text-primary-5'
                    } hover:bg-primary-5`}
                    onClick={() => router.push('/write/lost')}
                >
                    물건 습득
                </button>
            </div>
        </div>
    );
}

export default TypeButton;
