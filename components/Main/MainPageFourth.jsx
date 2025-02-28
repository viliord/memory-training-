import PropTypes from "prop-types";
import { Button } from "../UI/Button/Button";
import { Tag } from "../UI/Tag/Tag";
import { List } from "../UI/List/List";
import { WordsInCloud } from "../WordsInCloud/WordsInCloud";

export const MainPageFourth = ({
  finish,
  wordCloud,
  arrayInputText,
  correct,
  correctText,
  value,
}) => {
  return (
    <main style={{ display: `${finish ? "" : "none"}` }}>
      <Tag className="result">
        <img src="/free-icon-student-4472533.png" alt="student" />
        <aside className="oblachko">
          <ul>
            <List className="oblachko_list1">
              <WordsInCloud
                wordCloud={wordCloud}
                arrayInputText={arrayInputText}
                style={{ color: "red" }}
              />
            </List>
            <List className="oblachko_list2" />
            <List className="oblachko_list3" />
            <List className="oblachko_list4" />
          </ul>
        </aside>
        <Tag tag="h4">{`Вы запомнили ${correct} ${correctText(
          correct
        )} из ${value}`}</Tag>
        <a href="/" id="return">
          <Button>попробывать снова</Button>
        </a>
      </Tag>
    </main>
    // <main style={{ display: `${seconds != 0 ? "" : "none"}` }}>
    //   <img src="/free-icon-student-4472533.png" alt="student" />
    //   <aside className="oblachko">
    //     <ul>
    //       <List className="oblachko_list1">
    //         <WordsInCloud wordCloud={wordCloud} />
    //       </List>
    //       <List className="oblachko_list2" />
    //       <List className="oblachko_list3" />
    //       <List className="oblachko_list4" />
    //     </ul>

    //   </aside>
    //   <Tag tag="h1">тренировка памяти</Tag>
    //   <Tag tag="h2">запомни слова</Tag>
    //   <Tag tag="h3" style={{ color: `${seconds < 4 ? "red" : ""}` }}>
    //     {minutesString}:{secondsString}
    //   </Tag>
    // </main>
  );
};

MainPageFourth.propTypes = {
  wordCloud: PropTypes.array,
  finish: PropTypes.bool,
  arrayInputText: PropTypes.string,
  correct: PropTypes.number,
  correctText: PropTypes.func,
  value: PropTypes.number,
};
