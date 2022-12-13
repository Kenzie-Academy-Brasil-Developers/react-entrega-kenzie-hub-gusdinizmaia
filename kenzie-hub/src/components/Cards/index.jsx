import { StyledCard, StyledDelete } from "./style";
import { ApiTechsContext } from "../../contexts/ApiTechsContext";
import { useContext } from "react";

export function Cards({
  name,
  status,
  deleteItem,
  id,
  modalEdit,
  editItem,
  elem,
}) {
  const { setId } = useContext(ApiTechsContext);

  return (
    <StyledCard
      onClick={(e) => {
        modalEdit("edit");
        setId(id);
        editItem(elem);
      }}
    >
      <h3>{name}</h3>
      <p>{status}</p>
      <StyledDelete onClick={(e) => deleteItem(id, e)} />
    </StyledCard>
  );
}
