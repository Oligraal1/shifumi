import React from "react";

interface ResultProps {
  result: string | null;
}

const Result: React.FC<ResultProps> = ({result}) => {
  return (
    <div className="text-center mx-auto">
      <h2 className="text-teal-300 mx-4">Result</h2>
      {result &&
        <p className="mx-8 my-4 text-lg font-bold">
          {result}
        </p>}
    </div>
  );
};

export default Result;
