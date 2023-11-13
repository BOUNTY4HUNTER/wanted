import { ReadonlyURLSearchParams } from 'next/navigation';

const createQueryString = (
    searchParams: ReadonlyURLSearchParams,
    name: string,
    value: string,
) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
};

export default createQueryString;