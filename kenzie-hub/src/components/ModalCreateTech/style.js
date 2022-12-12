import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;

  background-color: #12121480;
`;

export const StyledClose = styled(MdClose)`
  position: absolute;
  color: var(--color-grey-1);
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-2);
  border-radius: var(--radius);

  min-width: 300px;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    border-radius: 6px 6px 0 0;

    position: relative;

    background-color: var(--color-grey-2);
    h4 {
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;

    width: 100%;
    background-color: var(--color-grey-3);

    select {
      border: 1px solid transparent;
      background-color: var(--color-grey-2);
      color: var(--color-grey-0);
      border-radius: 4px;
      font: var(--font-title-3);

      width: 100%;
      padding: 10px 16px;

      ::placeholder {
      }
      :focus {
        color: var(--color-grey-0);
        border: 1px solid var(--color-grey-0);
        background-color: var(--color-grey-2);
      }
    }
  }
`;
