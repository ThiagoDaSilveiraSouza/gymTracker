import { ReactNode, useCallback, useEffect } from "react";
import styled, { CSSProperties } from "styled-components";
import * as ModalsList from "../ModalsContainer/Modals";
import { useModalStore } from "../../store/useModalsStore";

type ModalSectionProps = {
  $isopen: string;
  $zIndex?: number;
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
  z-index: ${({ $zIndex = -1 }) => $zIndex + 1000};
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
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: none;
  user-select: none;
  outline: none;

  &::after,
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: black;
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`;

type ModalCardProps = {
  $isopen: string;
};

const ModalCard = styled.div<ModalCardProps>`
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 100%;
  padding: 30px;
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
  onOpen?: () => void;
  onClose?: () => void;
};

export const Modal = ({ children, modalName, onClose, onOpen }: ModalProps) => {
  const { status, updateModalIsOpen } = useModalStore();
  const { isOpen, historyIndex } = status[modalName];
  const closeModalHandlerClick = () => {
    updateModalIsOpen(modalName, false);
    if (onClose) {
      onClose();
    }
  };

  const openModalOnLoaded = useCallback(() => {
    if (isOpen && onOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  useEffect(() => {
    openModalOnLoaded();
  }, [openModalOnLoaded]);

  return (
    <ModalSection $isopen={isOpen.toString()} $zIndex={historyIndex}>
      <ModalSectionBg onClick={closeModalHandlerClick} data-testid="modal-bg" />
      <ModalCard $isopen={isOpen.toString()}>
        <ModalCardCloseButton
          onClick={closeModalHandlerClick}
          data-testid="modal-close-button"
        />
        {children}
      </ModalCard>
    </ModalSection>
  );
};
