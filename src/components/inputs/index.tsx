import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Container } from "./styles";

interface ErrorType {
  message: string;
  active: boolean;
}

interface IInputs {
  year: Dispatch<SetStateAction<string>>;
  month: Dispatch<SetStateAction<string>>;
  day: Dispatch<SetStateAction<string>>;
  yearError: ErrorType;
  monthError: ErrorType;
  dayError: ErrorType;
}

export const Inputs = ({
  year,
  month,
  day,
  yearError,
  monthError,
  dayError,
}: IInputs) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    e.target.value = numericValue;
  };

  return (
    <Container>
      <div>
        <label htmlFor="day">day</label>
        <input
          type="text"
          id="day"
          placeholder="DD"
          required
          onInput={handleInput}
          inputMode="numeric"
          maxLength={2}
          onChange={(e: ChangeEvent<HTMLInputElement>) => day(e.target.value)}
        />
        {dayError.active && <p>{dayError.message}</p>}
      </div>
      <div>
        <label htmlFor="month">month</label>
        <input
          type="text"
          id="month"
          placeholder="MM"
          required
          onInput={handleInput}
          inputMode="numeric"
          maxLength={2}
          minLength={1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => month(e.target.value)}
        />
        {monthError.active && <p>{monthError.message}</p>}
      </div>
      <div>
        <label htmlFor="year">year</label>
        <input
          type="text"
          id="year"
          placeholder="YYYY"
          required
          onInput={handleInput}
          inputMode="numeric"
          maxLength={4}
          minLength={4}
          onChange={(e: ChangeEvent<HTMLInputElement>) => year(e.target.value)}
        />
        {yearError.active && <p>{yearError.message}</p>}
      </div>
    </Container>
  );
};
