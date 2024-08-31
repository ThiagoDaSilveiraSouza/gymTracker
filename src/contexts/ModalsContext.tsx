import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import * as ModalsList from "../components/ModalsContainer/Modals";

const defaultStatus = {
  isOpen: true,
};

type ModalStatusProps = {
  [key in keyof typeof ModalsList]: typeof defaultStatus;
};

const ModalsStatusDefault: ModalStatusProps = {
  AddNewExerciseModal: defaultStatus,
};

type ModalsContextProps = [
  typeof ModalsStatusDefault,
  Dispatch<SetStateAction<typeof ModalsStatusDefault>>
];

export const ModalsContext = createContext<ModalsContextProps>([
  ModalsStatusDefault,
  () => {},
]);

type ModalsContextProviderProps = {
  children: ReactNode;
};

export const ModalsContextProvider = ({
  children,
}: ModalsContextProviderProps) => {
  const [state, setState] = useState(ModalsStatusDefault);

  return (
    <ModalsContext.Provider value={[state, setState]}>
      {children}
    </ModalsContext.Provider>
  );
};

export const UseModalsContext = (modalName: keyof typeof ModalsList) => {
  const [state, setState] = useContext(ModalsContext);

  const updateModalIsOpen = useCallback(
    (isOpenState: boolean) => {
      setState((prevState) => {
        const updatedState = { ...prevState };
        if (typeof isOpenState !== "undefined") {
          updatedState[modalName].isOpen = isOpenState;
        } else {
          updatedState[modalName].isOpen = !updatedState[modalName].isOpen;
        }

        return updatedState;
      });
    },
    [modalName, setState]
  );

  return { ...state[modalName], updateModalIsOpen };
};
