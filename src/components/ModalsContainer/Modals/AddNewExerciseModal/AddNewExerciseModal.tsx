import { Modal } from "../../../Modal/Modal";
import {
  Button,
  ButtonContainer,
  Form,
  Input,
  Label,
  ModalTitle,
  TextArea,
} from "../../../../styled-components";
import { UseData, UseModalsContext } from "../../../../contexts";
import { FormEvent, useState } from "react";
import { ExerciseType } from "../../../../types";

const formDefaultValues: ExerciseType = {
  id: "",
  name: "",
  description: "",
};

export const AddNewExerciseModal = () => {
  const { addItem } = UseData("exercisesList");
  const { updateModalIsOpen } = UseModalsContext("AddNewExerciseModal");
  const [formValues, setFormValues] = useState(formDefaultValues);

  const FormHandlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItemId = crypto.randomUUID();

    const newItem = {
      ...formValues,
      id: newItemId,
    };

    addItem(newItem);

    updateModalIsOpen(false);
    setFormValues(formDefaultValues);
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

  return (
    <Modal modalName="AddNewExerciseModal">
      <ModalTitle>Novo Exercício</ModalTitle>
      <Form onSubmit={FormHandlerSubmit}>
        <Label>
          Nome*
          <Input
            type="text"
            value={formValues.name}
            required
            onChange={(event) =>
              FormItemsHandlerChange("name", event.target.value)
            }
          />
        </Label>
        <Label $flex="1 1 100%">
          Descrição
          <TextArea
            value={formValues.description}
            rows={5}
            onChange={(event) =>
              FormItemsHandlerChange("description", event.target.value)
            }
          />
        </Label>
        <ButtonContainer>
          <Button $type="confirm">Salvar</Button>
        </ButtonContainer>
      </Form>
    </Modal>
  );
};
