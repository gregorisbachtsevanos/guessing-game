import React from 'react';
import './card-component.css';

const Card = ({ card, handleChoice }) => {
	// const handleClick = () => {
	//    handleChoice(card)
	// };

	return (
		<div className="card">
			<div>
				<img className="front" src={card.src} alt="card front" />
				<img
					className="back"
					src="/img/cover.png"
					alt="card back"
					onClick={() => {
						handleChoice(card);
					}}
				/>
			</div>
		</div>
	);
};

export default Card;
