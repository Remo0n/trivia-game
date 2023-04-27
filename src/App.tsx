import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  //pass props to sibling components
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  return (
    <>
      <Header correctAnswers={correctAnswers} />
      <Quiz
        onCorrectAnswers={setCorrectAnswers}
        correctAnswers={correctAnswers}
      />
    </>
  );
}

export default App;
