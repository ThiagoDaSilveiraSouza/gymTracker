import { IoIosAdd } from "react-icons/io";
import { Button, ButtonContainer, PageTitle } from "../../styled-components";
import { useModalStore } from "../../store/useModalsStore";

export const SeriesPage = () => {
  const { updateModalIsOpen } = useModalStore();
  return (
    <section className="page-section centralizer">
      <PageTitle>Lista de séries</PageTitle>

      <ButtonContainer>
        <Button
          $type="add"
          onClick={() => updateModalIsOpen("SeriesModal", true)}
        >
          Adicionar <IoIosAdd />
        </Button>
      </ButtonContainer>
    </section>
  );
};
