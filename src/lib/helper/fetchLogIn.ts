import { API_BASE_URL } from '@/lib/constants/url';
import { fetcher } from '@/lib/utils/api';

type Args = {
    username: string;
    password: string;
};

type Res = {
    result: 'success';
};

type Req = {
    username: string;
    password: string;
};

export default async function fetchLogIn({ username, password }: Args) {
    const url = `${API_BASE_URL}/api/found`;

    let data = {
        result: 'success',
    } as const;

    // process.env.NODE_ENV === 'production'
    if (process.env.NODE_ENV === 'development') {
        data = await fetcher<Req, Res>(url, {
            body: {
                username,
                password,
            },
        });
    }

    return data;
}
