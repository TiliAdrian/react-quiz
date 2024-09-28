import { useQuiz } from "./QuizContext";

function FinishScreen() {
  const { points, dispatch, maxPossPoints } = useQuiz();
  const percentage = (points / maxPossPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossPoints} (
        {Math.ceil(percentage)}%)
      </p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
