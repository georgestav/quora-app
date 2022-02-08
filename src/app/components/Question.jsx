import { useState } from "react";
import { Answers } from "./Answer";
import { PostAnswer } from "./PostAnswer";

export function Question(props) {
	const [answer, setAnswer] = useState("");

	const data = (d) => {
		setAnswer(d);
	};
	return (
		<div>
			<h2 className="question__name">{props.question.name}</h2>
			<div className="question__container">
				<div className="responses__container">
					{props.question.response.map((ans, i) => {
						return (
							<div
								className={`response question__response--${props.question.id}-${
									i + 1
								}`}
								key={`${props.question.id}-${i + 1}`}
							>
								<Answers response={ans} />
							</div>
						);
					})}
				</div>
				<PostAnswer newAnswer={data} question={props} />
			</div>
		</div>
	);
}
