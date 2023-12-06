import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";

const StyledMaj = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 38rem;
  gap: 1.5rem;
  background-color: var(--color-grey-0);

  & > div:first-child {
    position: relative;

    & img {
      display: block;
    }

    & button {
      position: absolute;
      bottom: 2rem;
      left: 2.5rem;
    }
  }
`;

const MajInfo = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.6rem;
  color: var(--color-grey-300);
  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

function Maj({ img }) {
  return (
    <StyledMaj>
      <div>
        <img src={img} alt="maj img" />
        <Button variation="round">Catégorie</Button>
      </div>
      <MajInfo>
        <div>
          <CiUser />
          <span>Jack Wilson</span>
        </div>
        <div>
          <CiCalendar />
          <span>06 Nov, 2022 </span>
        </div>
      </MajInfo>
      <Heading as="h4">Titre de la maj</Heading>
    </StyledMaj>
  );
}

export default Maj;
