import { useState } from "react";
import { SerieType } from "../../../../types";

const formDefaultValues: SerieType = {
  id: "",
  exerciseList: [],
  name: "",
};

export const UseSereiesModal = () => {
  const [formValues, setFormValues] = useState(formDefaultValues);
  const formItemsHandlerChange = <T extends keyof typeof formValues>(
    inputName: T,
    value: SerieType[T]
  ) => {
    setFormValues((prevState) => {
      const updatedState = { ...prevState };
      updatedState[inputName] = value;
      return updatedState;
    });
  };
  return { formValues, formItemsHandlerChange };
};
