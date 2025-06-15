import React from "react";

export const InteractiveCards: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-start">
        <img
          src="/images/card-left.png"
          alt="Interactive Cards"
          className="w-3/4 h-full object-cover"
        />
      </div>
      <div className="w-full flex justify-end">
        <img
          src="/images/card-right.png"
          alt="Interactive Cards"
          className="w-3/4 h-full object-cover"
        />
      </div>
    </div>
  );
};
