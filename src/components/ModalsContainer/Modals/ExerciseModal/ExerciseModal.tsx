import { MainModal } from "../../../MainModal/MainModal";
import {
  Button,
  ButtonContainer,
  Form,
  Input,
  Label,
  ModalTitle,
  TextArea,
} from "../../../../styled-components";
import { UseExerciseModal } from "./UseExerciseModal";

export const ExerciseModal = () => {
  const {
    formValues,
    modalTitle,
    FormHandlerSubmit,
    FormItemsHandlerChange,
    updateModalOnClose,
    updateModalOnOpen,
  } = UseExerciseModal();

  return (
    <MainModal
      modalName="ExerciseModal"
      onOpen={updateModalOnOpen}
      onClose={updateModalOnClose}
    >
      <ModalTitle>{modalTitle.value}</ModalTitle>
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
    </MainModal>
  );
};
