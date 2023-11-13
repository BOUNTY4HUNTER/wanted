import { create } from 'zustand';
import { Item } from '@/types/main';

type GetItemState = {
    itemList: Item[];
};

type GetItemActions = {
    setItemList: (itemList: Item[]) => void;
};

const useGetItemStore = create<GetItemState & GetItemActions>((set, get) => ({
    itemList: [],
    setItemList: (itemList: Item[]) => set({ itemList }),
}));

export default useGetItemStore;
