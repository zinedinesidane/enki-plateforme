import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Search from "./Search";
import UserAvatar from "./UserAvatar";
import SwitchLanguage from "./SwitchLanguage";

const StyledHeader = styled.header`
  display: flex;
  height: 8rem;
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 0 4.8rem;
  background-color: var(--color-grey-50);
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo text={true} />
      <MainNav />
      <Search />
      <UserAvatar />
      <SwitchLanguage />
    </StyledHeader>
  );
}

export default Header;
