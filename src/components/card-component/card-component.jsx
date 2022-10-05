import React from 'react';
import './card-component.css';

const Card = ({ card, handleChoice, flipped, disabled }) => {
	// const handleClick = () => {
	//    handleChoice(card)
	// };

	return (
		<div className="card">
			<div className={flipped ? 'flipped' : ''}>
				<img className="front" src={card.src} alt="card front" />
				<img
					className="back"
					src="/img/cover.png"
					alt="card back"
					onClick={() => {
                  if(!disabled){
                     handleChoice(card);
                  }
					}}
				/>
			</div>
		</div>
	);
};

export default Card;
