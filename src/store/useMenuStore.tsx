import { create } from "zustand";

type MenuStoreProps = {
  isMenuOpen: boolean;
  toggleMenu: (status?: boolean) => void;
};

const useMenuStore = create<MenuStoreProps>((set) => ({
  isMenuOpen: false,
  toggleMenu: (status) =>
    set((state) => ({ isMenuOpen: status || !state.isMenuOpen })),
}));

export default useMenuStore;
