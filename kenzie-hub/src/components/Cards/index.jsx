import { MdDelete } from "react-icons/md";
import { StyledCard, StyledDelete } from "./style";
export function Cards({ name, status }) {
  return (
    <StyledCard>
      <h3>{name}</h3>
      <p>{status}</p>
      <StyledDelete />
    </StyledCard>
  );
}
