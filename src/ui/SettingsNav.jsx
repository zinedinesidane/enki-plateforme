import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaLock } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { HiMiniCreditCard } from "react-icons/hi2";
import { BsInfoLg } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const StyledNav = styled.ul`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0cbff;
  padding-right: 2rem;
  gap: 0.1rem;
  height: 100%;

  & li {
    color: #666;
    font-family: Inter;
    font-weight: 400;
    line-height: normal;
  }

  & a {
    &:visited,
    &:link {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      border-radius: 32px;
      padding: 1.5rem 2rem;
    }

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      background: #d0cbff;
    }

    & svg {
      height: 2.8rem;
      width: 2.8rem;
    }
  }
`;

function SettingsNav() {
  return (
    <StyledNav>
      <li>
        <NavLink to="/parametres/informations-personnelles">
          <FaUser />
          <span>Informations personnelles</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/parametres/profil">
          <FaCircleUser />
          <span>Profil créateur </span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/parametres/données-et-confidentialité">
          <FaKey />
          <span>Données et confidentialité</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/parametres/sécurité">
          <FaLock />
          <span>Sécurité</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/parametres/paiement">
          <HiMiniCreditCard />
          <span>Facture et mode de payement</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/parametres/a-propos">
          <BsInfoLg />
          <span>A propos</span>
        </NavLink>
      </li>
    </StyledNav>
  );
}

export default SettingsNav;
