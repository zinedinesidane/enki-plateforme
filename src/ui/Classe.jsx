import styled from "styled-components";
import { ModifyButton, Ressource } from "./Ressource";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const Front = styled.div`
  position: relative;
  height: 100%;

  & > div {
    display: flex;
    justify-content: center;
    & span {
      font-family: Jost;
      font-size: 2rem;
    }
    &:first-child {
      height: 52%;
      align-items: flex-end;
      & span {
        color: #000;
        font-weight: 700;
      }
    }
    &:nth-child(2) {
      height: 48%;
      background-color: var(--color-orange);
      & span {
        color: #fff;
        font-weight: 400;
      }
    }
    &:last-child {
      position: absolute;
      bottom: 0.8rem;
      left: 2.8rem;
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

function Classe() {
  const [isFlipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped(!isFlipped);
  };
  return (
    <Ressource height="22rem" width="24rem">
      <ModifyButton isFlipped={!isFlipped} onClick={handleFlip}>
        <IoSettingsOutline />
      </ModifyButton>{" "}
      <Front>
        <div>
          <span>Géograpie</span>
        </div>
        <div>
          <span>4ème C</span>
        </div>
        <div>
          <span>30</span>
          <CiUser />
        </div>
      </Front>
    </Ressource>
  );
}

export default Classe;
