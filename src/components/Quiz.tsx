import { useEffect, useState } from "react";
import classes from "./quiz.module.css";
import "./quiz.module.css";
import Modal from "./Modal";

// Define Quiz props.
type QuizProps = {
  onCorrectAnswers: Function;
  correctAnswers: number;
};

const Quiz = ({ onCorrectAnswers, correctAnswers }: QuizProps) => {
  const [question, setQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>();
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [fail, setFail] = useState<boolean>(false);
  // fetch data
  const dataFetch = async () => {
    const res = await (
      await fetch("https://opentdb.com/api.php?amount=1")
    ).json();

    // set state when the data received
    setQuestion(res.results[0].question);
    setAnswer(res.results[0].correct_answer);
  };
  useEffect(() => {
    dataFetch();
  }, []);
  const handleSubmit = () => {
    if (answer == userAnswer) {
      onCorrectAnswers(++correctAnswers);
      setSuccess(true);
      setTimeout(() => {
        dataFetch();
        setSuccess(false);
        setUserAnswer("");
      }, 2000);
    } else {
      setFail(true);
      setTimeout(() => {
        dataFetch();
        setFail(false);
        setUserAnswer("");
      }, 2000);
    }
  };
  if (!question) {
    return <Modal isOpen={true} title={["loading..."]} bgColor="grey" />;
  }
  return (
    <div className={classes.card}>
      <h1 role="QuestionTitle" className={classes.title}>
        {question}
      </h1>
      <div className={classes.inputGroup}>
        <input
          className="form-control"
          type="text"
          name="answer-input"
          id="answer-input"
          required
          placeholder="Your Answer"
          onChange={(e) => setUserAnswer(e.target.value)}
          value={userAnswer}
        />

        <label htmlFor="answer-input">Your Answer</label>
        <div className={classes.reqMark}>!</div>
      </div>
      <button
        disabled={userAnswer.length === 0 ? true : false}
        className={classes.btn}
        onClick={handleSubmit}
        role="submitBtn"
      >
        submit
      </button>
      {success && (
        <Modal
          key="success-modal"
          isOpen={success}
          title={[<span> &#10003;</span>, " Great right Answer "]}
          bgColor={`green`}
        />
      )}
      {fail && (
        <Modal
          key="fail-modal"
          isOpen={fail}
          title={[<span>&#10006;</span>, `Wrong Answer try again `]}
          bgColor={`red`}
        />
      )}
    </div>
  );
};

export default Quiz;
