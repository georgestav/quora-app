import { useState } from "react";

export const PostAnswer = (props) => {
	const [inputArea, setInputArea] = useState("");

	const handleChange = (e) => {
		setInputArea(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.question.question.response.push(inputArea);
		props.newAnswer(inputArea);
		setInputArea("");
	};

	return (
		<div className="form__container">
			<form id="answer__form" action="/" method="get" onSubmit={handleSubmit}>
				<label htmlFor="answer__form__textarea">Your Answer:</label>
				<textarea
					id="answer__form__textarea"
					name="textarea"
					cols="30"
					rows="5"
					value={inputArea}
					onChange={handleChange}
				></textarea>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};
