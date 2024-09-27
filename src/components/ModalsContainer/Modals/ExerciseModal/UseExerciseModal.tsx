import { FormEvent, useCallback, useMemo, useState } from "react";
import { useExercisesStore } from "../../../../store";
import { ExerciseType } from "../../../../types";
import { useModalStore } from "../../../../store/useModalsStore";

type ModalTitlePayload = {
  type: "save" | "edit" | "view";
  value: string;
};

const formDefaultValues: ExerciseType = {
  id: "",
  name: "",
  description: "",
};

export const UseExerciseModal = () => {
  const { updateModalIsOpen } = useModalStore();
  const [formValues, setFormValues] = useState(formDefaultValues);
  const {
    addItem: addExercise,
    itemActiveToEdit: exerciseActiveToEdit,
    itemActiveToView: exerciseActiveToView,
    setActiveToEditItem: setAciveToEditExercise,
    updateItem: updateExercise,
    resetAllActives: resetAllAcives,
  } = useExercisesStore();

  const modalTitle = useMemo(() => {
    const payload: ModalTitlePayload = {
      type: "save",
      value: "Novo Exercício",
    };

    if (exerciseActiveToEdit) {
      payload.type = "edit";
      payload.value = exerciseActiveToEdit.name;
    }
    if (exerciseActiveToView) {
      payload.type = "view";
      payload.value = exerciseActiveToView.name;
    }
    return payload;
  }, [exerciseActiveToEdit, exerciseActiveToView]);

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

    updateModalIsOpen("ExerciseModal", false);
    resetAllAcives();
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
    modalTitle,
    updateModalOnOpen,
    updateModalOnClose,
    FormHandlerSubmit,
    FormItemsHandlerChange,
  };
};
