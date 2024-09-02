import { create } from "zustand";

type CRUDStore<T> = {
  items: T[];
  itemActiveToEdit: T | undefined;
  itemActiveToView: T | undefined;
  addItem: (newItem: T) => void;
  removeItem: (itemId: string) => void;
  updateItem: (updatedItem: T) => void;
  setActiveToEditItem: (targetItem?: T) => void;
  setActiveToViewItem: (targetItem?: T) => void;
  resetAllActives: () => void;
};

export const createCRUDStore = <T extends { id: string }>() => {
  return create<CRUDStore<T>>((set) => ({
    items: [],
    itemActiveToEdit: undefined,
    itemActiveToView: undefined,
    addItem: (newItem) => {
      set((prevState) => ({
        items: [...prevState.items, newItem],
      }));
    },
    removeItem: (itemId) => {
      set((prevState) => ({
        items: prevState.items.filter((item) => item.id !== itemId),
      }));
    },
    updateItem: (updatedItem) => {
      set((prevState) => ({
        items: prevState.items.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        ),
      }));
    },
    setActiveToEditItem: (targetItem) => {
      set(() => ({
        itemActiveToEdit: targetItem,
      }));
    },
    setActiveToViewItem: (targetItem) => {
      set(() => ({
        itemActiveToView: targetItem,
      }));
    },
    resetAllActives: () => {
      set(() => ({
        itemActiveToEdit: undefined,
        itemActiveToView: undefined,
      }));
    },
  }));
};
