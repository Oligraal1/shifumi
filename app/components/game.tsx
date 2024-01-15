// Importez les composants nécessaires
import React, { useState, useEffect } from 'react';
import Player from './Player';
import Result from './Result';
import PlayerNameInput from './PlayerNameInput';
import LoadingSpinner from './LoadingSpinner';

type Choice = 'Rock' | 'Paper' | 'Scissors';
type ResultType = ' Wins' | 'Tie';

const Game: React.FC = () => {
  const [playerName, setPlayerName] = useState<string | null>(null);
  const [computerName, setComputerName] = useState<string | null>(null);
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(true);


  const handlePlayerNameSubmit = (name: string) => {
    setPlayerName(name);
  };

  const calculateResult = () => {
    if (playerChoice !== null && computerChoice !== null) {
      const player = playerChoice.toLowerCase();
      const computer = computerChoice.toLowerCase();

      if (player === computer) {
        setResult('Tie!');
      } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
      ) {
        setResult(playerName + ' Wins!');
      } else if (
        (player === 'scissors' && computer === 'rock') ||
        (player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'scissors')
      ) {
        setResult(computerName + ' Wins!');
      }
    }
  };

  useEffect(() => {
    if (playerChoice !== null) {
      const choices: Choice[] = ['Rock', 'Paper', 'Scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex];
      setComputerChoice(computerChoice);
    }
  }, [playerChoice]);

  useEffect(() => {
    if (computerChoice !== null) {
      const timerId = setTimeout(() => {
        calculateResult();
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [computerChoice]);

  const handlePlayerChoice = (choice: Choice) => {
    setPlayerChoice(choice);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };


  return (
    <div className="font-mono my-4 container mx-auto">
      {playerName === null ? (
        <PlayerNameInput onSubmit={handlePlayerNameSubmit} />
      ) : result ? (
        <>
          <Result result={result} />
          <div className="mx-auto">
            <button className="block mx-auto" onClick={resetGame}>
            Play Again
          </button>
          </div>
          
        </>
      ) : (
        <>
          {!playerChoice && (
            <Player player={playerName} onChoose={handlePlayerChoice} setComputerName={setComputerName} />
          )}
          {playerChoice && (
            <div className="mx-4 text-center">
              <p>
                You have chosen <span className="text-teal-400">{playerChoice}</span>
              </p>
              {computerChoice && (
                <>
                  <p>
                    {computerName} has chosen{' '}
                    <span className="text-pink-400">{computerChoice}</span>
                  </p>
                  <LoadingSpinner loading={loading} />
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Game;
