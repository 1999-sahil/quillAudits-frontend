function DataInformation({ heading, bullet1, bullet2, bullet3 }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="w-[619px] h-[27px] max-sm:w-[337px] max-sm:h-[36px] font-poppins font-semibold text-[24px] leading-[27px] text-[#00000A]">
        {heading}
      </h2>
      <div className="w-[578.51px] h-[54px] max-sm:w-[364px] max-sm:h-[108px] flex gap-4">
        <span className="mt-2">
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.171875" width="8" height="8" rx="4" fill="#253858" />
          </svg>
        </span>
        <p className="flex gap-2 font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
          {bullet1}
        </p>
      </div>
      <div className="w-[590px] h-[54px] max-sm:w-[364px] max-sm:h-[108px] flex gap-4">
        <span className="mt-2">
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.171875" width="8" height="8" rx="4" fill="#253858" />
          </svg>
        </span>
        <p className="flex gap-2 font-poppins text font-normal text-[18px] leading-[27px] text-[#00000A]">
          {bullet2}
        </p>
      </div>
      <div className="w-[578.51px] h-[54px] max-sm:w-[364px] max-sm:h-[54px] flex gap-4">
        <span className="mt-2">
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.171875" width="8" height="8" rx="4" fill="#253858" />
          </svg>
        </span>
        <p className="flex gap-2 font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
          {bullet3}
        </p>
      </div>
    </div>
  );
}

export default DataInformation;
