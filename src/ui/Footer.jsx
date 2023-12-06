import styled from "styled-components";
import Heading from "./Heading";
import Logo from "./Logo";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  place-items: center;
  padding-bottom: 5rem;
`;
const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px dashed var(--color-green);
  padding-top: 4rem;
  font-size: 1.4rem;
  color: var(--color-grey-300);
`;
const StyledFooter = styled.footer`
  padding: 6.4rem 4rem;
  /* display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  place-items: center; */
  /* row-gap: 4rem; */
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    & li {
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--color-grey-300);
    }
  }
`;

const ContactCol = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & svg {
    color: var(--color-green);
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    & li {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

const LogoCol = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
`;

const FooterNav = styled.div`
  & ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterTop>
        <LogoCol>
          <Heading as="h4">Enki </Heading>
          <Logo />
        </LogoCol>
        <ContactCol>
          <Heading as="h4">Contact Info</Heading>
          <ul>
            <li>
              <FaLocationDot />
            </li>
            <li>
              <FaPhoneAlt />
              <span>+32 495 10 00 37</span>
            </li>
            <li>
              <IoMdMail />
              <span>alex.hemelaer@outlook.be</span>
            </li>
          </ul>
        </ContactCol>
        <StyledNav>
          <Heading as="h4">Explore </Heading>{" "}
          <ul>
            <li>A propos de nous </li>
            <li>News et Mise à jour</li>
            <li>FAQ</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </StyledNav>
        <StyledNav>
          <Heading as="h4">Useful Links </Heading>{" "}
          <ul>
            <li>Nous contacter</li>
            <li>Travailler avec Nous ?</li>
            <li>Guide de Création</li>
            <li>Tableaux de bord</li>
            <li>Press Kit</li>
          </ul>
        </StyledNav>
      </FooterTop>
      <FooterBottom>
        <p>Copyright © 2022 Enki_corp. All Right Reserved.</p>

        <FooterNav>
          <ul>
            <li>Home</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Cookie Policy</li>
          </ul>
        </FooterNav>
      </FooterBottom>
    </StyledFooter>
  );
}

export default Footer;
