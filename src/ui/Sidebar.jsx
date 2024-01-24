import styled from "styled-components";
import Logo from "../ui/Logo";
import { NavLink, useLocation } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

import { MdMiscellaneousServices } from "react-icons/md";
import { TbBinaryTree } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineStorefront } from "react-icons/md";

const StyledSidebar = styled.aside`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-100);

  & > a {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-grey);
  }
`;

const StyledNavLink = styled(NavLink)`
  &:active,
  &.active:link,
  &.active:visited {
    /* background: yellow; */
  }
`;

const StyledNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding-top: 2rem;
  height: 100%;
  margin-top: 2rem;

  & li {
    width: 100%;
    text-align: center;
    padding: 1rem;
    position: relative;

    &:nth-child(3) {
      & svg {
        transform: rotateX(180deg);
      }
    }

    &:has(a.active) {
      & svg {
        color: #000;
      }
      &::after {
        content: "";

        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;
        border-right: 17px solid white;

        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    &:last-child {
      margin-top: auto;
    }
    & a svg {
      color: var(--color-grey-200);

      height: 2.8rem;
      width: 2.8rem;
    }
  }
`;

function Sidebar() {
  const location = useLocation();

  const isActiveLink = location.pathname.startsWith("/parametres");
  return (
    <StyledSidebar>
      <StyledNavLink to="/">
        <Logo />
      </StyledNavLink>
      <StyledNav>
        <li>
          <StyledNavLink to="/profil">
            <FiUser />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cellules">
            <TbBinaryTree />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/units">
            <MdMiscellaneousServices />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/votre-salle">
            <FaChalkboardTeacher />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/marketplace">
            <MdOutlineStorefront />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            to="/parametres/informations-personnelles"
            className={isActiveLink ? "active" : ""}
          >
            <IoSettingsOutline />
          </StyledNavLink>
        </li>
      </StyledNav>
    </StyledSidebar>
  );
}

export default Sidebar;
