import { FormEvent, useCallback, useState } from "react";
import { UseModalsContext } from "../../../../contexts";
import { useExercisesStore } from "../../../../store";
import { ExerciseType } from "../../../../types";

const formDefaultValues: ExerciseType = {
  id: "",
  name: "",
  description: "",
};

export const UseAddNewExerciseModal = () => {
  const { updateModalIsOpen } = UseModalsContext("AddNewExerciseModal");
  const [formValues, setFormValues] = useState(formDefaultValues);
  const {
    addExercise,
    exerciseActiveToEdit,
    setAciveToEditExercise,
    updateExercise,
  } = useExercisesStore();
  const updateModalOnOpen = useCallback(() => {
    if (exerciseActiveToEdit) {
      setFormValues(exerciseActiveToEdit);
    } else {
      setFormValues(formDefaultValues);
    }
  }, [setFormValues, exerciseActiveToEdit]);

  const updateModalOnClose = () => {
    setFormValues(formDefaultValues);
    setAciveToEditExercise(formDefaultValues);
  };

  const FormHandlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (exerciseActiveToEdit) {
      updateExercise(formValues);
    } else {
      const newItemId = crypto.randomUUID();

      const newItem = {
        ...formValues,
        id: newItemId,
      };

      addExercise(newItem);
    }

    updateModalIsOpen(false);
    setAciveToEditExercise();
  };

  const FormItemsHandlerChange = (
    inputName: keyof typeof formValues,
    value: string
  ) => {
    setFormValues((prevState) => {
      const updatedState = { ...prevState };
      updatedState[inputName] = value;
      return updatedState;
    });
  };
  return {
    formValues,
    updateModalOnOpen,
    updateModalOnClose,
    FormHandlerSubmit,
    FormItemsHandlerChange,
  };
};
