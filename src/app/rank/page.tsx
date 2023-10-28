import React from 'react';
import Item from '@/components/item';

export default function Rank() {
    return (
        <div className="flex flex-col items-center bg-primary-1 py-2 gap-y-2">
            {Array(10)
                .fill(0)
                .map((_, idx) => {
                    return <Item index={idx + 1} />;
                })}
        </div>
    );
}
