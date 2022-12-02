import styled from "styled-components";

export const LoginBase = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  padding: 25px 15px;
  border-radius: var(--radius);

  background-color: var(--color-grey-3);

  label {
    color: var(--color-grey-0);
  }

  input {
    color: var(--color-grey-0);
    border: var(--color-grey-0);
    background-color: var(--color-grey-2);
  }

  button {
    background-color: var(--color-primary-1);
    color: var(--color-grey-0);
  }
  span {
    color: var(--color-grey-1);
  }
`;
