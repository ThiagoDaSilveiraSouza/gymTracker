import { ButtonHTMLAttributes } from "react";
import styled, { CSSProperties } from "styled-components";

interface HamburgerComponentProps {
  $ischecked: string;
  $color: CSSProperties["color"];
}

const HamburgerComponent = styled.button<HamburgerComponentProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;

  margin: 0;
  background: none;
  border: 0;
  outline: none;
  cursor: pointer;

  transition: transform 0.3s;
  @media (max-width: 650px) {
    display: flex;
  }
  /* :hover {
    transform: scale(1.1);
  } */

  span {
    position: relative;
    width: 100%;
    height: 4px;
    background: ${({ $color }) => $color};
    border-radius: 10px;
    transform: ${({ $ischecked }) =>
      $ischecked === "true" ? "-0" : "rotate(45deg)"};
    transition: transform 0.3s;

    &::after,
    &::before {
      content: "";

      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;

      border-radius: 10px;
      background: ${({ $color }) => $color};
      transform: ${({ $ischecked }) =>
        $ischecked === "true" ? "-0" : "rotate(90deg)"};
      transition: transform 0.3s;
    }
    &::before {
      top: ${({ $ischecked }) => ($ischecked === "true" ? "-10px" : "0px")};
    }
    &::after {
      top: ${({ $ischecked }) => ($ischecked === "true" ? "10px" : "0")};
    }
  }
`;

interface HamburgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked?: boolean;
  $color?: CSSProperties["color"];
}

export const HamburgerButton = ({
  isChecked = true,
  $color = "var(--ligth-color-2)",
  ...props
}: HamburgerButtonProps) => {
  return (
    <HamburgerComponent
      $ischecked={isChecked.toString()}
      $color={$color}
      {...props}
    >
      <span></span>
    </HamburgerComponent>
  );
};
