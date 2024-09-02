import styled, { CSSProperties } from "styled-components";

type ButtonContainerProps = {
  $margintop?: CSSProperties["marginTop"];
  $flex?: CSSProperties["flex"];
};

export const ButtonContainer = styled.div<ButtonContainerProps>`
  flex: ${({ $flex = "1 1 100%" }) => $flex};
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  display: flex;
  margin-top: ${({ $margintop = "20px" }) => $margintop};
`;
