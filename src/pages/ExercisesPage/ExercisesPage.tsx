import {
  Button,
  ButtonContainer,
  ListContainer,
  ListRow,
  ListRowItem,
  PageTitle,
} from "../../styled-components";
import { useExercisesStore } from "../../store";
import { IoIosAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { useModalStore } from "../../store/useModalsStore";

export const ExercisesPage = () => {
  const { updateModalIsOpen } = useModalStore();
  const {
    items: exercises,
    removeItem: removeExercise,
    setActiveToEditItem: setAciveToEditExercise,
  } = useExercisesStore();

  return (
    <section className="page-section centralizer">
      <PageTitle>Lista de Exercícios</PageTitle>
      <ButtonContainer>
        <Button
          onClick={() => {
            setAciveToEditExercise(undefined);
            updateModalIsOpen("ExerciseModal", true);
          }}
          $type="add"
        >
          Adicionar
          <IoIosAdd />
        </Button>
      </ButtonContainer>
      <ListContainer>
        {exercises.map((currentExercise) => {
          const { id, name } = currentExercise;

          return (
            <ListRow key={id}>
              <ListRowItem>{name}</ListRowItem>
              <ListRowItem>
                <ButtonContainer $margintop={"none"} $flex="0 1 auto">
                  <Button
                    onClick={() => {
                      setAciveToEditExercise(currentExercise);
                      updateModalIsOpen("ExerciseModal", true);
                    }}
                  >
                    <CiEdit />
                  </Button>
                  <Button onClick={() => removeExercise(id)} $type="delete">
                    <RiDeleteBinLine />
                  </Button>
                </ButtonContainer>
              </ListRowItem>
            </ListRow>
          );
        })}
      </ListContainer>
    </section>
  );
};
