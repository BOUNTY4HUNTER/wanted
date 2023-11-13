import { GET_LIST, WANTED_LIST } from '@/lib/constants/main';

export type ListType = typeof GET_LIST | typeof WANTED_LIST;

export type Item = {
    id: string;
    title: string;
    thumbnailURL: string;
    reward: number;
    createdAt: string;
    x: string;
    y: string;
    address: string;
};
