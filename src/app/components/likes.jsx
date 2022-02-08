import { useState } from "react";

export const Likes = () => {
	//set the original state
	const [liked, setLiked] = useState(Number(0));

	//define the behaviour for the onClick handler
	const likeClicked = () => {
		setLiked(liked + 1);
	};

	return (
		<button className="question__response--likes" onClick={likeClicked}>
			likes {liked}
		</button>
	);
};
