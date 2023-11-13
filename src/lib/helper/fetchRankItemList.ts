import { fetcher } from '@/lib/utils/api';
import { Item, ListType } from '@/types/main';
import { API_BASE_URL } from '@/lib/constants/url';
import { range } from '@/lib/utils/array';

export default async function fetchRankItemList() {
    const url = `${API_BASE_URL}/api/ranking`;

    let data: Item[] = range(0, 10).map((v) => ({
        id: v.toString(),
        title: `title-${v}`,
        thumbnailURL: '/images/mouse.png',
        reward: 1000,
        createdAt: `2012-12-${Math.floor(Math.random() * 30) + 1}`,
        x: 'x',
        y: 'y',
        address: '주소입니다.',
    }));

    if (process.env.NODE_ENV === 'production') {
        data = await fetcher<null, Item[]>(url);
    }

    return data;
}
