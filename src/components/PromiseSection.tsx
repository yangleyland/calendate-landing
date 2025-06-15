
import React from 'react';

export const PromiseSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch text-white font-bold text-right justify-center bg-[#A30003] mt-[120px] px-10 py-[88px]">
      <div className="flex w-full flex-col items-end">
        <h2 className="text-right text-[32px]">
          One match = one date
        </h2>
        <p className="text-2xl mt-4 text-right">
          Every match is an actual date scheduled on your calendar.
        </p>
      </div>
    </section>
  );
};
