import { Likes } from "./likes";

export const Answers = (props) => {
	//draw element
	return (
		<>
			<div className="question__response">{props.response}</div>
			<Likes />
		</>
	);
};
