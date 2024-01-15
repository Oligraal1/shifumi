import React, {useState} from "react";

interface PlayerNameInputProps {
  onSubmit: (name: string) => void;
}

const PlayerNameInput: React.FC<PlayerNameInputProps> = ({onSubmit}) => {
  const [name, setName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() !== "") {
      onSubmit(name);
    } else {
      alert("Please enter a valid name.");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-4/5 my-4 sm:flex-col sm:items-stretch">
  <div className="sm:mr-4">
    <label htmlFor="playerName" className="block text-sm font-medium">
      Please, let's meet! Enter your name:
    </label>
    <input
      type="text"
      id="playerName"
      value={name}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      placeholder="Your Name"
      className="my-4 p-2 block w-1/2 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-700"
    />
  </div>
  <div className="mt-2 sm:mt-4">
    <button
      onClick={handleSubmit}
      className="block">
      Start Game
    </button>
  </div>
</div>
  );
};

export default PlayerNameInput;
