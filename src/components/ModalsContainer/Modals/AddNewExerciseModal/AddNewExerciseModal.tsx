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
import { UseAddNewExerciseModal } from "./UseAddNewExerciseModal";

export const AddNewExerciseModal = () => {
  const {
    formValues,
    FormHandlerSubmit,
    FormItemsHandlerChange,
    updateModalOnClose,
    updateModalOnOpen,
  } = UseAddNewExerciseModal();

  return (
    <Modal
      modalName="AddNewExerciseModal"
      onOpen={updateModalOnOpen}
      onClose={updateModalOnClose}
    >
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
