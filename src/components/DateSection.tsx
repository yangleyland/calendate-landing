import React from "react";

export const DateSection: React.FC = () => {
  return (
    <section className="self-center flex w-full max-w-[319px] flex-col items-center text-base text-[#A30003] font-medium text-center mt-20">
      <div className="text-[#A30003]">(3)</div>
      <h2 className="text-[#A30003] text-2xl font-bold mt-2">
        Attend your scheduled date.
      </h2>
      <p className="text-[#A30003] mt-2">Have fun & good luck!</p>
      <img
        src="/images/scheduled-date.png"
        className="aspect-[1.07] object-contain w-full self-center max-w-full mt-[46px]"
        alt="Date scheduling interface"
      />
    </section>
  );
};
