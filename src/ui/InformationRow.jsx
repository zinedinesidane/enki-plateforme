import styled from "styled-components";

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(8rem, max-content);
  column-gap: 4rem;

  & > button {
    text-align: right;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    gap: 12rem;
    align-items: ${(props) => props.align};
    color: #111;

    & button {
      height: 7rem;
      width: 7rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border: none;
      background: none;
      & svg {
        position: absolute;
        z-index: 2;
        height: 2.2rem;
        width: 2.2rem;

        color: var(--color-primary);
      }
    }
  }
`;
export const ModifyButton = styled.button`
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 1.5rem;
  text-transform: lowercase;
`;

function InformationRow({
  content,
  btnContent = "Modifier",
  align = "start",
  modifier = true,
}) {
  return (
    <StyledRow align={align}>
      <div>{content}</div>
      {modifier && <ModifyButton>{btnContent}</ModifyButton>}
    </StyledRow>
  );
}

export default InformationRow;
