import { useEffect, useState } from "react";
import { wordsRus } from "../variable/variable";
import "./App.css";
import { MainPageFirst } from "../components/Main/MainPageFirst";
import { MainPageSecond } from "../components/Main/MainPageSecond";
import { MainPageThird } from "../components/Main/MainPagesThird";
import { MainPageFourth } from "../components/Main/MainPageFourth";

// начальный текст переводим в нижний регистр,делаем массив строк,убираем пустые строчки,убираем пробелы
const wordsArray = wordsRus
  .toLowerCase()
  .split(" ")
  .filter((word) => word.length)
  .map((word) => word.trim());

// время таймера в setTimeout
const timer = 1400;

function App() {
  // value радиокнопки
  const [value, setValue] = useState(0);
  // массив слов в облачке
  const [wordCloud, setWordCloud] = useState([]);
  // время которое осталось до запоминания ответа
  const [seconds, setSeconds] = useState(10);
  //  скорость таймера
  const [speedTime, setSpeedTime] = useState(timer);
  // текст вводимый в инпут
  const [textInput, setTextInput] = useState("");
  // колличество верных ответов
  const [correct, setCorrect] = useState(0);

  const [finish, setFinish] = useState(false);
  // минуты и секунды которые будет видеть пользователь
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  //выбирает рандомно слова и количество слов
  const wordsLength = (e) => {
    let serialNumber = 0;
    serialNumber = Math.round(Math.random() * (wordsArray.length - e));
    return wordsArray.slice(serialNumber, serialNumber + e);
  };
  // вычисляет скорость таймера в зависимости от сложности
  const speedCalculation = (value) => {
    switch (value) {
      case 2:
        setSpeedTime(Math.round(timer / value));
        break;
      case 4:
        setSpeedTime(Math.round(timer / value));
        break;
      case 6:
        setSpeedTime(Math.round(timer / value));
        break;
      default:
        break;
    }
  };
  // запуск Timeout
  useEffect(() => {
    if (value) {
      const timeout = setTimeout(() => {
        setSeconds(seconds - 1);
      }, speedTime);
      if (seconds === 0) {
        clearTimeout(timeout);
      }
    }
  }, [seconds, speedTime, value]);
  // считает колличество верных ответов
  const correctAnswers = () => {
    let number = 0;
    textInput
      .toLowerCase()
      .split(",")
      .filter((item) => {
        wordCloud.indexOf(item.trim()) !== -1 && number++;
      });
    return setCorrect(number);
  };
  // вычисляет даннные и меняет значение для вызова последнего блока
  const result = () => {
    correctAnswers();
    setFinish(true);
  };
  // функция получает данные радиокнопки и выполняются функции
  const chengeValue = (event) => {
    setValue(+event.target.value);
    setSeconds(10);
    setWordCloud(wordsLength(+event.target.value));
    speedCalculation(+event.target.value);
  };
  // проверяет нажата ли кнопка Enter
  const focusClick = (evt) => {
    evt.key === "Enter" && result();
  };
  // удаляет пробелы в тексте из input
  const arrayInputText = textInput
    .split(",")
    .map((text) => text.trim())
    .join(" ");

  // функция для склонения слов в тексте
  const correctText = () => {
    if (correct == 0) {
      return "слов";
    }
    if (correct == 1) {
      return "слово";
    }
    if (correct > 1 && correct < 5) {
      return "слова";
    }
    if (correct > 4) {
      return "слов";
    }
  };

  return (
    <>
      <header>Тренировка памяти</header>

      {value == 0 ? (
        <MainPageFirst value={value} chengeValue={chengeValue} />
      ) : (
        <MainPageSecond
          seconds={seconds}
          wordCloud={wordCloud}
          minutesString={minutesString}
          secondsString={secondsString}
          arrayInputText={arrayInputText}
        />
      )}
      <MainPageThird
        finish={finish}
        seconds={seconds}
        value={value}
        textInput={textInput}
        setTextInput={setTextInput}
        focusClick={focusClick}
      />

      {finish && (
        <MainPageFourth
          finish={finish}
          wordCloud={wordCloud}
          arrayInputText={arrayInputText}
          correct={correct}
          correctText={correctText}
          value={value}
        />
      )}
      <footer>Boris Liagush © 2025</footer>
    </>
  );
}

export default App;
