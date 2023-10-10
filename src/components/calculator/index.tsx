import { ReactNode } from "react";
import { Container } from "./styles";

interface ICalculator {
  children: ReactNode;
}

export const Calculator = ({ children }: ICalculator) => {
  return <Container>{children}</Container>;
};
