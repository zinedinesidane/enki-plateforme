import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding-right: 4.8rem;
  right: calc(-1 * ((100vw - 1200px) / 2) + 0.9rem);
  background-color: var(--color-grey-100);
`;

const FilterButton = styled.button`
  font-size: 1.6rem;
  text-transform: uppercase;
  border: none;
  background: none;
  color: var(--color-grey-300);
  padding: 1rem 2.4rem;

  font-weight: 500;
  ${(props) =>
    props.active === "true" &&
    css`
      font-weight: 700;
      background-color: var(--color-primary);
      color: var(--color-grey-0);
    `}
`;
function Filter() {
  return (
    <StyledFilter>
      <FilterButton active="true">Tous</FilterButton>
      <FilterButton>Popularité</FilterButton>
      <FilterButton>Alphabétique</FilterButton>
      <FilterButton>Tags</FilterButton>
    </StyledFilter>
  );
}

export default Filter;
