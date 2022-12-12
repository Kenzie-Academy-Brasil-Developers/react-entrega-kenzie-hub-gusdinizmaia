import styled from "styled-components";

export const StyledInput = styled.input`
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
`;

export const StyledLabel = styled.label`
  label {
    font: var(--font-headline);
  }
`;
