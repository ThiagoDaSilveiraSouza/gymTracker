import styled from "styled-components";
import { UseData, UseModalsContext } from "../../contexts";
import { Button, ButtonContainer, PageTitle } from "../../styled-components";

const Table = styled.table`
  width: 100%;
`;

export const HomePage = () => {
  const { data, removeItem } = UseData("exercisesList");
  const { updateModalIsOpen } = UseModalsContext("AddNewExerciseModal");

  return (
    <section className="centralizer">
      <PageTitle>Lista de Exercícios</PageTitle>
      <ButtonContainer>
        <Button onClick={() => updateModalIsOpen(true)}>Adicionar</Button>
      </ButtonContainer>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>descrição</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, description }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{description}</td>
              <td>
                <Button onClick={() => removeItem(id)}>Remover</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};
