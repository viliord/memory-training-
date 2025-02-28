import PropTypes from "prop-types";
import { Tag } from "../UI/Tag/Tag";

export const MainPageThird = ({
  finish,
  seconds,
  value,
  textInput,
  setTextInput,
  focusClick,
}) => {
  return (
    <main style={{ display: `${!finish && seconds == 0 ? "" : "none"}` }}>
      <img src="/free-icon-student-4472533.png" alt="student" />
      <Tag tag="h4">{`напишите ${value} ${
        value < 5 ? "слова" : "слов"
      } через запятую`}</Tag>
      <Tag className="text-field">
        <input
          className="text-field__input"
          type="text"
          name="words"
          id="words"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={focusClick}
        />
      </Tag>
    </main>
  );
};

MainPageThird.propTypes = {
  value: PropTypes.number,
  finish: PropTypes.bool,
  textInput: PropTypes.string,
  setTextInput: PropTypes.func,
  focusClick: PropTypes.func,
  seconds: PropTypes.number,
};
