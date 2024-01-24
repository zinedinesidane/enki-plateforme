import styled from "styled-components";
import Heading from "../ui/Heading";
import Unit from "../ui/Unit";

const StyledUnits = styled.div`
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
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & form {
    & input {
      border-radius: 100px;
      width: 40rem;
      padding: 0.7rem 2rem;
      border: 1px solid #111;
    }
  }
`;
const UnitsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 2rem;

  & > div:first-child {
    grid-column: 2 / 3;
  }
`;

function Units() {
  return (
    <StyledUnits>
      <div>
        <Container>
          <Heading as="h2">Vos unités </Heading>
          <form action="#">
            <input placeholder="Chercher..." type="text" />
          </form>
        </Container>
        <p>
          Assemblez vos unités en cellule selon une même thématique afin de
          guider vos élèves à travers leur cours.
        </p>
      </div>
      <UnitsLayout>
        <Unit />
        <Unit />
        <Unit />
        <Unit />
        <Unit />
      </UnitsLayout>
    </StyledUnits>
  );
}

export default Units;
