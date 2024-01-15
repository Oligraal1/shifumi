import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface RandomUser {
  name: {
    first: string;
  };
}

interface RandomNameGeneratorProps {
  setComputerName: (name: string) => void;
}

const RandomNameGenerator: React.FC<RandomNameGeneratorProps> = ({ setComputerName }) => {
  const [randomName, setRandomName] = useState<string>('');

  useEffect(() => {
    const fetchRandomName = async () => {
      try {
        const response = await axios.get<RandomUser>('https://randomuser.me/api/');
        const { name } = response.data?.results[0] ?? {};
        const firstName = name?.first ?? '';
        setRandomName(firstName);
        setComputerName(firstName);
      } catch (error) {
        console.error('Error fetching random name:', error);
      }
    };

    fetchRandomName();
  }, []);

  console.log('RANDOM NAME ', randomName);

  return (
    <div className="my-4">
      <p>Your opponent will be: <span className="text-pink-400">{randomName}</span></p>
    </div>
  );
};

export default RandomNameGenerator;
