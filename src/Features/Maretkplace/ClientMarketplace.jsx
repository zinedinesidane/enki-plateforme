import styled from "styled-components";
import Heading from "../../ui/Heading";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import StarRating from "../../ui/StarRating";
import { Img, ImgContainer, Tags } from "../../pages/Marketplace";
import Button from "../../ui/Button";

const StyledMarketplace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  & > div > a {
    color: var(--color-primary);
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 100px;
    border: 1px solid #111;
    padding: 0.7rem 2rem;

    &:focus-within {
      outline: 2px solid var(--color-primary);
      outline-offset: -1px;
    }
    & input {
      width: 40rem;
      border: none;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: var(--color-primary);
      }
    }
    & button {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);

      & svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`;

const FormateurCard = styled.div`
  align-items: center;
  justify-content: center;
  width: 28rem;
  border: 1px solid var(--color-primary);
  border-radius: 32px;
  text-align: center;
  padding: 4rem 2rem;
  background: #fffefa;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
  & img {
    height: 9.2rem;
    width: 9.2rem;
    border-radius: 50%;
  }

  & span {
    font-size: 2rem;
    font-weight: 600;
    color: #111;
    margin: 2rem 0 3rem 0;
  }

  & p {
    margin-bottom: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;
const Cellule = styled.div`
  gap: 2rem;
  flex: 1;

  & > button {
    align-self: end;
  }
  & h2 {
    color: var(--color-orange);
  }
  & > div {
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2.5rem;

      & span {
        color: #111;
        font-size: 32px;
        font-weight: 600;
        line-height: normal;
      }
    }

    &:last-of-type {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
const DetailBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  border-bottom: 1px solid #000;
  padding: 1rem 0;

  & span {
    font-weight: 600;
    line-height: normal;
    &:first-child {
      color: #111;
    }
    &:last-child {
      color: #a6a39d;
    }
  }
`;
function ClientMarketplace() {
  return (
    <StyledMarketplace>
      <div>
        <Box>
          <Heading as="h2">Bienvenue sur le Marketplace</Heading>
          <form action="#">
            <input placeholder="Chercher..." type="text" />
            <button>
              <CiSearch />
            </button>
          </form>
        </Box>
        <NavLink>&#60; revenir aux paramètres de la vente</NavLink>
      </div>
      <img src="./imgs/marketplace.png" alt="marketplace" />
      <Container>
        <FormateurCard>
          <img src="./imgs/someuser.png" alt="user card" />

          <span>
            Charles <br /> Van Capenhout
          </span>

          <p>Travail en tant que instituteur à l’école Madrid sur Bruxelles</p>

          <NavLink>View Profil</NavLink>
        </FormateurCard>
        <Cellule>
          <div>
            <Heading as="h2">Conjugaison : Français</Heading>
            <span>19.99 €</span>
          </div>

          <div>
            <DetailBox>
              <span>Détails</span>
              <span>Avis (24)</span>
            </DetailBox>
            <StarRating
              defaultRating={4}
              color="var(--color-orange)"
              size={30}
            />

            <Tags>
              <span>Indicatif</span>
              <span>Présent</span>
              <span>Imparfait</span>
              <span>Conditionnel</span>
            </Tags>
            <p>
              Cellule pour apprendre les bases de la conjugaison française tel
              que l’indicatif, le conditionnels et le subjonctifs
            </p>

            <ImgContainer>
              <Img img="./imgs/vente.png" />
              <Img img="./imgs/vente.png" />
            </ImgContainer>
          </div>
          <Button size="Vlarge" variation="tertiary">
            Acheter
          </Button>
        </Cellule>
      </Container>
    </StyledMarketplace>
  );
}

export default ClientMarketplace;
