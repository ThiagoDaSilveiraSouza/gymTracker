import { ReactNode, useCallback, useEffect } from "react";
import * as ModalsList from "../ModalsContainer/Modals";
import { useModalStore } from "../../store/useModalsStore";
import {
  ModalCard,
  ModalCardCloseButton,
  ModalSection,
  ModalSectionBg,
} from "../../styled-components/Modal";

type ModalProps = {
  children?: ReactNode;
  modalName: keyof typeof ModalsList;
  onOpen?: () => void;
  onClose?: () => void;
};

export const MainModal = ({
  children,
  modalName,
  onClose,
  onOpen,
}: ModalProps) => {
  const { status, updateModalIsOpen } = useModalStore();
  const isOpen = status[modalName]?.isOpen;
  const historyIndex = status[modalName]?.historyIndex;

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
    <ModalSection $isopen={isOpen?.toString()} $zIndex={historyIndex}>
      <ModalSectionBg onClick={closeModalHandlerClick} data-testid="modal-bg" />
      <ModalCard $isopen={isOpen?.toString()}>
        <ModalCardCloseButton
          onClick={closeModalHandlerClick}
          data-testid="modal-close-button"
        />
        {children}
      </ModalCard>
    </ModalSection>
  );
};
