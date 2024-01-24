import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import styled from "styled-components";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import { Group } from "./Login";
import { BiSolidHide } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Phone = styled(PhoneInput)`
  border-radius: 6px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  padding: 0 1.2rem;
  padding: 1rem 1.2rem;

  &:focus-within {
    outline: 2px solid var(--color-grey-900);
    outline-offset: -1px;
  }
  & input {
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
const RegisterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  background-color: var(--color-grey-100);
  min-height: 100vh;
  padding: 4rem;
`;

const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    padding: 4rem;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    /* top: 0;
    left: 0; */
    z-index: 1;

    &:nth-child(1) {
      bottom: -11rem;
      right: -11rem;
      transform: rotate(-45deg);
      outline: 3px solid var(--color-orange);
      outline-offset: 4rem;
      clip-path: polygon(20% 150%, 100% 150%, 40% 50%, 0% 50%);
    }
    &:nth-child(2) {
      top: -10rem;
      left: -10rem;
      outline: 3px solid var(--color-black);
      outline-offset: 4rem;
      clip-path: polygon(45% -50%, 70% -50%, 100% 50%, 0 50%);
      transform: rotate(-35deg);
    }
  }
  & p {
    max-width: 30rem;
    margin-top: 4rem;
    font-size: 2.2rem;
    text-align: center;
  }

  & img {
    margin-top: 6rem;
    width: 25rem;
    height: auto;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RegisterForm = styled.form`
  border-radius: 12px;
  background-color: var(--color-grey-50);
  background-color: var(--color-grey-100);

  background-color: white;
  padding: 3.2rem 6rem;
  max-width: 58rem;
  background-color: #fbfbfb;

  border: 1px solid rgba(102, 102, 102, 0.3);

  & input {
    background-color: #fbfbfb;

    box-shadow: var(--shadow-sm);
  }
  & > div:first-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem 1.6rem;
    margin-top: 4rem;
  }
  & > span {
    font-size: 2rem;
    color: #333;
    font-weight: 500;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & span {
      color: #333;
    }
    & a {
      color: var(--color-primary-500);
    }
  }
`;

const Terms = styled.div`
  font-size: 1.4rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 0 5rem 0;
  & div {
    display: flex;
    align-items: flex-start;
    gap: 0.7rem;

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20.3px;
    }
  }
`;

function Register() {
  const [value, setValue] = useState();

  return (
    <RegisterLayout>
      <Left>
        <div></div>
        <div></div>
        <Heading style={{ fontWeight: "700", fontSize: "3.5rem" }} as="h2">
          Enseigne avec nous !
        </Heading>
        <p>
          Crée, partage et répond aux questions de tes élèves facilement et
          rapidement.
        </p>

        <Logo text={true} />
      </Left>

      <Right>
        <RegisterForm>
          <span>S’inscrire maintenant !</span>
          <div>
            <Group>
              <label htmlFor="prenom">*Prénom</label>
              <input id="prenom" type="text" />
            </Group>
            <Group>
              <label htmlFor="nom">*Nom</label>
              <input id="nom" type="text" />
            </Group>
            <Group style={{ gridColumn: "span 2" }}>
              <label htmlFor="email">*Adresse mail</label>
              <input id="email" type="email" />
            </Group>
            <Group style={{ gridColumn: "span 2" }}>
              <label htmlFor="num">*Numéro de téléphone</label>
              <Phone
                id="num"
                defaultCountry="BE"
                value={value}
                onChange={setValue}
              />
            </Group>
            <Group style={{ gridColumn: "span 2" }}>
              <div>
                <label htmlFor="password">*Mot de passe </label>
                <button>
                  <BiSolidHide />
                  <span>Hide</span>
                </button>
              </div>{" "}
              <input id="password" type="password" />
              <p>
                Utilisez au moins 8 charactères avec un mélange de lettres, de
                nombres & symboles
              </p>
            </Group>
          </div>
          <Terms>
            <div>
              <div>
                <input id="terms" type="checkbox" />
              </div>
              <label htmlFor="terms">
                En créant ce compte, j’accepte les{" "}
                <NavLink>Terms of use</NavLink> et <NavLink>Privacy</NavLink>
                Policy
              </label>
            </div>
            <div>
              <div>
                <input id="newsletter" type="checkbox" />
              </div>
              <label htmlFor="newsletter">
                En créant ce compte, je consens à recevoir des emails incluant
                les nouvelles fonctionalités, mises à jour, les évenement et les
                promotions marketing.{" "}
              </label>
            </div>
          </Terms>

          <div>
            <button disabled={true}>S'inscrire</button>
            <div>
              <span>Déjà un compte ?</span>

              <NavLink to="/login"> Se connecter</NavLink>
            </div>
          </div>
        </RegisterForm>
      </Right>
    </RegisterLayout>
  );
}

export default Register;
