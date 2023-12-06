import { css, styled } from "styled-components";

const Row = styled.div`
  ${(props) =>
    props.type === "horizontal--full-width" &&
    css`
      display: flex;
      gap: 16rem;
      align-items: center;
      justify-content: center;

      /* & > div:has(:not(img)) {
        max-width: 50rem;
        display: flex;
        flex-direction: column;

        padding: 2rem 0;

        & p {
          margin-top: 1.5rem;
        }

        & div:last-child {
          display: flex;
          align-items: center;

          gap: 3rem;
        }
      } */
    `}
  ${(props) =>
    props.type === "horizontal--center" &&
    css`
      display: flex;
      gap: 8rem;

      & > div:has(:not(img)) {
        /* max-width: 34rem; */
        display: flex;
        flex-direction: column;
        /* padding: 2rem 0; */

        & p {
          margin-top: 2rem;
        }

        /* & div:last-child {
          display: flex;
          align-items: center;
          
          gap: 3rem;
        } */
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      display: flex;

      flex-direction: column;
      /* max-width: 33rem; */
      gap: 1.6rem;
    `};
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
