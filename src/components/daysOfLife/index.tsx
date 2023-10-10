import { Container } from "./styles";

interface IDaysOfLife {
  age: {
    years: number;
    months: number;
    days: number;
  };
}

export const DaysOfLife = ({ age }: IDaysOfLife) => {
  return (
    <Container>
      <div>
        <p>
          {age.years === 0 ? <span>--</span> : <span>{age.years}</span>} years
        </p>
      </div>
      <div>
        <p>
          {age.years === 0 && age.months === 0 ? (
            <span>--</span>
          ) : (
            <span>{age.months}</span>
          )}{" "}
          months
        </p>
      </div>
      <div>
        <p>
          {age.years === 0 && age.months === 0 && age.days === 0 ? (
            <span>--</span>
          ) : (
            <span>{age.days}</span>
          )}{" "}
          days
        </p>
      </div>
    </Container>
  );
};
