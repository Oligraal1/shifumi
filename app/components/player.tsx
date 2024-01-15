import React from "react";
import Image from "next/image";
import RandomNameGenerator from "./RandomNameGenerator";

interface PlayerProps {
  player: string;
  choice: string | null;
  onChoose?: (choice: string) => void;
  setComputerName: (name: string) => void;
}

const Player: React.FC<PlayerProps> = ({
  player,
  choice,
  onChoose,
  setComputerName
}) => {
  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <h2 className="mb-4 text-center">
        Hello {player}
      </h2>
      <RandomNameGenerator setComputerName={setComputerName} />
      <p className="block mb-2 text-center sm:w-full">Make your choice:</p>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
        <button
          onClick={() => onChoose && onChoose("rock")}
          className="flex items-center justify-center mb-2 sm:mb-0">
          <Image
            src="/images/pierre.png"
            alt="rock"
            width={50}
            height={50}
            className="mx-auto" // Ajout de cette classe pour centrer les images
          />{" "}
          Rock
        </button>
        <button
          onClick={() => onChoose && onChoose("paper")}
          className="flex items-center justify-center mb-2 sm:mb-0">
          <Image
            src="/images/feuille.png"
            alt="paper"
            width={50}
            height={50}
            className="mx-auto" // Ajout de cette classe pour centrer les images
          />{" "}
          Paper
        </button>
        <button
          onClick={() => onChoose && onChoose("scissors")}
          className="flex items-center justify-center mb-2 sm:mb-0">
          <Image
            src="/images/ciseaux.png"
            alt="scissors"
            width={50}
            height={50}
            className="mx-auto" // Ajout de cette classe pour centrer les images
          />{" "}
          Scissors
        </button>
      </div>
    </div>
  );
};

export default Player;
