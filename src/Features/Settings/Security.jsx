import styled from "styled-components";
import { Title } from "../../ui/Titlte";
import Heading from "../../ui/Heading";
import InformationRow from "../../ui/InformationRow";

const SecurityForm = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  color: #111;

  & input {
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    letter-spacing: 1px;
  }
`;
function Security() {
  return (
    <>
      <Title>Sécurité</Title>
      <Heading as="h4">Mot de passe</Heading>
      <SecurityForm>
        <InformationRow
          align="center"
          content={
            <>
              <label htmlFor="password">Mot de passe</label>
              <input defaultValue="password" type="password" />
            </>
          }
        />
      </SecurityForm>
    </>
  );
}

export default Security;
