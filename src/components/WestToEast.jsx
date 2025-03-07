import React from 'react';

const WestToEastArrow = () => {
  return (
    <div className="flex items-center justify-center mb-4">
      <div className="relative flex items-center">
        <span className="text-sm text-primary mr-2 animate-bounce">From west to east</span>
        <div className="w-8 h-8 border-t-2 border-r-2 border-primary transform rotate-45 animate-ping"></div>
      </div>
    </div>
  );
};

export default WestToEastArrow;