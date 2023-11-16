import { API_BASE_URL } from '@/lib/constants/url';
import { fetcher } from '@/lib/utils/api';

type Args = {
    title: string;
    content: string;
    reward: string;
};

type Res = {
    result: 'success';
};

type Req = {
    title: string;
    content: string;
    reward: number;
};

export default async function fetchLostPost({ title, content, reward }: Args) {
    const url = `${API_BASE_URL}/api/lost`;

    let data = {
        result: 'success',
    } as const;

    if (process.env.NODE_ENV === 'production') {
        data = await fetcher<Req, Res>(url, {
            body: {
                title,
                content,
                reward: Number(reward),
            },
        });
        console.log(data);
    }
    console.log(data);

    return data;
}
