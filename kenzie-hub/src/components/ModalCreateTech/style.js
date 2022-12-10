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

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;

    position: relative;

    background-color: var(--color-grey-3);
    h4 {
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;

    width: 100%;
  }
`;
