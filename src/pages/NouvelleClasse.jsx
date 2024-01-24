import styled from "styled-components";
import Heading from "../ui/Heading";
import ButtonGroup from "../ui/ButtonGroup";
import Button from "../ui/Button";

const StyledNouvelleClasse = styled.div`
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

const AddClassForm = styled.form`
  display: flex;
  flex-direction: column;

  & input,
  & select {
    max-width: 45rem;
    padding: 0.8rem 1rem;
    border: none;
    box-shadow: 0px 0px 0px 4px #e9f2f7;

    font-size: 1.8rem;
    font-weight: 400;
    line-height: 160%;
  }

  & select {
    margin-top: 1.5rem;
    color: #333;
  }
`;
const Etudiants = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 50rem;
  margin: 6rem 0 5rem 0;
  font-family: Jost;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span {
      color: #111;
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;

const ListeEtudiants = styled.ul`
  padding: 1.5rem 2.5rem;
  border-radius: 20px;
  height: 30rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 0px 0px 10px #e9f2f7;

  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Name = styled.span`
  color: #111;
  font-size: 2rem;
  font-weight: 400;
`;
const Status = styled.span`
  color: var(--color-green-flash);
  font-weight: 500;
`;

function NouvelleClasse() {
  return (
    <StyledNouvelleClasse>
      <div>
        <Heading as="h2">Créer une nouvelle classe</Heading>
        <p>
          Une salle de classe vous permet de rassembler vos élèves en un seul
          endroit, de leur partager une de vos cellules, de répondre à des
          questions et de faire des communication ainsi que de leur demander
          certains travaux.
        </p>
      </div>
      <AddClassForm>
        <input placeholder="Nom de la salle de classe" type="text" />
        <select name="cellules" id="cellules-select">
          <option value="Incorporer une cellule">Incorporer une cellule</option>
          <option value="cellule 1">cellule 1</option>
          <option value="cellule 2">cellule 2</option>
        </select>

        <Etudiants>
          <div>
            <span>Liste des étudiants</span>
          </div>
          <ListeEtudiants>
            <li>
              <Name>Anthony Stallen</Name>
              <Status>Vérifié</Status>
            </li>
            <li>
              <Name>Anthony Stallen</Name>
              <Status>Vérifié</Status>
            </li>
          </ListeEtudiants>
        </Etudiants>
        <ButtonGroup>
          <Button size="small" variation="secondary">
            Sauvgarder
          </Button>
          {/* <Button variation="primary">Sauvgarder</Button> */}
          <Button size="small" variation="secondary">
            Annuler
          </Button>
        </ButtonGroup>
      </AddClassForm>
    </StyledNouvelleClasse>
  );
}

export default NouvelleClasse;
