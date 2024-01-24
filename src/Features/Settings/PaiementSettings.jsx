import styled from "styled-components";
import Heading from "../../ui/Heading";
import InformationRow, { ModifyButton } from "../../ui/InformationRow";
import { List } from "../../ui/List";
import { Title } from "../../ui/Titlte";

const Button = styled.button`
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  border: none;
  border-radius: 100px;
  margin: 3rem 0 0.8rem 0;
`;

function PaiementSettings() {
  return (
    <>
      <Title>Facture et mode de payement</Title>
      <Button>
        <span>Sold disponible</span>
        <span>45.99€</span>
      </Button>
      <ModifyButton style={{ alignSelf: "start", marginLeft: "2rem" }}>
        + ajouter des fonds
      </ModifyButton>

      <List gap="2rem">
        <Heading as="h4">Adresse de facturation</Heading>
        <InformationRow
          content={
            <>
              <span>Adresse</span>
              <span>
                Avenue des phalènes, 34 Ixelles Bruxelles 1000 Belgique
              </span>
            </>
          }
        />
        <InformationRow
          content={
            <>
              <span>TVA</span>
              <span>645.859.154.5252</span>
            </>
          }
        />
        <InformationRow
          content={
            <>
              <span>Statut</span>
              <span>Indépendant</span>
            </>
          }
        />
      </List>
      <List gap="2rem">
        <Heading as="h4">Modes de paiement</Heading>
        <InformationRow
          content={
            <>
              <span>Paypal</span>
              <span>charlesvancapenhout@gmail.com</span>
            </>
          }
        />

        <InformationRow
          content={
            <>
              <span>Stripe</span>
              <span>charlesvancapenhout@gmail.com</span>
            </>
          }
        />
        <InformationRow btnContent="+ ajouter un moyen de paiment" />
      </List>
    </>
  );
}

export default PaiementSettings;
