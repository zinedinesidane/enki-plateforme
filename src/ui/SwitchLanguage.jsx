import { HiChevronDown } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.ul``;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    color: var(--color-primary-900);
    font-size: 1.6rem;
    font-weight: 700;
    /* padding: 1.2rem 2.4rem; */
    transition: all 0.3s;

    &:hover {
      color: var(--color-green);
      border-radius: var(--border-radius-sm);
    }

    & svg {
      width: 2rem;
      height: 2rem;
      color: var(--color-primary-900);
      transition: all 0.3s;
    }

    &:hover svg {
      color: var(--color-green);
    }
  }
`;
function SwitchLanguage() {
  return (
    <Nav>
      <li>
        <StyledNavLink>
          <span>Français</span>
          <HiChevronDown />
        </StyledNavLink>
      </li>
    </Nav>
  );
}

export default SwitchLanguage;
