import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import { Header } from "../../components/Header";

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;

  min-height: calc(100vh - 80px);

  section {
    padding: 40px 15%;
    width: 100%;
    border-top: solid 1.5px var(--color-grey-4);
  }

  .container__user {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font: var(--font-title-2);
    }

    h3 {
      font: var(--font-headline);
      color: var(--color-grey-1);
    }
  }

  .container__techs {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > div {
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: var(--font-title-3);
      }
    }
  }
`;

export const StyledAdd = styled(MdAdd)`
  font-size: 1rem;
  cursor: pointer;
`;
export const StyledHeader = styled(Header)`
  padding: 0 15%;

  position: fixed;
  top: 0;
`;

export const StyledListTechs = styled.ul`
  padding: 25px;
  border-radius: var(--radius);
  background-color: var(--color-grey-3);
`;
