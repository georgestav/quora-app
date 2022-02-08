import "./App.scss";
import { listQuestions } from "../listQuestions";
import { Question } from "./components/Question";
// import { Answer } from "./components/Answer";
// import { PostAnswer } from "./components/PostAnswer";

function App() {
	return (
		<>
			{listQuestions.map((question, i) => {
				return <Question question={question} key={question.id} />;
			})}
		</>
	);
}

export default App;
