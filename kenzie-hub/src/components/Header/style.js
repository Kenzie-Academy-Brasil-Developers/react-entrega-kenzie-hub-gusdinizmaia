import styled from "styled-components";
import { StyledButton } from "../Button/style";
import { Link } from "react-router-dom";
import { Button } from "../Button";

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
    a {
      cursor: pointer;
    }
  }
`;

export const StyledLink = styled(Link)`
  font: var(--font-title-3);
  padding: 10px 18px;
  border-radius: var(--radius);
  color: var(--color-white);
  background-color: var(--color-grey-3);
`;
