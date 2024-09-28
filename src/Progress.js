import { useQuiz } from "./QuizContext";

function Progress() {
  const { index, points, answer, numQuestions, maxPossPoints } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossPoints}
      </p>
    </header>
  );
}

export default Progress;
