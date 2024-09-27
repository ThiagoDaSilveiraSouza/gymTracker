import styled, { CSSProperties } from "styled-components";

type ButtonContainerProps = {
  $margintop?: CSSProperties["marginTop"];
  $flex?: CSSProperties["flex"];
  $width?: CSSProperties["width"];
  $flexWrap?: CSSProperties["flexWrap"];
};

export const ButtonContainer = styled.div<ButtonContainerProps>`
  flex: ${({ $flex = "1 1 100%" }) => $flex};
  display: flex;
  justify-content: flex-end;
  flex-wrap: ${({ $flexWrap = "wrap" }) => $flexWrap};
  gap: 10px;
  width: ${({ $width = "-moz-initial" }) => $width};
  margin-top: ${({ $margintop = "20px" }) => $margintop};
`;
