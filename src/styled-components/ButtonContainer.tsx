import styled, { CSSProperties } from "styled-components";

type ButtonContainerProps = {
  $margintop?: CSSProperties["marginTop"];
};

export const ButtonContainer = styled.div<ButtonContainerProps>`
  flex: 1 1 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  display: flex;
  margin-top: ${({ $margintop = "20px" }) => $margintop};
`;
