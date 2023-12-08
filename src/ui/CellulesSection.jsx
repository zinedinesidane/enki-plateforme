import styled from "styled-components";
import ContentGrid from "./ContentGrid";
import Heading from "./Heading";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import Cellule, { StyledCellule } from "./Cellule";
import Filter from "./Filter";

const AddCell = styled(StyledCellule)`
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

const StyledSection = styled(ContentGrid)`
  background: var(--color-grey-0);
`;
const Text = styled.div`
  padding: 3rem 4.8rem;
  position: relative;
  & p {
    margin-top: 2.5rem;
    max-width: 65rem;
  }
`;
const Wrapper = styled.div`
  padding: 4rem 4.8rem;
  background-color: var(--color-grey-100);
  & > button {
    justify-self: center;
    margin-top: 5rem;
  }
`;
const Cellules = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 2rem;
`;

function CellulesSection() {
  return (
    <StyledSection maxWidth="1200px">
      <Text className="full-width">
        <Heading as="h2">Créer des cellules</Heading>
        <p>
          Assemblez vos unités en cellule selon une même thématique afin de
          guider vos élèves à travers leur cours.
        </p>
        <Filter />
      </Text>
      <Wrapper className="full-width">
        <Cellules>
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
        </Cellules>
        <Button variation="primary">Commencer à créer</Button>
      </Wrapper>
    </StyledSection>
  );
}

export default CellulesSection;
