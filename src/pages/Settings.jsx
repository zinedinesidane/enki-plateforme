import styled from "styled-components";
import Heading from "../ui/Heading";
import SettingsNav from "../ui/SettingsNav";
import { Outlet } from "react-router-dom";

const StyledSettings = styled.div`
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

const SettingsLayout = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
`;

const SettingsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;

  & h4 {
    margin: 3rem 0;
  }
  & > span {
    font-size: 2rem;
    margin-bottom: 3rem;
    align-self: center;
  }
`;

function Settings() {
  return (
    <StyledSettings>
      <div>
        <Heading as="h2">Paramètres </Heading>
        <p>Modifiez vos informations personelles</p>
      </div>

      <SettingsLayout>
        <SettingsNav />
        <SettingsContent>
          <Outlet />
        </SettingsContent>
      </SettingsLayout>
    </StyledSettings>
  );
}

export default Settings;
