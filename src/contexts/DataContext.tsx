import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ExerciseType } from "../types/ExerciseType";

type DefaultDataContextType = {
  exercisesList: ExerciseType[];
};

const defaultDataContext: DefaultDataContextType = {
  exercisesList: [],
};

type DataContextType = [
  DefaultDataContextType,
  Dispatch<SetStateAction<DefaultDataContextType>>
];

export const DataContext = createContext<DataContextType>([
  defaultDataContext,
  () => {},
]);

type DataContextProviderProps = {
  children?: ReactNode;
};

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [state, setState] = useState(defaultDataContext);

  return (
    <DataContext.Provider value={[state, setState]}>
      {children}
    </DataContext.Provider>
  );
};

type UseDataFunctionsPayload<T = undefined> = {
  status: "ok" | "error";
  descriprion: string;
  data?: T;
};

export const UseData = (dataProp: keyof DefaultDataContextType) => {
  const [state, setState] = useContext(DataContext);

  const createDataPropsUpdater = <
    TypeProp extends keyof DefaultDataContextType
  >(
    propName: TypeProp
  ) => {
    const defaultResponse: UseDataFunctionsPayload = {
      status: "error",
      descriprion: "",
    };

    const addItem = (
      newItem: DefaultDataContextType[TypeProp][number]
    ): UseDataFunctionsPayload => {
      const response = { ...defaultResponse };
      console.log("aqui!");

      setState((prevState) => {
        const updatedState = { ...prevState };
        const itemList = [...updatedState[propName]];
        const itemAlreadyExist = itemList.find(
          (currentItem) =>
            currentItem.id === newItem.id || currentItem.name === newItem.name
        );

        if (itemAlreadyExist) {
          response.status = "error";
          response.descriprion = "Item already Exists";
          return updatedState;
        }

        itemList.push(newItem);
        response.status = "ok";
        response.descriprion = "Item was add.";

        return { ...updatedState, [propName]: itemList };
      });

      return response;
    };

    const removeItem = (id: string): UseDataFunctionsPayload => {
      const response = { ...defaultResponse };

      setState((prevState) => {
        const updatedState = { ...prevState };
        const itemExists = updatedState[propName].find(
          (currentItem) => currentItem.id === id
        );

        if (!itemExists) {
          response.status = "error";
          response.descriprion = "Item do not exists.";
          return prevState;
        }

        const updatedList = updatedState[propName].filter(
          (currentItem) => currentItem?.id !== id
        );

        response.status = "ok";
        response.descriprion = "Item was removed.";

        return { ...updatedState, [propName]: updatedList };
      });

      return response;
    };

    const getItemById = (
      id: string
    ): UseDataFunctionsPayload<DefaultDataContextType[TypeProp][number]> => {
      const response = {
        ...defaultResponse,
        data: undefined,
      };
      const targetItem = state[propName].find(
        (currentItem) => currentItem?.id === id
      );

      if (!targetItem) {
        response.status = "error";
        response.descriprion = "Item is not exists.";
        return response;
      }

      return { ...response, data: targetItem };
    };

    return { addItem, removeItem, getItemById, itemList: state[propName] };
  };

  const updatePropFunctions = createDataPropsUpdater(dataProp);

  return { data: state[dataProp], ...updatePropFunctions };
};
