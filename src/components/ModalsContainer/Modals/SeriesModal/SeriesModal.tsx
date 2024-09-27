import { IoIosAdd } from "react-icons/io";
import {
  Button,
  ButtonContainer,
  Form,
  Input,
  Label,
  ModalTitle,
  TextArea,
} from "../../../../styled-components";
import { MainModal } from "../../../MainModal/MainModal";
import { UseSereiesModal } from "./UseSeriesModal";
import { ExerciseList } from "./components";
import { AddExerciseToSerieModal } from "./components/AddExerciseToSerieModal";
import { useState } from "react";
import { ExerciseListItemType } from "../../../../types";

export const SeriesModal = () => {
  const { formValues, formItemsHandlerChange } = UseSereiesModal();
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  const addNewExerciseToSerie = (newExercise: ExerciseListItemType) => {
    const exerciseAlreadyExistsOnList = formValues.exerciseList.some(
      ({ id }) => id === newExercise.id
    );

    if (!!exerciseAlreadyExistsOnList) {
      console.log("Exercicio ja existe na lista");
      return;
    }

    const updatedExerciseList = [...formValues.exerciseList];
    console.log("updatedExerciseList", updatedExerciseList);
    console.log("id", newExercise.id);
    updatedExerciseList.push(newExercise);
    formItemsHandlerChange("exerciseList", updatedExerciseList);
  };

  return (
    <MainModal modalName="SeriesModal">
      <ModalTitle>Nova série</ModalTitle>
      <Form>
        <Label>
          Nome*
          <Input
            type="text"
            value={formValues.name}
            onChange={(event) =>
              formItemsHandlerChange("name", event.target.value)
            }
          />
        </Label>
        <Label $flex="1 1 100%">
          Descrição
          <TextArea />
        </Label>

        <ButtonContainer>
          <Button
            $type="add"
            type="button"
            onClick={() => setAddModalIsOpen(true)}
          >
            Adicionar <IoIosAdd />
          </Button>
        </ButtonContainer>
        <ExerciseList exerciseList={formValues.exerciseList} />
        <AddExerciseToSerieModal
          useModal={[addModalIsOpen, setAddModalIsOpen]}
          addNewExerciseToSerie={addNewExerciseToSerie}
        />
      </Form>
    </MainModal>
  );
};
