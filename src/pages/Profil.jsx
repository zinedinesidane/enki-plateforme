import styled from "styled-components";
import Heading from "../ui/Heading";
import StarRating from "../ui/StarRating";
import Cellule from "../ui/Cellule";
import { Title } from "../ui/Titlte";

const ProfilLayout = styled.div`
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

const ProfilInformations = styled.div`
  display: flex;
  gap: 8rem;
  align-items: center;
  width: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    & p {
      max-width: 35rem;
      color: #333;
      font-family: Jost;
      font-size: 1.7rem;
    }
    & div:first-child {
      width: 100%;
      margin-bottom: auto;
      display: flex;
      align-items: center;
      gap: 7rem;
      & div {
        gap: 0.5rem;
      }
    }
  }
`;

const Bio = styled.div`
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Avatar = styled.img`
  height: 22rem;
  width: 22rem;
  border-radius: 50%;
`;

const Creations = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 2rem 8rem;
`;

const Experiences = styled.div``;
const Formations = styled.div``;
const BestSales = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 2rem;
    margin-top: 1.5rem;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.3rem;
  & li {
    text-align: center;
  }
`;
const Creation = styled.div`
  background-color: var(--color-orange);
  color: #333;
  text-align: center;
  font-family: Jost;
  font-weight: 600;
  border-radius: 6px;
  padding: 2rem 6rem;
`;

function Profil() {
  return (
    <ProfilLayout>
      <div>
        <Heading as="h2">Profil Créateur</Heading>
        <p>
          Modifiez votre profil et les informations que vous partagez à vos
          élèves
        </p>
      </div>
      <ProfilInformations>
        <Avatar src="./imgs/someuser.png" />
        <div>
          <div>
            <Heading as="h2">Charles Van Capenhout</Heading>
            <StarRating
              defaultRating={4}
              color="var(--color-orange)"
              size={20}
              gap={16}
            />
          </div>
          <Bio>
            <Title>Résumé</Title>
            <p>
              Travail en tant que instituteur à l’école Madrid sur Bruxelles
            </p>
          </Bio>
        </div>
      </ProfilInformations>
      <Creations>
        <Experiences>
          <Title>Expériences</Title>

          <List>
            <li>
              <Creation>
                Ecole Primaire : Notre Dame des champs 2018-2022
              </Creation>
            </li>

            <li>
              <Creation>
                Ecole Primaire : Notre Dame des champs 2018-2022
              </Creation>
            </li>
          </List>
        </Experiences>
        <BestSales>
          <Title>Meilleures ventes</Title>

          <div>
            <div>
              <Cellule />
              <StarRating
                defaultRating={4}
                color="var(--color-orange)"
                size={30}
                gap={16}
              />
            </div>
            <div>
              <Cellule />
              <StarRating
                defaultRating={4}
                color="var(--color-orange)"
                size={30}
                gap={16}
              />
            </div>

            <div>
              <Cellule />
              <StarRating
                defaultRating={4}
                color="var(--color-orange)"
                size={30}
                gap={16}
              />
            </div>
          </div>
        </BestSales>
        <Formations>
          <Title>Formations</Title>
          <List>
            <li>
              <Creation>Defré 2014-2016 </Creation>
            </li>
            <li>
              <Creation>Defré 2014-2016 </Creation>
            </li>
          </List>
        </Formations>
      </Creations>
    </ProfilLayout>
  );
}

export default Profil;
