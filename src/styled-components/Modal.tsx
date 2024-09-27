import styled from "styled-components";

const responsiveWidth = 500;
const responsiveWidthPixels = responsiveWidth + "px";

type ModalSectionProps = {
  $isopen: string;
  $zIndex?: number;
};

export const ModalSection = styled.div<ModalSectionProps>`
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

export const ModalSectionBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalCardCloseButton = styled.button`
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

export const ModalCard = styled.div<ModalCardProps>`
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 100%;
  padding: 15px;
  box-sizing: border-box;
  background: white;
  z-index: 1;
  transform: translateY(
    ${({ $isopen }) => ($isopen === "true" ? "0" : "-200%")}
  );
  transition: 0.3s;

  @media (max-width: ${responsiveWidthPixels}) {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;
