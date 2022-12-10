import { MdDelete } from "react-icons/md";
import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  position: relative;

  padding: 13px 18px;
  border-radius: var(--radius);
  background-color: var(--color-grey-4);
  :hover {
    background-color: var(--color-grey-2);
  }
  > h3 {
    font-size: var(--font-headline-bold);
    color: var(--color-white);
  }
  > p {
    font-size: var(--font-headline);
    color: var(--color-grey-0);
    position: relative;
    right: 40px;
  }
`;

export const StyledDelete = styled(MdDelete)`
  position: absolute;
  right: 18px;
  top: 13px;

  color: var(--color-white);
  font-size: 1.125rem;
  cursor: pointer;
`;
