import PropTypes from "prop-types";
import { Tag } from "../UI/Tag/Tag";

export const WordsInCloud = ({ wordCloud, arrayInputText, style }) => {
  return (
    <>
      {wordCloud.map((word) =>
        arrayInputText.toLowerCase().indexOf(word.toLowerCase()) < 0 ? (
          <Tag tag="p" key={word} style={style}>
            {word}
          </Tag>
        ) : (
          <Tag tag="p" key={word}>
            {word}
          </Tag>
        )
      )}
      {/* {wordCloud.map((word) => (
        <Tag tag="p" key={word}>
          {word}
        </Tag>
      ))} */}
    </>
  );
};

WordsInCloud.propTypes = {
  wordCloud: PropTypes.array,
  arrayInputText: PropTypes.string,
  style: PropTypes.any,
};
