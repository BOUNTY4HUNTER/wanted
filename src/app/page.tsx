import React from 'react';
import ListButton from '@/components/main/ListButton';
import RecentItemList from '@/components/main/RecentItemList';
import TotalList from '@/components/main/TotalList';

export default function Home() {
    return (
        <main className="relative mx-auto flex flex-col gap-y-4 py-2 bg-primary-1">
            <ListButton />
            <RecentItemList />
            <TotalList />
        </main>
    );
}
