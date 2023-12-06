import styled from "styled-components";

const Img = styled.img`
  height: 7.2rem;
  /* width: auto; */
  width: 14rem;
`;

function Logo() {
  return <Img src="./imgs/enki-logo.png" alt="Enki logo" />;
}

export default Logo;
