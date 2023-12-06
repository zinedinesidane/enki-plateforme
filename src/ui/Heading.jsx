import { css, styled } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 6.4rem;
      font-size: 5rem;
      font-weight: 500;
      line-height: 1.2;
      max-width: 40rem;
      color: var(--color-primary-900);
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3.2rem;
      font-weight: 600;
      color: var(--color-primary-900);
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3.2rem;
      font-weight: 600;
      color: var(--color-primary-700);
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      /* font-size: 2rem; */
      font-size: 2.5rem;
      font-weight: 600;
    `}
`;

export default Heading;
