import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="self-center flex w-full max-w-[319px] flex-col items-center text-[#A30003] text-center mt-[75px]">
      <div className="flex w-full flex-col items-stretch">
        <h2 className="text-[#A30003] text-base font-bold leading-[1.4]">
          How does it work?
        </h2>
        <div className="w-full mt-8">
          <div className="text-[#A30003] text-base font-medium">
            (1)
          </div>
          <h3 className="text-[#A30003] text-2xl font-bold mt-3">
            Tell us about yourself & when you're free for a date.
          </h3>
        </div>
      </div>
    </section>
  );
};
