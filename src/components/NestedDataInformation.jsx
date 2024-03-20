function NestedDataInformation({
  heading,
  bullet,
  nestedBullet1,
  nestedBullet2,
  nestedBullet3,
  nestedBullet4,
}) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="w-[619px] h-[27px] max-sm:w-[337px] max-sm:h-[36px] font-poppins font-semibold text-[24px] leading-[27px] text-[#00000A]">
        {heading}
      </h2>
      <div className="w-[578.51px] h-[54px] max-sm:w-[350px] max-sm:h-[81px]">
        <p className="flex gap-4 font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
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
          {bullet}
        </p>
      </div>

      <div className="ml-12 max-sm:ml-10 flex flex-col gap-4">
        <p className="w-[498px] h-[81px] max-sm:w-[315px] max-sm:h-[135px] flex gap-3 font-poppins font-medium text-[18px] leading-[27px] text-[#00000A]">
          <span className="mt-2">
            <svg
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="7"
                height="7"
                rx="3.5"
                stroke="black"
              />
            </svg>
          </span>
          {nestedBullet1}
        </p>
        <p className="w-[498px] h-[54px] max-sm:w-[303px] max-sm:h-[81px] flex gap-3 font-poppins font-medium text-[18px] leading-[27px] text-[#00000A]">
          <span className="mt-2">
            <svg
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="7"
                height="7"
                rx="3.5"
                stroke="black"
              />
            </svg>
          </span>
          {nestedBullet2}
        </p>
        <p className="w-[498px] h-[81px] max-sm:w-[303px] max-sm:h-[135px] flex gap-3 font-poppins font-medium text-[18px] leading-[27px] text-[#00000A]">
          <span className="mt-2">
            <svg
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="7"
                height="7"
                rx="3.5"
                stroke="black"
              />
            </svg>
          </span>
          {nestedBullet3}
        </p>
        <p className="w-[498px] h-[54px] max-sm:w-[315px] max-sm:h-[108px] flex gap-3 font-poppins font-medium text-[18px] leading-[27px] text-[#00000A]">
          <span className="mt-2">
            <svg
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="1"
                width="7"
                height="7"
                rx="3.5"
                stroke="black"
              />
            </svg>
          </span>
          {nestedBullet4}
        </p>
      </div>
    </div>
  );
}

export default NestedDataInformation;
