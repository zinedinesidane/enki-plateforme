import styled from "styled-components";
import Heading from "./Heading";
import Row from "./Row";
import Maj from "./Maj";
import Button from "./Button";

const StyledMajSection = styled.section`
  padding: 4rem 5.4rem;
`;

function MAJSection() {
  return (
    <StyledMajSection>
      <Row>
        <Heading style={{ margin: "0 0 3rem 6rem" }} as="h2">
          News et Mises à Jour
        </Heading>

        <Row type="horizontal--center">
          <Maj img="./imgs/maj.png" />
          <Maj img="./imgs/maj2.jpg" />
          <Maj img="./imgs/maj3.jpg" />
        </Row>
        <Button
          style={{
            alignSelf: "center",
            marginTop: "2.5rem",
          }}
          size="Vlarge"
          variation="secondary"
        >
          Voir plus
        </Button>
      </Row>
    </StyledMajSection>
  );
}

export default MAJSection;
