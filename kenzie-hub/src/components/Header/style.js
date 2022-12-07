import styled from "styled-components";

export const HeaderBase = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ form }) =>
    form === "login" ? "center" : "space-between"};

  height: 80px;
  width: 100%;

  background-color: var(--color-black);

  div {
    h1 {
      color: var(--color-primary-2);
      font: var(--font-title-1);
    }
  }
  nav {
    a,
    button {
      cursor: pointer;
    }
  }
`;
