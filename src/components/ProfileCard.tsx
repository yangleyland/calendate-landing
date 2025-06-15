import React from "react";

interface ProfileCardProps {
  profileImage: string;
  overlayImage: string;
  name: string;
  age: number;
  location: string;
  pronouns: string;
  sexuality: string;
  gender: string;
  height: string;
  ethnicity: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profileImage,
  overlayImage,
  name,
  age,
  location,
  pronouns,
  sexuality,
  gender,
  height,
  ethnicity,
}) => {
  return (
    <article className="shadow-[0px_4px_12px_12px_rgba(0,0,0,0.04)] w-[45%] overflow-hidden bg-white mx-auto pb-3">
      <div className="w-full flex flex-col relative aspect-[0.967] w-[175px]">
        <img
          src={profileImage}
          className="absolute h-full w-full object-cover inset-0"
          alt={`${name}'s profile`}
        />
        <img
          src={overlayImage}
          className="aspect-[0.97] object-contain w-full"
          alt="Profile overlay"
        />
      </div>
      <div className="flex w-full items-stretch gap-5 justify-between mt-[15px]">
        <div className="flex items-start text-black">
          <div className="bg-[rgba(255,255,255,0.08)] z-10 flex mr-[-58px] w-[67px] shrink-0 h-[26px] mt-1.5" />
          <div>
            <div>
              <div className="flex items-center gap-0.5 text-[5px] font-normal justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a72e6a6abb1af5108336868019cea426411f9d0?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[5px] self-stretch shrink-0 my-auto"
                  alt="Location icon"
                />
                <div className="text-black self-stretch my-auto">
                  {location}
                </div>
              </div>
              <div className="text-black text-sm font-bold mt-1">
                {name}, {age}
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#A9A9A9] text-[7px] font-medium mt-[17px] pr-2">
          {pronouns}
        </div>
      </div>
      <div className="flex w-full flex-col text-[7px] whitespace-nowrap pl-[9px] pr-[35px]">
        <div className="flex h-[19px] items-center gap-[22px] justify-start">
          <div className="self-stretch w-[31px] my-auto">
            <div className="text-[rgba(159,159,159,1)] font-normal">
              Sexuality
            </div>
            <div className="text-black font-medium">{sexuality}</div>
          </div>
          <div className="self-stretch w-[25px] my-auto">
            <div className="text-[rgba(159,159,159,1)] font-normal">Gender</div>
            <div className="text-black font-medium">{gender}</div>
          </div>
        </div>
        <div className="flex items-center gap-[30px] mt-[7px]">
          <div className="self-stretch w-[23px] my-auto">
            <div className="text-[rgba(159,159,159,1)] font-normal">Height</div>
            <div className="text-black font-medium">{height}</div>
          </div>
          <div className="self-stretch w-[54px] my-auto">
            <div className="text-[rgba(159,159,159,1)] font-normal">
              Ethnicity
            </div>
            <div className="text-black font-medium">{ethnicity}</div>
          </div>
        </div>
      </div>
    </article>
  );
};
