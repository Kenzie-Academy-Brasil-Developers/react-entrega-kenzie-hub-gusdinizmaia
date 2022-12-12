import { StyledForm } from "../ModalCreateTech/style";
import styled from "styled-components";

export const StyledFormEdit = styled(StyledForm)`
  > form {
    min-width: 300px;
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;
    }
  }
`;
