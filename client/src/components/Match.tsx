import React from 'react';
import { FaEthereum } from 'react-icons/fa';

const Match = () => {
  return (
    <div className="bg-lightWhite flex flex-col justify-between rounded-lg p-5 pt-4 w-full h-40">
      <div className="flex text-white  items-center justify-between">
        <span className="text-4xl font-medium">10+0</span>
        <span className="flex items-center gap-2 text-lg">
          25 <FaEthereum />
        </span>
      </div>
      <p className="text-lg text-white">White to move</p>
    </div>
  );
};

export default Match;
