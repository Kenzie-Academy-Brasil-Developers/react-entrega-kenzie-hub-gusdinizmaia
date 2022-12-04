import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font: var(--font-title-3);
  padding: 10px 18px;
  border-radius: var(--radius);

  color: var(--color-white);

  ${({ modelButton }) => {
    switch (modelButton) {
      case "grey-3":
        return css`
          background-color: var(--color-grey-3);
        `;

      case "primary":
        return css`
          color: var(--color-white);
          background-color: var(--color-primary-1);

          & :hover {
            background-color: var(--color-primary-2);
          }
        `;

      case "primary-negative":
        return css`
          background-color: var(--color-primary-negative);
        `;

      case "desability":
        return css`
          background-color: var(--color-grey-1);

          & :hover {
            background-color: var(--color-grey-2);
          }
        `;

      default:
        return "";
    }
  }}
`;
