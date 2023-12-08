import styled from "styled-components";
import ContentGrid from "./ContentGrid";
import Heading from "./Heading";
import Filter from "./Filter";
import Unit from "./Unit";
import Button from "./Button";

const StyledSection = styled(ContentGrid)`
  background: var(--color-grey-0);
`;
const Text = styled.div`
  padding: 3rem 4.8rem;
  position: relative;
`;
const Wrapper = styled.div`
  padding: 5rem 4.8rem;
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

function MyUnits() {
  return (
    <StyledSection maxWidth="1200px">
      <Text className="full-width">
        <Heading as="h2">Vos Unités </Heading>
        <Filter />
      </Text>
      <Wrapper className="full-width">
        <Cellules>
          <Unit />
          <Unit />
          <Unit />
          <Unit />
          <Unit />
        </Cellules>
        <Button variation="primary">Commencer à créer</Button>
      </Wrapper>
    </StyledSection>
  );
}

export default MyUnits;
