import PropTypes from "prop-types";
import { List } from "../UI/List/List";
import { Tag } from "../UI/Tag/Tag";
import { WordsInCloud } from "../WordsInCloud/WordsInCloud";

export const MainPageSecond = ({
  seconds,
  wordCloud,
  minutesString,
  secondsString,
  arrayInputText,
}) => {
  return (
    <main style={{ display: `${seconds != 0 ? "" : "none"}` }}>
      <img src="/free-icon-student-4472533.png" alt="student" />
      <aside className="oblachko">
        <ul>
          <List className="oblachko_list1">
            <WordsInCloud
              wordCloud={wordCloud}
              arrayInputText={arrayInputText}
            />
          </List>
          <List className="oblachko_list2" />
          <List className="oblachko_list3" />
          <List className="oblachko_list4" />
        </ul>
        {/* <ul>
          <li className="oblachko_list1">
            {wordCloud.map((word) => (
              <p key={word}>{word}</p>
            ))}
          </li>
          <li className="oblachko_list2"></li>
          <li className="oblachko_list3"></li>
          <li className="oblachko_list4"></li>
        </ul> */}
      </aside>
      <Tag tag="h1">тренировка памяти</Tag>
      <Tag tag="h2">запомни слова</Tag>
      <Tag tag="h3" style={{ color: `${seconds < 4 ? "red" : ""}` }}>
        {minutesString}:{secondsString}
      </Tag>
    </main>
  );
};

MainPageSecond.propTypes = {
  wordCloud: PropTypes.array,
  minutesString: PropTypes.string,
  secondsString: PropTypes.string,
  seconds: PropTypes.number,
  arrayInputText: PropTypes.string,
};
