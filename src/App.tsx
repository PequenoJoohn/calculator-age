import { useState } from "react";
import { Action } from "./components/action";
import { Calculator } from "./components/calculator";
import { DaysOfLife } from "./components/daysOfLife";
import { Inputs } from "./components/inputs";
import { Container } from "./styles";

function App() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [yearError, setYearError] = useState({
    message: "",
    active: false,
  });
  const [monthError, setMonthError] = useState({ message: "", active: false });
  const [dayError, setDayError] = useState({ message: "", active: false });

  const handleCalculateAge = () => {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const lastDayOfPreviousMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      days += lastDayOfPreviousMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const birthYear = parseInt(year);
    const birthMonth = parseInt(month);
    const birthDay = parseInt(day);

    if (isNaN(birthYear)) {
      return setYearError({
        active: true,
        message: "Por favor, insira valores numéricos válidos.",
      });
    } else if (isNaN(birthMonth)) {
      return setMonthError({
        active: true,
        message: "Por favor, insira valores numéricos válidos.",
      });
    } else if (isNaN(birthDay)) {
      return setDayError({
        active: true,
        message: "Por favor, insira valores numéricos válidos.",
      });
    }

    const maxDaysInMonth = new Date(birthYear, birthMonth, 0).getDate();
    if (birthDay < 1 || birthDay > maxDaysInMonth) {
      setDayError({
        active: true,
        message: `Dia deve estar entre 1 e ${maxDaysInMonth}.`,
      });
      return;
    }

    setDayError({ message: "", active: false });
    setMonthError({ message: "", active: false });
    setYearError({ message: "", active: false });

    setAge({ years, months, days });
  };

  return (
    <Container>
      <Calculator>
        <Inputs
          year={setYear}
          month={setMonth}
          day={setDay}
          yearError={yearError}
          monthError={monthError}
          dayError={dayError}
        />
        <Action handleAction={handleCalculateAge} />
        <DaysOfLife age={age} />
      </Calculator>
    </Container>
  );
}

export default App;
