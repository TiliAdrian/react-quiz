import Options from "./Options";
import { useQuiz } from "./QuizContext";

function Question() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
      ></Options>
    </div>
  );
}

export default Question;
