import styled from "styled-components";
import { UseModalsContext } from "../../contexts";
import { Button, ButtonContainer, PageTitle } from "../../styled-components";
import { useExercisesStore } from "../../store";
import { IoIosAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const Table = styled.table`
  margin: 0 auto;
  thead {
    tr {
      border-bottom: 1px solid;
      padding: 10px 0;
      th {
        font-weight: 500;
      }
    }
  }
  tbody {
    tr {
      padding: 10px 0;
      font-size: 13px;
    }
  }
  tr {
    display: flex;
    gap: 10px;
  }
  th,
  td {
    display: flex;
    align-items: start;
    width: 200px;
    overflow-x: auto;
  }
`;

export const ExercisesPage = () => {
  const { updateModalIsOpen } = UseModalsContext("AddNewExerciseModal");
  const { exercises, removeExercise, setAciveToEditExercise } =
    useExercisesStore();

  return (
    <section className="centralizer">
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
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>descrição</th>
            <th></th>
            {/* <th>Ações</th> */}
          </tr>
        </thead>
        <tbody>
          {exercises.map((currentExercise) => {
            const { id, name, description } = currentExercise;

            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{description}</td>
                <td>
                  <ButtonContainer $margintop={"none"}>
                    <Button
                      onClick={() => {
                        setAciveToEditExercise(currentExercise);
                        updateModalIsOpen(true);
                      }}
                    >
                      <CiEdit />
                      Editar
                    </Button>
                    <Button onClick={() => removeExercise(id)} $type="delete">
                      <RiDeleteBinLine />
                      Remover
                    </Button>
                  </ButtonContainer>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};
