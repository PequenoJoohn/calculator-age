import { IconArrow } from "./iconArrow";
import { Container } from "./styles";

interface IAction {
  handleAction: () => void;
}

export const Action = ({ handleAction }: IAction) => {
  return (
    <Container>
      <button onClick={handleAction}>
        <IconArrow width={46} height={44} />
      </button>
    </Container>
  );
};
