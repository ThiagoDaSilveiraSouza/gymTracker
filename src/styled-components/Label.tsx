import styled, { CSSProperties } from "styled-components";

type LabelProps = {
  $flex?: CSSProperties["flex"];
};

export const Label = styled.label<LabelProps>`
  flex: ${({ $flex = "1 1" }) => $flex};
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;
