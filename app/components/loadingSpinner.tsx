import React from "react";
import {PacmanLoader} from "react-spinners";

interface LoadingSpinnerProps {
  loading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({loading}) => {
  return (
    <div className="my-4 mx-auto text-center">
      <PacmanLoader color="#00cdcd" className="block mx-auto"/>
    </div>
  );
};

export default LoadingSpinner;
