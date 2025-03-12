import { useState } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function App() {
  const [randomNumber, setRandomNumber] = useState(getRandomInt(10));

  const handleClick = () => {
    setRandomNumber(getRandomInt(10));
  };

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={handleClick}>Generate New Number</button>
    </div>
  );
}
