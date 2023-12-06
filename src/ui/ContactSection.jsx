import styled, { css } from "styled-components";
import Heading from "./Heading";
import Row from "./Row";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const StyledContact = styled.section`
  padding: 4rem 5.4rem;
  background-color: white;
`;

const MediaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem 3rem;

  & button {
    /* grid-column: span 2; */
  }
`;

const SocialMedia = styled.button`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  display: flex;
  align-items: ${(props) => props.position || "center"};
  justify-content: center;
  border: none;
  background-color: ${(props) => props.background};
  transition: all 0.2s;
  &:hover {
    scale: 1.05;
  }

  ${(props) =>
    props.img &&
    css`
      background-image: linear-gradient(
        30deg,
        #4f5bd5,
        #962fbf,
        #d62976,
        #fa7e1e,
        #feda75
      );
    `}

  & svg {
    height: ${(props) => props.height || "60%"};
    width: ${(props) => props.height || "60%"};
    color: white;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
  color: white;
  max-width: 43rem;
  padding: 5rem 4rem;
  background-color: var(--color-primary-600);
  border-radius: 2rem;
  font-size: 2rem;

  & input {
    color: var(--color-grey-200);
    border-radius: 2rem;
    padding: 1.2rem 2rem;
    background: white;
    outline: none;
    border: none;
    /* &:focus {
      outline: none;
    } */
  }
  & button {
    font-weight: 500;
    padding: 1.2rem 2rem;
    border-radius: 2rem;
    border: none;
    background: white;
    color: var(--color-primary-600);
  }
`;

function ContactSection() {
  return (
    <StyledContact>
      <Heading style={{ marginLeft: "6rem" }} as="h2">
        Suivez-nous sur les Réseaux !
      </Heading>

      <Row type="horizontal--full-width">
        <MediaWrapper>
          <SocialMedia
            height="75%"
            background="var(--color-primary-600)"
            position="end"
          >
            <FaFacebookF />
          </SocialMedia>
          <SocialMedia img="true">
            <FaInstagram />
          </SocialMedia>
          <SocialMedia background="#1DA1F2">
            <FaTwitter />
          </SocialMedia>

          <SocialMedia background="#151515">
            <FaTiktok />
          </SocialMedia>
          <SocialMedia
            style={{
              gridColumn: "2",
              marginLeft: "-3rem",
            }}
            background="#FF0000"
          >
            <FaYoutube />
          </SocialMedia>
          <SocialMedia
            style={{
              gridColumn: "3",
              marginLeft: "3rem",
            }}
            background="#0A66C2"
          >
            <FaLinkedinIn />
          </SocialMedia>
        </MediaWrapper>
        <ContactForm action="#">
          <div>
            <Heading
              style={{
                marginBottom: "2rem",
              }}
              as="h4"
            >
              S’inscrire à notre newsletter{" "}
            </Heading>
            <p>
              Recevez les dernières infos, les offres et les dernières mises à
              jour par mail.
            </p>
          </div>
          <input type="text" placeholder="Votre email" />
          <button>S'inscrire</button>
        </ContactForm>
      </Row>
    </StyledContact>
  );
}

export default ContactSection;
