import { FaPlus } from "react-icons/fa";
import Cellule from "./Cellule";
import styled from "styled-components";
import { Ressource } from "./Ressource";

export const AddCell = styled(Ressource)`
  align-items: center;
  justify-content: center;
  gap: 4rem;
  & span {
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  & button {
    & svg {
      height: 9.2rem;
      width: 9.2rem;
      color: var(--color-orange);
    }
  }
`;

export const StyledCellules = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 2rem;
`;

function Cellules() {
  return (
    <StyledCellules>
      <AddCell>
        <button>
          <FaPlus />
        </button>
        <span>Créer une nouvelle cellule</span>
      </AddCell>
      <Cellule />
      <Cellule />
      <Cellule />
      <Cellule finished={true} />
      <Cellule finished={true} />
    </StyledCellules>
  );
}

export default Cellules;
