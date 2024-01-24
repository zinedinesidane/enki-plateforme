import styled from "styled-components";
import Heading from "../ui/Heading";
import Cellules from "../ui/Cellules";

const StyledCels = styled.div`
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

function Cels() {
  return (
    <StyledCels>
      <div>
        <Heading as="h2">Vos cellules </Heading>
        <p>
          Assemblez vos unités en cellule selon une même thématique afin de
          guider vos élèves à travers leur cours.
        </p>
      </div>
      <Cellules />
    </StyledCels>
  );
}

export default Cels;
