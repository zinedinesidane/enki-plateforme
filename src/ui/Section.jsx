import styled, { css } from "styled-components";
import Row from "./Row";
import Button from "./Button";
import Heading from "./Heading";
import MAJSection from "./MAJSection";
import ContactSection from "./ContactSection";
import AvisSection from "./AvisSection";
import ButtonGroup from "./ButtonGroup";
import UnitSection from "./UnitSection";
import Aboutus from "./Aboutus";
import ContentGrid from "./ContentGrid";
import CellulesSection from "./CellulesSection";
import MyUnits from "./MyUnits";

// const StyledSection = styled.section
const StyledSection = styled(ContentGrid)`
  min-height: calc(100vh - 8rem);
  background-color: ${(props) => props.bgc};
  background-position: ${(props) => props.bg_position};
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  /* padding: 0rem 5.4rem; */
  padding: ${(props) => props.padding || "4rem 5.4rem"};
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.type === "center" && css``}
  ${(props) =>
    props.type === "full-width" &&
    css`
      flex-direction: column;
      /* background-color: red; */
    `}
`;

const Img = styled.div`
  /* max-width: 42rem; */
  & img {
    width: 34rem;
    /* height: 45rem; */
    /* height: 100%; */

    display: block;
    /* aspect-ratio: 1; */
  }
`;

const Content = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;

  padding: 2rem 0;

  & p {
    margin-top: 1.5rem;
  }

  & div:last-child {
    display: flex;
    align-items: center;

    gap: 3rem;
  }
`;

function Section() {
  return (
    <>
      {/* <StyledSection
        type="center"
        bgc="var(--color-grey-100)"
        background="./imgs/sec1bg.png"
        bg_position="25% center"
      >
        <Row type="horizontal--center">
          <Img>
            <img src="./imgs/sec1img1.jpg" alt="Hero section img" />
          </Img>
          <div
            style={{
              maxWidth: "34rem",
              padding: "2rem 0",
            }}
          >
            <Heading as="h2">Commencez à créer vos cours en ligne</Heading>
            <p>
              Avec Enki, commencez à créer vos cours gratuitement et
              partagez-les avec vos élèves.
              <br />
              <br />
              Suivez leurs avancés, intéragissez avec eux et perfectionnez vos
              leçons : Apprennez une nouvelle façon d’enseigner !
            </p>

            <ButtonGroup>
              <Button style={{ width: "15rem" }}>S'inscrire</Button>
              <Button style={{ width: "15rem" }}>Se connecter</Button>
            </ButtonGroup>
          </div>
        </Row>
      </StyledSection> */}
      {/* <Aboutus /> */}
      <CellulesSection />
      <StyledSection
        type="full-width"
        bgc="var(--color-grey-0)"
        background="./imgs/sec2bg.png"
        bg_position="150% 20%"
      >
        <Row type="horizontal--full-width">
          <Content>
            <Heading as="h2">Créer une Unité !</Heading>
            <p>
              Créez vos cours en ligne gratuitement et vendez les sur le
              marketplace ou partagez-les avec vos élèves ! Utilisez tous les
              outils mis à votre disposition afin de créer des cours de qualité
              et ludiques. <br /> <br /> Assemblez vos unités en cellule selon
              une même thématique afin de guider vos élèves à travers vos cours.
              Suivez leurs progrès, constatez là où ils bloquent et retravaillez
              vos cours afin de leur offrir le meilleur avenir possible !<br />{" "}
              <br /> Commencez dés maintenant ! C’est gratuit et facile !
            </p>
          </Content>
          <Img>
            <img src="./imgs/sec2img.png" alt="unité section img" />
          </Img>
        </Row>
        <Button style={{ marginTop: "2rem" }} size="large">
          Commencer à créer
        </Button>
      </StyledSection>
      {/* <StyledSection
        padding="0rem 5.4rem"
        type="center"
        // bgc="red"
        bgc="var(--color-grey-100)"
        background="./imgs/sec1bg.png"
        bg_position="25% center"
      >
        <Row
          style={{
            alignSelf: "end",
          }}
          type="horizontal--center"
        >
          <div style={{ maxWidth: "46rem" }}>
            <Heading as="h1">Commencez à créer vos cours !</Heading>
            <p>
              Créez vos cours et perfectionnez-les, testez vos élèves et
              analysez leur résultats afin de comprendre où ils bloquent. <br />{" "}
              Rassemblez vos unités en cellules et suivez l’évolution de vos
              étudiants.
            </p>

            <div style={{ marginTop: "6rem", marginBottom: "6rem" }}>
              <Button variation="secondary">Créer une Nouvelle Unité</Button>
            </div>
          </div>
          <Img
            style={{
              alignSelf: "end",
              // height: "45rem",
              maxWidth: "40rem !important",
            }}
          >
            <img
              style={
                {
                  // alignSelf: "end",
                  // height: "40rem",
                }
              }
              src="./imgs/images_shape.png"
              alt="Hero section img"
            />
          </Img>
        </Row>
      </StyledSection> */}
      <UnitSection />
      <MyUnits />
      <StyledSection
        type="full-width"
        bgc="var(--color-grey-0)"
        // bgc="red"
        background="./imgs/sec2bg.png"
        bg_position="-20% 10%"
        maxWidth="1000px"
      >
        <Row className="breakout" type="horizontal--full-width">
          <Img
            style={{
              borderRadius: "5.2rem",
              backgroundColor: "var(--color-orange)",
              padding: "2.5rem 2rem",
            }}
          >
            <img
              style={{
                objectFit: "cover",
                clipPath:
                  "polygon(20% 3%, 80% 3%, 97% 20%, 97% 80%,80% 97%, 20% 97%, 3% 80%, 3% 20%)",
              }}
              src="./imgs/sec4img.jpg"
              alt="unité section img"
            />
          </Img>

          <Content>
            <Heading as="h2">Pourquoi Enki ?</Heading>
            <p>
              Enki a été créé afin de donner une alternative innovante et
              créative à l’enseignement classique. La société dans laquelle nous
              vivons aujourd’hui est en perpétuelle changement et il est parfois
              difficile de s’y retrouver. L’école dans l’état actuel des choses
              est dépassée et ne stimule plus assez nos enfants pour que ces
              derniers arrivent à affronter le monde qui les attend. <br />{" "}
              <br /> Notre but est de donner le goût de la curiosité et de la
              connaissance aux plus jeunes comme aux plus âgés : Apprendre
              devrait être éun plaisir qui ne se tarit jamais. <br /> <br />
              C’est donc pourquoi nous avons décidé de nous lancer dans ce
              périple : Donner des outils à des citoyens motivés afin qu’ils
              puissent offrir de leur temps et de leur talent à une des causes
              les plus belles qui soit : La naissance d’une nouvelle génération.
              !<br /> <br /> “C'est l'art suprême de l'enseignant d'éveiller la
              joie dans l'expression créative et la connaissance.” <br /> Albert
              Einstein
            </p>
          </Content>
        </Row>

        <Button style={{ marginTop: "2.5rem" }}>Commencer à créer</Button>
      </StyledSection>

      <MAJSection />
      <ContactSection />
      <AvisSection />
    </>
  );
}

export default Section;
