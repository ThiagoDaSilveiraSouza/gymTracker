import { create } from "zustand";
import * as ModalsList from "../components/ModalsContainer/Modals";

type ModalsNamesType = keyof typeof ModalsList;

type ModalsStore = {
  [key in ModalsNamesType]: {
    isOpen: boolean;
    historyIndex: number;
  };
};

const defaultModalsStatus: ModalsStore = {
  ExerciseModal: {
    isOpen: true,
    historyIndex: -1,
  },
  SeriesModal: {
    isOpen: false,
    historyIndex: -1,
  },
};

type UseModalStoreType = {
  status: ModalsStore;
  updateModalIsOpen: (modalName: ModalsNamesType, isOpen?: boolean) => void;
  closeAllmodals: () => void;
};

export const useModalStore = create<UseModalStoreType>((set) => {
  let history: ModalsNamesType[] = [];
  const resetHistory = () => (history = []);
  const addToHistory = (modalName: ModalsNamesType) => {
    history.push(modalName);
  };

  const removeFromHistory = (modalName: ModalsNamesType) => {
    history = [...history].filter(
      (currentModalName) => currentModalName !== modalName
    );
  };
  const getModalHistoryIndex = (modalName: ModalsNamesType) =>
    history
      .reverse()
      .findIndex((currentModalName) => currentModalName === modalName);

  return {
    status: defaultModalsStatus,
    history: [],
    updateModalIsOpen: (modalName, isOpen) => {
      set((prevState) => {
        const updatedIsOpen =
          isOpen !== undefined ? isOpen : !prevState.status[modalName].isOpen;
        updatedIsOpen ? addToHistory(modalName) : removeFromHistory(modalName);

        return {
          ...prevState,
          status: {
            ...prevState.status,
            [modalName]: {
              isOpen: updatedIsOpen,
              historyIndex: getModalHistoryIndex(modalName),
            },
          },
        };
      });
    },
    closeAllmodals: () => {
      set((prevState) => {
        const modalsNames = Object.keys(prevState.status);
        const updatedModalStatus = modalsNames.reduce(
          (status, currentModalName) => {
            const currentModalStatus =
              prevState.status[
                currentModalName as keyof typeof prevState.status
              ];

            resetHistory();

            return {
              ...status,
              [currentModalName]: { ...currentModalStatus, isOpen: false },
            };
          },
          {} as typeof prevState.status
        );
        return { ...prevState, status: updatedModalStatus };
      });
    },
  };
});
