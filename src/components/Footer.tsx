import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-[#A30003] mt-[140px] pb-[50px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a8de2d8cdde44f2584ca70c5206ea618b61c1a3?placeholderIfAbsent=true"
        className="aspect-[1.79] object-contain w-full self-stretch z-10 -mt-28"
        alt="Footer decoration"
      />
      <div className="flex w-full max-w-[298px] flex-col items-stretch mt-36">
        <div className="w-full">
          <h3 className="text-white text-center text-sm font-medium">
            Questions, comments, concerns?
          </h3>
          <a
            href="mailto:date.calendate@gmail.com"
            className="text-[#686868] self-stretch border-[color:var(--Grey10,#F1F1F1)] shadow-[0px_4px_12px_12px_rgba(0,0,0,0.02)] w-full gap-4 overflow-hidden text-base font-semibold bg-white mt-4 px-6 py-5 rounded-[100px] border-[1.6px] border-solid hover:bg-gray-50 active:bg-gray-100 active:scale-95 transition-all flex items-center justify-center"
          >
            Contact us
          </a>
        </div>
        <div className="self-center flex items-center gap-3 mt-6">
          <a
            href="https://instagram.com/calen.date"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white self-stretch flex items-center gap-2.5 overflow-hidden w-9 h-9 my-auto p-2 rounded-[100px] hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all"
            aria-label="Instagram"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8037ada04c193e4f9e620cc21c497637c1f676f2?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 fill-[#A30003] self-stretch my-auto"
              alt="Instagram icon"
            />
          </a>
          <a
            href="mailto:date.calendate@gmail.com"
            className="bg-white self-stretch flex min-h-9 flex-col overflow-hidden items-center justify-center w-9 h-9 my-auto px-2 rounded-[100px] hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all"
            aria-label="Email"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b6a7a368fd4c72060e4955575046ec4b654df72?placeholderIfAbsent=true"
              className="aspect-[1.25] object-contain w-5 fill-[#A30003]"
              alt="Email icon"
            />
          </a>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/84c4d24572fb916cee7f40f282106b4ba7e77229?placeholderIfAbsent=true"
        className="aspect-[2.33] object-contain w-[98px] mt-[57px]"
        alt="Logo"
      />
    </footer>
  );
};
