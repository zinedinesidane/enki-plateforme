import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  gap: 1.2rem;
  /* margin-left: 6rem; */
`;

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

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-green);
      border-radius: var(--border-radius-sm);
    }

    & svg {
      width: 2rem;
      height: 2rem;
      color: var(--color-primary-900);
      transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
      color: var(--color-green);
    }
  }
`;

function MainNav() {
  return (
    <NavList>
      <li>
        <StyledNavLink to="home">
          <span>Home</span>
          <HiChevronDown />
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="unités">
          <span>Unités</span>
          <HiChevronDown />
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="cellules">
          <span>Cellules</span>
          <HiChevronDown />
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="tableaux-de-bord">
          <span>Tableaux de bord</span>
          <HiChevronDown />
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="contact">
          <span>Contact</span>
          <HiChevronDown />
        </StyledNavLink>
      </li>
    </NavList>
  );
}

export default MainNav;
