import styled, { CSSProperties } from "styled-components";

type InputPros = {
  $flex?: CSSProperties["flex"];
  $maxwidth?: CSSProperties["width"];
};

export const Input = styled.input<InputPros>`
  flex: ${({ $flex = "1 1 100%" }) => $flex};
  max-width: ${({ $maxwidth = "100%" }) => $maxwidth};
`;
