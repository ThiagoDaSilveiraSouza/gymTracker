import styled, { css, CSSProperties } from "styled-components";

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
    padding: 5px;
  `,
  add: css`
    color: rgba(0, 128, 0, 0.8);
    border-color: rgba(0, 128, 0, 0.8);
    padding: 5px;
  `,
};

type ButtonProps = {
  $type?: keyof typeof typesStyles;
  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];
  $padding?: CSSProperties["padding"];
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  border: 1px solid black;
  gap: 3px;
  font-size: 14px;
  background: white;
  width: ${({ $width = "initial" }) => $width};
  width: ${({ $height = "initial" }) => $height};
  padding: ${({ $padding = "-moz-initial" }) => $padding};
  ${({ $type = "default" }) => typesStyles[$type]}
  &:hover {
    box-shadow: 0 0 10px 0 lightgrey;
  }
`;
