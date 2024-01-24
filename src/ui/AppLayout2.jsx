import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 9.6rem 1fr;
`;
const Main = styled.main`
  padding: 4rem 6rem 6.4rem;
  height: 100dvh;
  overflow-y: auto;
`;

function AppLayout2() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout2;
