import styled from "styled-components";

const ContentGrid = styled.section`
  --padding-inline: ${(props) => props.paddingInline || "1rem"};
  --content-max-width: ${(props) => props.maxWidth || "900px"};
  --breakout-max-width: 1200px;

  --breakout-size: calc(
    (var(--breakout-max-width) - var(--content-max-width)) / 2
  );

  display: grid;
  grid-template-columns:
    [full-width-start]
    minmax(var(--padding-inline), 1fr)
    [breakout-start]
    minmax(0, var(--breakout-size))
    [content-start] min(
      100% - (var(--padding-inline) * 2),
      var(--content-max-width)
    )
    [content-end]
    minmax(0, var(--breakout-size))
    [breakout-end]
    minmax(var(--padding-inline), 1fr)
    [full-width-end];

  & > :not(.breakout, .full-width),
  .full-width > :not(.breakout, .full-width) {
    grid-column: content;
  }

  & > .breakout {
    grid-column: breakout;
  }

  & > .full-width {
    grid-column: full-width;

    display: grid;
    grid-template-columns: inherit;
  }
`;

export default ContentGrid;
