import styled, { css } from "styled-components";

const typesStyles = {
  default: css``,
  confirm: css`
    background: rgba(0, 128, 0, 0.8);
    border: none;
    color: white;
    padding: 5px 20px;
    &:hover {
      transform: scale(1.05);
    }
  `,
  delete: css`
    color: #bc002c;
    border-color: #bc002c;
  `,
  add: css`
    color: rgba(0, 128, 0, 0.8);
    border-color: rgba(0, 128, 0, 0.8);
  `,
};

type ButtonProps = {
  $type?: keyof typeof typesStyles;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  border: 1px solid black;
  gap: 3px;
  font-size: 14px;
  background: white;
  ${({ $type = "default" }) => typesStyles[$type]}
  &:hover {
    box-shadow: 0 0 10px 0 lightgrey;
  }
`;
