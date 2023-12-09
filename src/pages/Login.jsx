import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoIosHelpCircle } from "react-icons/io";
import { BiSolidHide } from "react-icons/bi";

const LoginLayout = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1.7fr;
  place-items: center;
  min-height: 100vh;
`;

const Left = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 10px solid var(--color-green);

  & > img {
    width: 35rem;
    height: auto;
  }
`;
const Right = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  background-color: var(--color-grey-100);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 10px solid var(--color-orange);
  padding: 2rem 0;
  & > div:last-child {
    font-size: 1.6rem;
    color: var(--color-primary-900);
    line-height: 28px;
    & a {
      color: var(--color-primary-500);
      font-weight: 500;
    }
  }
`;

const Bottom = styled.div`
  grid-column: span 2;

  & ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    color: #666;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;
const LoginForm = styled.form`
  display: flex;
  padding: 3.2rem;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #fbfbfb;
  margin: 2rem 0;
  border-radius: 12px;

  & > div:first-child {
    margin-bottom: 1.5rem;
  }
  & > a {
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration-line: underline;
    color: #111;
    margin-top: 3rem;
  }
  & > button {
    align-self: end;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #333;
  & > label {
    color: #666;
  }
  & > input {
    box-shadow: var(--shadow-sm);
    border-radius: 6px;
    border: 1px solid rgba(102, 102, 102, 0.35);
    padding: 0.8rem 1.2rem;
  }

  & button {
    background: none;
    border: none;
    display: flex;
    margin-left: auto;
    margin-right: 1rem;
    align-items: center;
    gap: 0.7rem;
    font-size: 1.4rem;
    color: #666;
    & svg {
      height: 2rem;
      width: 2rem;
    }
  }
  & > p {
    font-size: 1.2rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    & label {
      color: #666;
      font-size: 1.6rem;
    }

    & a {
      display: flex;
      align-items: center;
      justify-content: center;
      & svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }
`;
function Login() {
  return (
    <LoginLayout>
      <Left>
        <Logo />
      </Left>
      <Right>
        <Heading as="h2">Se Connecter</Heading>

        <LoginForm>
          <div>*Champs requis</div>
          <Group>
            <label htmlFor="email">*Adress mail</label>
            <input style={{ width: "40rem" }} id="email" type="text" />
          </Group>
          <Group>
            <div>
              <label htmlFor="password">*Mot de passe </label>
              <button>
                <BiSolidHide />
                <span>Hide</span>
              </button>
            </div>
            <input style={{ width: "40rem" }} id="password" type="password" />
            <div>
              <input id="rester-connecter" type="checkbox" />
              <label htmlFor="rester-connecter">Rester connecté ?</label>
              <NavLink>
                <IoIosHelpCircle />
              </NavLink>
            </div>
          </Group>
          <NavLink>Mot de passe oublié?</NavLink>
          <button disabled={true}> se connecter</button>
        </LoginForm>
        <div>
          <span>Pas encore de compte ?</span>
          <NavLink to="/register"> S'inscrire</NavLink>
        </div>
      </Right>

      {/* <Bottom>
        <ul>
          <li>
            <NavLink>News et mise à jour</NavLink>
          </li>
          <li>
            <NavLink>FAQ</NavLink>
          </li>
          <li>
            <NavLink>Terms of Service</NavLink>
          </li>
          <li>
            <NavLink>Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink>Cookie Policy</NavLink>
          </li>
          <li>
            <NavLink>Press Kit</NavLink>
          </li>
          <li>
            <NavLink>Envoyer un feedback</NavLink>
          </li>
        </ul>
      </Bottom> */}
    </LoginLayout>
  );
}

export default Login;
