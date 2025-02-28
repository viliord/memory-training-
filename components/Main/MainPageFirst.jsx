import PropTypes from "prop-types";
import { RadioGroup } from "../UI/Form/RadioGroup/RadioGroup";

export const MainPageFirst = ({ value, chengeValue }) => {
  return (
    <main>
      <img src="/free-icon-student-4472533.png" alt="student" />

      <h1>тренировка памяти</h1>
      <RadioGroup value={value} chengeValue={chengeValue} />
    </main>
  );
};

MainPageFirst.propTypes = {
  value: PropTypes.number,
  chengeValue: PropTypes.func,
};
