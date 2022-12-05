import { StyledButton } from "./style";

export function Button({ model, text, callback, type, className }) {
  return (
    <StyledButton
      onClick={callback}
      className={className}
      type={type}
      modelButton={model}
    >
      {text}
    </StyledButton>
  );
}
