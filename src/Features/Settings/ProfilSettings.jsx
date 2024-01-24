import Heading from "../../ui/Heading";
import InformationRow from "../../ui/InformationRow";
import { List } from "../../ui/List";
import { Title } from "../../ui/Titlte";

function ProfilSettings() {
  return (
    <>
      <Title>Profil Créateur</Title>
      <Heading as="h4">Informations générales</Heading>
      <List gap="2rem">
        <InformationRow
          content={
            <>
              <span>Description courte</span>
              <span>
                Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem
                Apollo, ut ais, sapientissimum iudicavit; huius enim facta,
                illius dicta laudantur. De me autem, ut iam cum utroque vestrum
                loquar, sic habetote. Quod opera consulta cogitabatur astute, ut
                hoc insidiarum genere Galli periret avunculus, ne eum ut.{" "}
              </span>
            </>
          }
        />
        <InformationRow
          content={
            <>
              <span>Job actuel </span>
              <span>Enseignant</span>
            </>
          }
        />
      </List>
      <Heading as="h4">Parcours</Heading>
      <List gap="2rem">
        <InformationRow
          content={
            <>
              <span>Enseignant </span>
              <span>
                École de Maredsous, 2e cycle supérieur 2015-2020, Mathématiques
              </span>
            </>
          }
        />
        <InformationRow
          content={
            <>
              <span>Enseignant </span>
              <span>
                École de Maredsous, 2e cycle supérieur 2015-2020, Mathématiques
              </span>
            </>
          }
        />
        <InformationRow btnContent="+ ajouter une formation" />
      </List>
      <Heading as="h4">Parcours</Heading>
      <List gap="2rem">
        <InformationRow
          content={
            <>
              <span>Bachelier </span>
              <span>ULB, Bachelier en éducation supérieur 2014</span>
            </>
          }
        />

        <InformationRow btnContent="+ ajouter un diplôme" />
      </List>
    </>
  );
}

export default ProfilSettings;
