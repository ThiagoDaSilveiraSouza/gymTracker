import styled, { css } from "styled-components";

const typesStyles = {
  default: css``,
  confirm: css`
    background: rgb(0, 255, 127);
    border: none;
    color: white;
    padding: 5px 20px;
    &:hover {
      transform: scale(1.05);
    }
  `,
};

type ButtonProps = {
  $type?: keyof typeof typesStyles;
};

export const Button = styled.button<ButtonProps>`
  ${({ $type = "default" }) => typesStyles[$type]}
`;
