import React from "react";

export const FeatureSection: React.FC = () => {
  return (
    <section
      id="feature"
      className="self-center w-full max-w-[338px] text-[#A30003] font-bold mt-[122px]"
    >
      <h2 className="text-[#A30003] text-base leading-[1.4]">What is it?</h2>
      <p className="text-[#A30003] w-full text-2xl mt-4">
        Tell us about yourself, & we&apos;ll set you up—no swiping or liking
        involved.
      </p>
    </section>
  );
};
