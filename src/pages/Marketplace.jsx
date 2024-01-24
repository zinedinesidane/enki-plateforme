import styled, { css } from "styled-components";
import Heading from "../ui/Heading";
import { FaPlus } from "react-icons/fa";
import { AddCell } from "../ui/Cellules";
import { useState } from "react";
import Button from "../ui/Button";

const StyledMarketplace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  & > div > p {
    color: var(--color-grey-300);
    font-family: Jost;
    font-size: 1.8rem;
    font-style: italic;
  }

  & > button {
    align-self: flex-end;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 2rem;

  & button {
    border: none;
    background: none;

    &:focus {
      outline: none;
    }

    & svg {
      height: 2.4rem;
      width: 2.4rem;
      color: #a6a6a6;
    }
  }
`;

export const Img = styled.figure`
  background-color: #eee;
  background-image: ${(props) => `url(${props.img})`};
  border-radius: 12px;
  width: 9.2rem;
  height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MarketPlaceLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  max-width: 70rem;

  & > * {
    display: flex;
    flex-direction: column;
  }

  & form {
    font-family: Jost;
    padding: 2rem 3rem;
    background-color: #eee;
    border-radius: 32px;
    gap: 2rem;
    max-width: 37rem;
    & label {
      font-size: 1.8rem;
      color: #111;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    & input,
    & textarea {
      border: none;
      background: none;
      font-style: italic;
    }
    & textarea {
      height: 14rem;
    }
    & > span {
      align-self: center;
      color: #111;
      font-size: 2.2rem;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
  }

  & > div {
    align-items: center;
  }
`;

const Group = styled.div`
  display: flex;
  width: 100%;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 0.5rem;
      align-self: start;
    `}
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  /* margin-top: 1rem; */
  padding: 1rem 0;
  flex-wrap: wrap;
  & span {
    color: #111;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: normal;
    padding: 0.6rem 1rem;
    border-radius: 4px;
    background: #d8d8d8;
    position: relative;

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      position: absolute;
      top: -0.2rem;
      right: -0.5rem;
      border-radius: 50%;
      height: 1.5rem;
      width: 1.5rem;
      border: none;
    }
  }
`;

const PriceInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & div {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
  & label {
    color: #111;
    font-family: Jost;
    font-weight: 600;
    line-height: normal;
  }
  & input {
    width: 10rem;
    border-radius: 6px;
    border: 1px solid var(--color-orange);

    padding: 0.3rem 0.8rem;
    &:focus {
      outline: 2px solid var(--color-orange);
      outline-offset: -1px;
    }
  }
`;

function Marketplace() {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };
  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };
  return (
    <StyledMarketplace>
      <div>
        <Heading as="h2">Vendre une cellule</Heading>
        <p>Paramétrez la nouvelle cellule que vous souhaitez mettre en vente</p>
      </div>
      <div>
        <Heading as="h5">Ajouter des images</Heading>
        <ImgContainer>
          <Img img="./imgs/vente.png" />
          <Img img="./imgs/vente.png" />

          <button>
            <Img>
              <FaPlus />
            </Img>
          </button>
        </ImgContainer>
      </div>

      <MarketPlaceLayout>
        <form>
          <span>Infos</span>
          <Group type="horizontal">
            <label htmlFor="titre">Titre</label>
            <input id="titre" placeholder="Ajouter un titre" type="text" />
          </Group>

          <Group type="vertical">
            <label htmlFor="description">Description de la cellule</label>
            <textarea
              id="description"
              placeholder="Ajouter une description"
              type="text"
            />
          </Group>
          <Group type="vertical">
            <label htmlFor="tags">Catégories</label>
            <input
              id="tags"
              placeholder="Ajouter des tags"
              type="text"
              value={tagInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <Tags>
              {tags.map((tag, index) => (
                <span key={index}>
                  {tag}

                  {/* <button>x</button> */}
                  <button onClick={() => handleRemoveTag(index)}>x</button>
                </span>
              ))}
            </Tags>
          </Group>
        </form>
        <div>
          <Heading as="h5">Selectionner la cellule à vendre</Heading>

          <AddCell
            style={{
              margin: "1rem 0 3rem 0",
            }}
            width="24rem"
            height="28rem"
          >
            <button>
              <FaPlus />
            </button>
          </AddCell>
          <PriceInformations>
            <Group type="horizontal">
              <label htmlFor="prix">Prix</label>
              <input id="prix" type="text" />
            </Group>
            <Group type="horizontal">
              <label htmlFor="code-promo">Code Promo</label>
              <input id="code-promo" type="text" />
            </Group>
            <Group type="horizontal">
              <label htmlFor="reduction">Réduction</label>
              <input id="reduction" type="text" />
            </Group>
          </PriceInformations>
        </div>
      </MarketPlaceLayout>
      <Button size="Vlarge" variation="tertiary">
        Mettre en vente
      </Button>
    </StyledMarketplace>
  );
}

export default Marketplace;
