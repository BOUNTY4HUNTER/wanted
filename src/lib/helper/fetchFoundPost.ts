import { Item, ListType } from '@/types/main';
import { API_BASE_URL } from '@/lib/constants/url';
import { GET_LIST } from '@/lib/constants/main';
import { range } from '@/lib/utils/array';
import { fetcher } from '@/lib/utils/api';

type Args = {
    title: string;
    content: string;
    reward: string;
    time: string;
    image: File;
};

type Res = {
    result: 'success';
};

type Req = {
    title: string;
    content: string;
    reward: number;
    images: File;
};

export default async function fetchFoundPost({
    title,
    content,
    reward,
    image,
    time,
}: Args) {
    const url = `${API_BASE_URL}/api/found`;

    let data = {
        result: 'success',
    } as const;

    if (process.env.NODE_ENV === 'production') {
        data = await fetcher<Req, Res>(url, {
            body: {
                title,
                content,
                reward: Number(reward),
                images: image,
            },
        });
    }

    return data;
}
