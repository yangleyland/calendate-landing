import React from "react";
import { ProfileCard } from "./ProfileCard";

export const MatchingSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch bg-[#F1F1F1] mt-20 py-[72px]">
      <div className="self-center flex w-full max-w-[319px] flex-col items-center text-base text-[#A30003] font-medium text-center">
        <div className="text-[#A30003]">(2)</div>
        <h2 className="text-[#A30003] text-2xl font-bold mt-2">
          Real people match & plan your date.
        </h2>
        <p className="text-[#A30003] mt-2">
          It&apos;s true—we view every single profile to ensure compatibility.
        </p>
      </div>
      <div className="mt-8">
        <div className="gap-5 flex justify-between">
          <ProfileCard
            profileImage="/images/earbud1.png"
            overlayImage="/images/earbud1.png"
            name="Zachary"
            age={24}
            location="Silverlake, Los Angeles, CA"
            pronouns="he/him"
            sexuality="Bisexual"
            gender="Male"
            height="5'11"
            ethnicity="Hispanic/Latino"
          />
          <ProfileCard
            profileImage="/images/earbud2.png"
            overlayImage="/images/earbud2.png"
            name="Julie"
            age={23}
            location="Echo Park, Los Angeles, CA"
            pronouns="she/her"
            sexuality="Straight"
            gender="Woman"
            height="5'4"
            ethnicity="East Asian"
          />
        </div>
      </div>
    </section>
  );
};
