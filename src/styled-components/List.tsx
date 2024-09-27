import styled, { CSSProperties } from "styled-components";

type ListContainerProps = {
  $maxHeight?: CSSProperties["maxHeight"];
  $width?: CSSProperties["width"];
};

export const ListContainer = styled.div<ListContainerProps>`
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  gap: 10px;
  box-sizing: border-box;
  margin: 30px 0 0;
  width: ${({ $width = "100%" }) => $width};
  max-height: ${({ $maxHeight = "auto" }) => $maxHeight};
`;

export const ListRow = styled.div`
  flex: 1 1 100%;
  gap: 10px;
  display: flex;
  align-items: center;
  background-color: var(--ligth-color-2);
  padding: 5px;
`;

type ListRowItem = {
  $flex?: CSSProperties["flex"];
};

export const ListRowItem = styled.div<ListRowItem>`
  flex: ${({ $flex = "1 1" }) => $flex};
  color: var(--dark-color-2);
  font-weight: 400;
  font-size: 14px;
`;
