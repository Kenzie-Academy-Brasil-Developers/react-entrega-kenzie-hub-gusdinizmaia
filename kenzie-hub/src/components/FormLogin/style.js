import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  width: 100%;

  padding: 30px;
  border-radius: var(--radius);

  background-color: var(--color-grey-3);
  color: var(--color-grey-0);

  h2 {
    font: var(--font-title-2);
    align-self: center;
    padding-bottom: 10px;
  }

  select {
    color: var(--color-grey-1);
  }

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

  button,
  a {
    width: 100%;
  }

  span {
    color: var(--color-grey-1);
    font: var(--font-headline);
    margin: 10px 0;
    align-self: center;
  }
`;
