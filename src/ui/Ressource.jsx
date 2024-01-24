import styled from "styled-components";

export const Ressource = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

  & button {
    background: none;
    border: none;
  }
`;

export const ModifyButton = styled.button`
  z-index: 99;
  position: absolute;
  top: 1rem;
  right: 2rem;

  &:focus {
    outline: none;
  }
  & svg {
    color: ${(props) =>
      props.isFlipped ? "var(--color-orange)" : "var(--color-primary)"};

    height: 3rem;
    width: 3rem;
  }
`;
