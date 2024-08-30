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

export const AddDayExerciseModal = () => {
  return (
    <Modal modalName="AddDayExerciseModal">
      <ModalTitle>Novo Exercício</ModalTitle>
      <Form>
        <Label>
          Nome*
          <Input type="text" required />
        </Label>
        <Label>
          Data*
          <Input type="date" required />
        </Label>
        <Label>
          Descrição
          <TextArea rows={5} required />
        </Label>
        <ButtonContainer>
          <Button>Enviar</Button>
        </ButtonContainer>
      </Form>
    </Modal>
  );
};
