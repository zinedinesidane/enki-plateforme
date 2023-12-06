import styled from "styled-components";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const StyledForm = styled.form`
  border: 1px solid var(--color-grey-900);
  background: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.8rem 0.5rem 1.5rem;
`;
const Input = styled.input`
  background: none;
  border: none;
`;
const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

function Search() {
  return (
    <StyledForm>
      <Input type="text" name="search" placeholder="Rechercher..." />
      <Button type="submit">
        <HiMiniMagnifyingGlass />
      </Button>
    </StyledForm>
  );
}

export default Search;
