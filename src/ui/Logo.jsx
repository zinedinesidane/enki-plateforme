import styled from "styled-components";

const Img = styled.img`
  height: ${(props) => (props.text ? "7.2rem" : "5.6rem")};
  width: ${(props) => (props.text ? "14rem" : "auto")};
`;

function Logo({ text }) {
  const logo = text ? "/imgs/enki-logo-text.png" : "/imgs/enki-logo.png";
  return <Img text={text} src={logo} alt="Enki logo" />;
}

export default Logo;
