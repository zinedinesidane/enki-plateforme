import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const Main = styled.main`
  /* background-color: var(--color-green); */
  background-color: var(--color-grey-50);
  /* padding: 6.4rem 4.8rem 6.4rem; */
  /* padding: 0 0 6.4rem; */
`;
function AppLayout() {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
