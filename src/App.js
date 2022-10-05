import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card-component/card-component';

const cardImages = [
	{ src: '/img/helmet-1.png', matched: false },
	{ src: '/img/potion-1.png', matched: false },
	{ src: '/img/ring-1.png', matched: false },
	{ src: '/img/scroll-1.png', matched: false },
	{ src: '/img/shield-1.png', matched: false },
	{ src: '/img/sword-1.png', matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setChoiceTwo(null);
		setChoiceOne(null);
		setCards(shuffledCards);
		setTurns(0);
	};

	const reset = () => {
		setChoiceTwo(null);
		setChoiceOne(null);
		setTurns(turns + 1);
		setDisabled(false);
	};

	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	useEffect(() => {
		shuffleCards();
	}, []);

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			if (choiceOne.src == choiceTwo.src)
				setCards((prevCards) =>
					prevCards.map((card) =>
						card.src === choiceOne.src ? { ...card, matched: true } : card
					)
				);

			setTimeout(() => {
				reset();
			}, 500);
		}
	}, [choiceOne, choiceTwo]);

	return (
		<div className="App">
			<h1>New Match</h1>
			<button onClick={shuffleCards}>New Game</button>
			<div className="card-grid">
				{cards.map((card) => {
					return (
						<Card
							key={card.id}
							card={card}
							handleChoice={handleChoice}
							flipped={
								card === choiceOne || card === choiceTwo || card.matched
							}
							disabled={disabled}
						/>
					);
				})}
			</div>
			<p>Turns: {turns}</p>
		</div>
	);
}

export default App;
