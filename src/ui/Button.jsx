import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.6rem;
    /* font-size: 2rem; */
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    @media screen and (max-width: 43.75em) {
      padding: 1rem 1.4rem;
    }
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    @media screen and (max-width: 43.75em) {
      padding: 1rem 2rem;
    }
  `,
  Vlarge: css`
    font-size: 2rem;
    padding: 1rem 5rem;
    font-weight: 500;
    @media screen and (max-width: 43.75em) {
      padding: 1rem 2rem;
    }
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-0);
    background-color: var(--color-green);
    border-radius: 5px;

    &:hover {
      background-color: var(--color-green-light);
      color: var(--color-green);
    }
  `,
  secondary: css`
    color: var(--color-green);
    background: var(--color-grey-0);
    border: 1.5px solid var(--color-green);
    transition: all 0.3s;
    border-radius: 5px;

    &:hover {
      background-color: var(--color-green);
      color: var(--color-grey-0);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  round: css`
    color: var(--color-primary-700);
    background: var(--color-green-light);
    transition: all 0.3s;
    border-radius: 600px;
    padding: 0.5rem 2.1rem;
    &:hover {
      background-color: var(--color-green);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
