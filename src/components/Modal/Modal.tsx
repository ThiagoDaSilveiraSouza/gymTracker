import { ReactNode } from "react";
import styled from "styled-components";
import { UseModalsContext } from "../../contexts";
import * as ModalsList from "../ModalsContainer/Modals";

type ModalSectionProps = {
  $isopen: string;
};

const ModalSection = styled.div<ModalSectionProps>`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1000;
  visibility: ${({ $isopen }) => ($isopen === "true" ? "visible" : "hidden")};
  opacity: ${({ $isopen }) => ($isopen === "true" ? "1" : "0")};
  transition: 0.3s;
`;

const ModalSectionBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalCardCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  &::after {
    content: "";
    width: 100%;
    height: 3px;
    background: black;
  }
`;

type ModalCardProps = {
  $isopen: string;
};

const ModalCard = styled.div<ModalCardProps>`
  padding: 20px;
  box-sizing: border-box;
  background: white;
  z-index: 1;
  transform: translateY(
    ${({ $isopen }) => ($isopen === "true" ? "0" : "-200%")}
  );

  transition: 0.3s;
`;

type ModalProps = {
  children?: ReactNode;
  modalName: keyof typeof ModalsList;
};

export const Modal = ({ children, modalName }: ModalProps) => {
  const { isOpen, updateModalIsOpen } = UseModalsContext(modalName);

  return (
    <ModalSection $isopen={isOpen.toString()}>
      <ModalSectionBg onClick={() => updateModalIsOpen()} />
      <ModalCard $isopen={isOpen.toString()}>
        <ModalCardCloseButton onClick={() => updateModalIsOpen()} />
        {children}
      </ModalCard>
    </ModalSection>
  );
};
