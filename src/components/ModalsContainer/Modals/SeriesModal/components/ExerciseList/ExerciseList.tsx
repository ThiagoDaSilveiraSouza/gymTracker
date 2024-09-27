import { CiEdit } from "react-icons/ci";
import {
  Button,
  ButtonContainer,
  ListContainer,
  ListRow,
  ListRowItem,
} from "../../../../../../styled-components";
import { SerieType } from "../../../../../../types";
import { RiDeleteBinLine } from "react-icons/ri";

type ExerciseListProps = {
  exerciseList: SerieType["exerciseList"];
};

export const ExerciseList = ({ exerciseList }: ExerciseListProps) => {
  return (
    <ListContainer>
      <ListRow>
        <ListRowItem>Nome</ListRowItem>
        <ListRowItem>Rep.</ListRowItem>
        <ListRowItem>Peso</ListRowItem>
        <ListRowItem>Ações</ListRowItem>
      </ListRow>
      {exerciseList.map(({ id, name, repetitions, weight }) => {
        return (
          <ListRow key={id}>
            <ListRowItem>{name}</ListRowItem>
            <ListRowItem>{repetitions}</ListRowItem>
            <ListRowItem>{weight}</ListRowItem>
            <ListRowItem>
              <ButtonContainer
                $margintop={"none"}
                $flex="0 1 auto"
                $flexWrap="nowrap"
              >
                <Button
                  type="button"
                  onClick={() => {
                    // setAciveToEditExercise(currentExercise);
                    // updateModalIsOpen("ExerciseModal", true);
                  }}
                >
                  <CiEdit />
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    // removeExercise(id);
                  }}
                  $type="delete"
                >
                  <RiDeleteBinLine />
                </Button>
              </ButtonContainer>
            </ListRowItem>
          </ListRow>
        );
      })}
    </ListContainer>
  );
};
