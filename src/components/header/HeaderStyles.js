import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--navy);
  box-shadow: 0 10px 30px -10px var(--navy-shadow);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

.logo {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: var(--blue);
    width: 42px;
    height: 42px;

    &:hover,
    &:focus {
      svg {
        fill: var(--blue-tint);
      }
    }

    svg {
      fill: none;
      transition: var(--transition);
      user-select: none;
    }
  }
}
`;

export const StyledLinks = styled.div`
display: flex;
align-items: center;

@media (max-width: 768px) {
  display: none;
}

ol {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin: 0 5px;
    position: relative;
    counter-increment: item 1;
    font-size: var(--fz-xs);

    a {
      padding: 10px;

      &:before {
        content: '0' counter(item) '.';
        margin-right: 5px;
        color: var(--blue);
        font-size: var(--fz-xxs);
        text-align: right;
      }
    }
  }
}

.resume-button {
  color: var(--blue);
  background-color: transparent;
  border: 1px solid var(--blue);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  &:hover,
  &:focus,
  &:active {
    background-color: var(--blue-tint);
  }
  &:after {
    display: none !important;
  }
}
`;