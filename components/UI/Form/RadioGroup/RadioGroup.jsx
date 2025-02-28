import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { Radio } from "../Radio/Radio";

export const RadioGroup = ({ value, chengeValue }) => {
  return (
    <div className={styles.switch_contents}>
      <Radio
        id="easy"
        type="radio"
        name="layout"
        checked={value == "2" ? true : false}
        value="2"
        htmlFor="easy"
        onChange={chengeValue}
      >
        Легко
      </Radio>
      <Radio
        id="midle"
        type="radio"
        name="layout"
        checked={value == "4" ? true : false}
        value="4"
        htmlFor="midle"
        onChange={chengeValue}
      >
        Средне
      </Radio>
      <Radio
        id="hard"
        type="radio"
        name="layout"
        checked={value == "6" ? true : false}
        value="6"
        htmlFor="hard"
        onChange={chengeValue}
      >
        Сложно
      </Radio>
    </div>
  );
};
RadioGroup.propTypes = {
  value: PropTypes.number,
  chengeValue: PropTypes.func,
};
