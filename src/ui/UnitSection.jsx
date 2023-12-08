import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import ContentGrid from "./ContentGrid";

const StyledUnitSection = styled(ContentGrid)`
  /* display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 4.4rem 4rem 4.4rem;

  gap: 6rem; */
  background-position: 40% center;
  background-image: url("./imgs/sec1bg.png");

  padding-top: 8rem;
  & > div {
    display: flex;
    justify-content: center;
    & div {
      /* max-width: 45rem; */
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      & h1 {
        margin-bottom: 3rem;
        max-width: 40rem;
      }
      & p {
        color: var(--color-primary-700);
      }
      & button {
        margin-top: 6rem;
        align-self: start;
      }
    }
    & img {
      width: 55%;
    }
  }
  /* 
  & div {
    max-width: 45rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & h1 {
      margin-bottom: 2.5rem;
      max-width: 40rem;
    }
    & p {
      color: var(--color-primary-700);
    }
    & button {
      margin-top: 6rem;
      align-self: start;
    }
  }
  & img {
    max-width: 40%;
    max-width: 34rem;
    max-width: 48rem;
    align-self: end;
    transform: translateY(4rem);
  } */
`;

function UnitSection() {
  return (
    <StyledUnitSection>
      <div>
        <div>
          <Heading as="h1">Commencez à Créer vos cours ! </Heading>
          <p>
            Créez vos cours et perfectionnez-les, testez vos élèves et analysez
            leur résultats afin de comprendre où ils bloquent. <br /> Rassemblez
            vos unités en cellules et suivez l’évolution de vos étudiants.
          </p>

          <Button variation="secondary">Créer une Nouvelle Unité</Button>
        </div>

        <img alt="unit section img" src="./imgs/unitsecImg.png" />
      </div>
    </StyledUnitSection>
  );
}

export default UnitSection;
