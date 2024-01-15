import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

const Rules: React.FC = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="font-mono">
      <h2 className="text-teal-400 my-4 font-bold text-center">Rules</h2>
      <p className="text-center">
        Would you like to see the rules? 
        <span
          className="cursor-pointer text-teal-300 ml-2"
          onClick={() => setShowRules(!showRules)}
        >
          <FontAwesomeIcon icon={faEye} />
        </span>
      </p>
      {showRules && (
        <div className="border border-teal-200 rounded my-4 mx-auto max-w-full">
          <div className="mx-4 my-4 text-sm">
            <p>
              There are three weapons to choose from: rock, paper, or
              scissors.
            </p>
            <h3 className="my-2">How to win?</h3>
            <ul className="pl-2 mb-4">
              <li>Rock crushes scissors.</li>
              <li>Scissors cuts paper.</li>
              <li>Paper covers rock.</li>
            </ul>
            <p>Easy, isn't it <FontAwesomeIcon className="text-teal-300 ml-2" icon={faSmileBeam} />?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rules;
