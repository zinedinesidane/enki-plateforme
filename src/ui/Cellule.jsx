import styled from "styled-components";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { useState } from "react";

export const StyledCellule = styled.div`
  position: relative;
  background-color: var(--color-grey-0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 30rem;
  border-radius: 32px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  & button {
    background: none;
    border: none;
  }
`;
const ModifyButton = styled.button`
  z-index: 99;
  position: absolute;
  top: 1.6rem;
  right: 2rem;
  & svg {
    color: ${(props) =>
      props.isFlipped ? "var(--color-primary)" : "var(--color-green)"};

    height: 3rem;
    width: 3rem;
  }
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
    padding: 1.6rem 2rem;

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

function Cellule({ finished }) {
  const [isFlipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped(!isFlipped);
  };
  return (
    <StyledCellule finished={finished}>
      <ModifyButton isFlipped={!isFlipped} onClick={handleFlip}>
        <IoSettingsOutline />
      </ModifyButton>

      {!isFlipped ? (
        <Front>
          <div>
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
            <button>Ajouter une illustration</button>
          </div>
          <div>
            <Title>Français : conjugaison</Title>
            <div
              style={{
                bottom: "1.6rem",
                left: "2.8rem",
              }}
            >
              <span>30</span>
              <CiUser />
            </div>
            <div
              style={{
                bottom: "1.6rem",
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
