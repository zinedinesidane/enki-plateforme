import styled from "styled-components";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { ModifyButton, Ressource } from "./Ressource";

export const StyledCellule = styled(Ressource)`
  background-color: var(--color-grey-0);
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-0);
`;

const Front = styled.div`
  height: 100%;

  & > div:first-child {
    position: relative;
    height: 55%;
    /* padding: 1.6rem 2rem; */

    & span {
      font-size: 1.6rem;
      font-weight: 500;

      /* color: ${(props) =>
        props.finished ? "var(--color-orange)" : "var(--color-green-flash)"}; */
    }

    & button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      font-weight: 600;
      color: var(--color-grey-900);
      white-space: nowrap;
      &:focus {
        outline: none;
      }
    }
  }
  & > div:not(:first-child) {
    height: 45%;
    padding: 1rem;
    background-color: var(--color-orange);
    padding: 1.6rem 2.8rem;
    padding: 1.6rem 2rem;
    position: relative;
    text-align: center;

    /* display: flex;
    justify-content: center; */
    & div {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      font-size: 1.8rem;
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
  & > span {
    color: var(--color-grey-900);
    padding-bottom: 0.8rem;
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

function Cellule({ status, finished }) {
  const [isFlipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped(!isFlipped);
  };
  return (
    <StyledCellule width="24rem" height="28rem" finished={finished}>
      <ModifyButton isFlipped={!isFlipped} onClick={handleFlip}>
        <IoSettingsOutline />
      </ModifyButton>

      {!isFlipped ? (
        <Front>
          <div>
            {status && (
              <span
                style={{
                  color: finished
                    ? "var(--color-green-flash)"
                    : "var(--color-orange-300)",
                }}
              >
                {" "}
                {finished ? "Terminé" : "En cours"}
              </span>
            )}
            {false && <button>Ajouter une illustration</button>}
            {true && <img src="./imgs/Rectangle.png" alt="cellule " />}
          </div>
          <div>
            <Title>Français : conjugaison</Title>
            <div
              style={{
                bottom: ".8rem",
                left: "2.8rem",
              }}
            >
              <span>30</span>
              <CiUser />
            </div>
            <div
              style={{
                bottom: ".8rem",
                right: "2.8rem",
              }}
            >
              <span>10 unités</span>
            </div>
          </div>
        </Front>
      ) : (
        <Back>
          <Title>Français - grammaire</Title>
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
    </StyledCellule>
  );
}

export default Cellule;
