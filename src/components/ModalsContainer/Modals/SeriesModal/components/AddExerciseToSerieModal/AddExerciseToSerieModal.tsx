import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useExercisesStore } from "../../../../../../store";
import {
  Button,
  ButtonContainer,
  Input,
  Label,
  ModalTitle,
} from "../../../../../../styled-components";
import {
  ModalCard,
  ModalCardCloseButton,
  ModalSection,
  ModalSectionBg,
} from "../../../../../../styled-components/Modal";
import { IoIosAdd } from "react-icons/io";
import { useModalStore } from "../../../../../../store/useModalsStore";
import styled from "styled-components";
import { ExerciseListItemType } from "../../../../../../types";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

type AddExerciseToSerieModalProps = {
  useModal: [boolean, Dispatch<SetStateAction<boolean>>];
  addNewExerciseToSerie: (ExerciseListItem: ExerciseListItemType) => void;
};

export const AddExerciseToSerieModal = ({
  useModal,
  addNewExerciseToSerie,
}: AddExerciseToSerieModalProps) => {
  const [isOpen, setIsOpen] = useModal;
  const { updateModalIsOpen } = useModalStore();
  const { items } = useExercisesStore();
  const [currentExercise, setCurrentExercise] = useState<ExerciseListItemType>({
    id: "",
    name: "",
    repetitions: 0,
    weight: "",
    description: "",
  });

  const selectHandlerChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const currentExerciseId = event.target.value;
    const currentExercise = items.find(({ id }) => id === currentExerciseId);
    if (!currentExercise) {
      return;
    }
    const { name, description } = currentExercise;

    setCurrentExercise((prevState) => {
      return { ...prevState, name, description };
    });
  };

  return (
    <ModalSection $isopen={isOpen.toString()}>
      <ModalSectionBg onClick={() => setIsOpen(false)} />
      <ModalCard $isopen={isOpen.toString()}>
        <ModalTitle>Adicionar exercicio a lista</ModalTitle>
        <ModalCardCloseButton onClick={() => setIsOpen(false)} type="button" />
        <Container>
          <Label $flex="1 1 100%">
            Exercício
            <select
              disabled={items.length < 1}
              required
              onChange={selectHandlerChange}
              defaultValue={currentExercise.id}
            >
              <option disabled hidden value="" />
              {items.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
            <ButtonContainer $margintop="5px">
              <Button
                type="button"
                onClick={() => updateModalIsOpen("ExerciseModal")}
                $type="add"
              >
                Novo
                <IoIosAdd />
              </Button>
            </ButtonContainer>
          </Label>
          <Label $flex="0 1 calc(30% - 5px)">
            Repetições
            <Input type="number" defaultValue={0} $maxwidth="80px" />
          </Label>
          <Label $flex="1 1 auto">
            Peso
            <Input type="text" defaultValue={0} />
          </Label>
          <Label $flex="1 1 auto">
            <ButtonContainer>
              <Button
                type="button"
                $type="confirm"
                onClick={() => {
                  addNewExerciseToSerie(currentExercise);
                  setIsOpen(false);
                }}
              >
                Salvar
              </Button>
            </ButtonContainer>
          </Label>
        </Container>
      </ModalCard>
    </ModalSection>
  );
};
