import styled from "styled-components";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import Heading from "./Heading";
import ContentGrid from "./ContentGrid";

const StyledContentGrid = styled(ContentGrid)`
  background-color: var(--color-grey-0);
  background-image: url("./imgs/sec1bg.png");
  background-position: 25% center;
  min-height: calc(100vh - 8rem);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    & > div:not(:has(img)) {
      /* max-width: 35rem; */
      display: flex;
      flex-direction: column;
      /* padding: 3rem 0; */
      max-width: 34rem;
    }
    & h2 {
      /* max-width: 3s4rem; */
      margin-bottom: 3rem;
    }

    & > div:has(img) {
      width: 45%;
      position: relative;
      & img {
        position: relative;
        top: 0;
        bottom: 0;
        z-index: 2;
      }
      &::before {
        content: "";
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 1.9rem;
        left: 1.5rem;
        z-index: 1;

        /* outline-offset: 2rem; */
        border: 2px solid var(--color-orange);
      }
    }
  }
`;

function Aboutus() {
  return (
    // <StyledContentGrid as={ContentGrid}>
    // <StyledContentGrid maxWidth="800px">
    <StyledContentGrid>
      <div>
        <div>
          <img src="./imgs/sec1img1.jpg" alt="Hero section img" />
        </div>
        <div>
          <Heading as="h2">Commencez à créer vos cours en ligne</Heading>
          <p>
            Avec Enki, commencez à créer vos cours gratuitement et partagez-les
            avec vos élèves.
            <br />
            <br />
            Suivez leurs avancés, intéragissez avec eux et perfectionnez vos
            leçons : Apprennez une nouvelle façon d’enseigner !
          </p>

          <ButtonGroup style={{ margin: "7rem 0 2rem 0" }}>
            <Button style={{ width: "15rem" }}>S'inscrire</Button>
            <Button style={{ width: "15rem" }}>Se connecter</Button>
          </ButtonGroup>
        </div>
      </div>
    </StyledContentGrid>
  );
}

export default Aboutus;
