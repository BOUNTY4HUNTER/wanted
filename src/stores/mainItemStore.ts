import { create } from 'zustand';
import { Item, ListType } from '@/types/main';

type GetItemState = {
    getItemList: Item[];
    wantedItemList: Item[];
};

export type SortType = 'recent' | 'price';

type GetItemActions = {
    setItemList: (itemList: Item[], type: ListType) => void;
    sortItemList: (listType: ListType, sortType: SortType) => void;
    getCurrentItemList: (listType: ListType) => Item[];
};

const useMainItemStore = create<GetItemState & GetItemActions>((set, get) => ({
    getItemList: [],
    wantedItemList: [],
    setItemList: (itemList: Item[], type: ListType) =>
        set(() => {
            switch (type) {
                case 'wanted_list':
                    return { wantedItemList: itemList };
                case 'get_list':
                    return { getItemList: itemList };
            }
        }),
    sortItemList: (listType, sortType) =>
        set((state) => {
            const { getItemList, wantedItemList } = state;
            const itemList =
                listType === 'wanted_list' ? wantedItemList : getItemList;
            const sortedItemList = itemList.sort((a, b) => {
                switch (sortType) {
                    case 'recent':
                        // TODO : createdAt이 number인지 확인
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        return b.createdAt - a.createdAt;
                    case 'price':
                        return b.reward - a.reward;
                    default:
                        return 0;
                }
            });
            return {
                getItemList:
                    listType === 'wanted_list' ? getItemList : sortedItemList,
                wantedItemList:
                    listType === 'wanted_list'
                        ? sortedItemList
                        : wantedItemList,
            };
        }),
    getCurrentItemList: (listType) =>
        listType === 'wanted_list' ? get().wantedItemList : get().getItemList,
}));

export default useMainItemStore;
