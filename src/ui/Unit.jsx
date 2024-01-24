import styled from "styled-components";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import StarRating from "./StarRating";
import { ModifyButton, Ressource } from "./Ressource";

// const StyledUnit = styled(Ressource)`
//   height: 37rem;
//   width: 25rem;
// `;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-orange);
`;
const Category = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-black);
`;

const Front = styled.div`
  height: 100%;
  & img {
    height: 44%;
    object-fit: cover;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 56%;
    & > div:not(:first-child) {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 400;
      font-size: 2rem;
      & svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`;

const Back = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5.5rem 1rem 2.6rem 1rem;
  gap: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
    border-bottom: 1px solid var(--color-orange);
  }
  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
    height: 100%;
    & li {
      font-size: 2rem;
      font-weight: 600;
      &:last-child {
        margin-top: auto;
        color: var(--color-red);
        justify-self: end;
      }
    }
  }
`;

function Unit({ finished }) {
  const [isFlipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped(!isFlipped);
  };
  return (
    <Ressource height="37rem" width="25rem">
      <ModifyButton isFlipped={!isFlipped} onClick={handleFlip}>
        <IoSettingsOutline />
      </ModifyButton>
      {!isFlipped ? (
        <Front>
          <img src="./imgs/unitimg.png" alt="unit " />

          <div>
            <StarRating
              style={{
                position: "absolute",
                top: "1rem",
                right: "2rem",
              }}
              defaultRating={4}
              color="var(--color-orange)"
              size={15}
            />
            <Title style={{ marginTop: "-2rem" }}>Conditionnel présent</Title>
            <Category style={{ marginTop: "0.8rem", marginBottom: "2rem" }}>
              Français
            </Category>
            <span
              style={{
                color: finished
                  ? "var(--color-green-flash)"
                  : "var(--color-orange-300)",
              }}
            >
              {" "}
              {finished ? "Terminé" : "En cours"}
            </span>{" "}
            <div
              style={{
                bottom: "1.3rem",
                left: "2rem",
              }}
            >
              <span>30</span>
              <CiUser />
            </div>
            <div
              style={{
                bottom: "1.3rem",
                right: "2rem",
              }}
            >
              <span>10 unités</span>
            </div>
          </div>
        </Front>
      ) : (
        <Back>
          <div>
            <Title>Hebben en Zijn</Title>
            <Category>Néerlandais</Category>
          </div>
          <ul>
            <li>
              <button>Modifier</button>
            </li>
            <li>
              <button>Analyse</button>
            </li>
            <li>
              <button>Publier</button>
            </li>
            <li>
              <button>Supprimer</button>
            </li>
          </ul>
        </Back>
      )}
    </Ressource>
  );
}

export default Unit;
