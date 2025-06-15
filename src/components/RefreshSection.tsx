import React from "react";

export const RefreshSection: React.FC = () => {
  return (
    <section className="relative flex w-full flex-col text-[#A30003] text-center bg-[#F1F1F1] mt-[88px] pt-[117px] pb-[66px] items-center">
      <div className="flex w-full max-w-[319px] flex-col items-center">
        <div className="flex w-[245px] max-w-full flex-col items-center">
          <div className="text-[#A30003] text-base font-medium">(4)</div>
          <h2 className="text-[#A30003] text-2xl font-bold mt-2 text-center">
            Didn't work out? Enter next week's pool to get a fresh match.
          </h2>
        </div>
        <img
          src="/images/receipt.png"
          className="object-contain max-w-full mt-[57px] h-full absolute top-0 right-0"
          alt="Fresh match illustration"
        />
      </div>
    </section>
  );
};
