import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;
