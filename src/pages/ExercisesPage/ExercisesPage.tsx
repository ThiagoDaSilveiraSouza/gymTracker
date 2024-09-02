import styled from "styled-components";
import { UseModalsContext } from "../../contexts";
import { Button, ButtonContainer, PageTitle } from "../../styled-components";
import { useExercisesStore } from "../../store";
import { IoIosAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
const ListContainer = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  gap: 10px;
  box-sizing: border-box;
  margin: 30px 0 0;
`;

const ExerciseRow = styled.div`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  background-color: var(--ligth-color-2);
  padding: 5px;
  span {
    color: var(--dark-color-2);
    font-weight: 400;
    font-size: 14px;
    flex: 1 1;
  }
`;

export const ExercisesPage = () => {
  const { updateModalIsOpen } = UseModalsContext("ExerciseModal");
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
            updateModalIsOpen(true);
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
            <ExerciseRow key={id}>
              <span>{name}</span>
              <ButtonContainer $margintop={"none"} $flex="0 1 auto">
                <Button
                  onClick={() => {
                    setAciveToEditExercise(currentExercise);
                    updateModalIsOpen(true);
                  }}
                >
                  <CiEdit />
                </Button>
                <Button onClick={() => removeExercise(id)} $type="delete">
                  <RiDeleteBinLine />
                </Button>
              </ButtonContainer>
            </ExerciseRow>
          );
        })}
      </ListContainer>
    </section>
  );
};
