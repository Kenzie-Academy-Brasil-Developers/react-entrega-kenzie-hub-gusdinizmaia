import { StyledCard, StyledDelete } from "./style";
export function Cards({
  name,
  status,
  callback,
  id,
  editTech,
  callbackEdit,
  elem,
}) {
  return (
    <StyledCard
      onClick={(e) => {
        editTech("edit");
        callbackEdit(elem);
      }}
    >
      <h3>{name}</h3>
      <p>{status}</p>
      <StyledDelete onClick={(e) => callback(id)} />
    </StyledCard>
  );
}
