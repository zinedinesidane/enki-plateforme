import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

import Row from "./Row";
import ContentGrid from "./ContentGrid";

const StyledAvisSection = styled(ContentGrid)`
  background-color: var(--color-grey-100);
  padding: 8rem 5.4rem 6rem 5.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div > h3 {
    margin-bottom: -8rem;
    align-self: end;
    margin-right: 12rem;
  }
  & > div > button {
    margin-right: 8rem;
    margin-top: -3rem;
    align-self: end;
  }
`;

const Slider = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  /* margin-bottom: auto; */
  justify-self: start;
  align-self: start;

  & svg {
    height: 2.2rem;
    width: 2.2rem;

    color: var(--color-orange);
  }
`;
const Testimonial = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 10rem;
`;

const TestimonialText = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  max-width: 45rem;
  gap: 3.5rem;

  & blockquote {
    font-style: italic;
    color: var(--color-grey-300);
  }

  & span {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-primary-700);
    margin-left: 1rem;
  }
`;

const Dots = styled.div`
  margin-left: 4.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  left: 50%;
  top: 68%;
  transform: translateX(-50%);

  & button {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: none;
    background-color: var(--color-green-light);

    &:nth-child(2) {
      background-color: var(--color-green);
      width: 2rem;
      border-radius: 10px;
    }
  }
`;

const TestimonialAuthor = styled.div`
  position: relative;

  & svg {
    position: absolute;
    height: 3rem;
    width: 3rem;
    bottom: -1.2rem;
    right: -0.5rem;
    color: var(--color-primary);
  }

  & div {
    padding: 4rem;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    &:nth-child(2) {
      outline: 3px solid var(--color-green);
      outline-offset: 4rem;
      clip-path: polygon(40% -50%, 100% -50%, 100% 50%, 0 50%);
    }
    &:nth-child(3) {
      outline: 3px solid var(--color-green);
      outline-offset: 4rem;
      clip-path: polygon(-13% 150%, 100% 150%, 40% 50%, 0% 50%);
    }
    &:nth-child(4) {
      outline: 3px solid var(--color-orange);
      outline-offset: 2rem;
      clip-path: polygon(90% 0, 150% 50%, 150% 100%, 90% 70%);
    }
    &:nth-child(5) {
      outline: 3px solid var(--color-orange);
      outline-offset: 2rem;
      clip-path: polygon(10% 25%, -50% 50%, -50% 100%, 35% 100%);
    }
  }
  & img {
    border-radius: 50%;
  }
`;

function AvisSection() {
  return (
    <StyledAvisSection>
      <Row>
        <Heading as="h3">Avis de la Communauté</Heading>
        <Slider>
          <Testimonial>
            <TestimonialAuthor>
              <img src="./imgs/testimonialImg.jpg" alt="testimonial author" />
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <FaQuoteLeft />
            </TestimonialAuthor>
            <TestimonialText>
              <Rating>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </Rating>
              <blockquote>
                J’utilise Enki afin d’aider certains de mes élèves de primaires
                qui ont un peu plus de mal. J’ai très rapidement vu des
                résultats.
              </blockquote>

              <span>Jenny Vanwil</span>
            </TestimonialText>
          </Testimonial>

          <Dots>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </Dots>
        </Slider>
        <Button size="Vlarge" variation="secondary">
          Donner un avis{" "}
        </Button>
      </Row>
    </StyledAvisSection>
  );
}

export default AvisSection;
