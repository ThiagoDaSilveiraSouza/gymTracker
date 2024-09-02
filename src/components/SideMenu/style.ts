import styled, { css } from "styled-components";

type AsideProps = {
  $isopen?: string;
};

export const Aside = styled.aside<AsideProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${({ $isopen }) => ($isopen === "true" ? "100%" : "fit-content")};
  height: 100%;
  nav {
    display: flex;
    flex-direction: column;
    background: var(--dark-color-2);
    flex-wrap: wrap;
    width: fit-content;
    max-width: 375px;
    height: 100vh;
    max-height: 100%;
    gap: 10px;
    padding: 20px;
    box-sizing: border-box;
    a {
      position: relative;
      display: flex;
      font-weight: 500;
      font-size: 20px;
      padding: 5px 0;
      color: var(--ligth-color-2);
      overflow: hidden;

      span {
        width: ${({ $isopen }) => ($isopen === "true" ? "250px" : "0px")};
        opacity: ${({ $isopen }) => ($isopen === "true" ? "1" : "0")};
        visibility: ${({ $isopen }) =>
          $isopen === "true" ? "visible" : "hidden"};
        transition: 0.3s;
      }

      svg {
        padding: 0 6px;
        box-sizing: border-box;
      }

      &:after {
        position: absolute;
        bottom: 0;
        content: "";
        width: 100%;
        height: 2px;
        background: var(--ligth-color-2);
        visibility: hidden;
        opacity: 0;
        transform: translateY(100%);
        transition: 0.5s;
      }
      &:hover {
        &:after {
          visibility: visible;
          opacity: 1;
          transform: translateY(0%);
        }
      }
    }
  }
`;

type BgContentProps = {
  $isopen?: string;
};

export const BgContent = styled.div<BgContentProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: ${({ $isopen }) => ($isopen === "true" ? "1" : "0")};
  visibility: ${({ $isopen }) => ($isopen === "true" ? "visible" : "hidden")};
  transition: 0.3s;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

type LinkContainerProps = {
  $ischecked: string;
};

export const LinkContainer = styled.div<LinkContainerProps>`
  a {
    &:after {
      ${({ $ischecked }) =>
        $ischecked === "true" &&
        css`
          visibility: visible !important;
          opacity: 1 !important;
          transform: translateY(0%) !important;
        `}
    }
  }
`;
