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

  .container__undefined {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledHeader = styled(Header)`
  padding: 0 15%;

  position: fixed;
  top: 0;
`;
