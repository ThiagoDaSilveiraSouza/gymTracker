import { Form, Input, Label, ModalTitle } from "../../../../styled-components";
import { Modal } from "../../../Modal/Modal";

export const SeriesModal = () => {
  <Modal modalName="SeriesModal">
    <ModalTitle>Nova série</ModalTitle>
    <Form>
      <Label>
        Nome*
        <Input type="text" />
      </Label>
    </Form>
  </Modal>;
};
