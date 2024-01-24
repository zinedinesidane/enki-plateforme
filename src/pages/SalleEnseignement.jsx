import styled from "styled-components";
import Heading from "../ui/Heading";
import Classe from "../ui/Classe";
import { AddCell } from "../ui/Cellules";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StyledSalle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  & > div > p {
    color: var(--color-grey-300);
    font-family: Jost;
    font-size: 1.8rem;
    font-style: italic;
  }
`;

const SalleLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 2rem;
`;

function SalleEnseignement() {
  return (
    <StyledSalle>
      <div>
        <Heading as="h2">Bienvenu dans votre salle d’enseignant</Heading>
        <p>C’est ici que vous pouvez gérer vos classes</p>
      </div>
      <SalleLayout>
        <NavLink to="/nouvelle-classe">
          <AddCell height="22rem" width="24rem">
            <button>
              <FaPlus />
            </button>
          </AddCell>
        </NavLink>
        <Classe />
        <Classe />
        <Classe />
        <Classe />
        <Classe />
      </SalleLayout>
    </StyledSalle>
  );
}

export default SalleEnseignement;
