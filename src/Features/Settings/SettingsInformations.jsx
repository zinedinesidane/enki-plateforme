import { Title } from "../../ui/Titlte";
import Heading from "../../ui/Heading";
import InformationRow from "../../ui/InformationRow";
import { FaCamera } from "react-icons/fa6";
import { List } from "../../ui/List";

function SettingsInformations() {
  return (
    <>
      <Title>informations personelles</Title>
      <Heading as="h4">Informations générales</Heading>
      <List gap="2rem">
        <InformationRow
          modifier={false}
          content={
            <>
              <span>Photo</span>
              <button>
                <FaCamera />
                <img src="/imgs/someuser.png" alt="user img" />
              </button>
            </>
          }
        />
        <InformationRow
          content={
            <>
              <span>Nom</span>
              <span>Charles Van Capenhout</span>
            </>
          }
        />
        <InformationRow
          content={
            <>
              <span>Date de naissance</span>
              <span>16/05/1992</span>
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
      <Heading as="h4">Coordonnées</Heading>
      <List gap="2rem">
        <InformationRow
          content={
            <>
              <span>Adresse email</span>
              <span>charlesvancapenhout@gmail.com</span>
            </>
          }
        />
        <InformationRow
          content={
            <>
              <span>téléphone</span>
              <span>+32 485 45 56 75</span>
            </>
          }
        />
      </List>
    </>
  );
}

export default SettingsInformations;
