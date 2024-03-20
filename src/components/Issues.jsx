
function Issues({ heading1, heading2, heading3, heading4, heading5, heading6, point1, point2, point3, point4, point5, point6 }) {
  return (
    <div>
        {/** one */}
        <div className="flex flex-col gap-4 mb-6">
            <h2 className="w-[619px] h-[27px] font-poppins font-semibold text-[18px] leading-[27px] text-[#00000A]">{heading1}</h2>
            <div className="flex gap-5 ml-7">
                <p className="w-[16px] h-[27px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">a.</p>
                <p className="w-[542px] h-[54px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">{point1}</p>
            </div>
        </div>

        {/** two */}
        <div className="flex flex-col gap-4 mb-6">
            <h2 className="w-[619px] h-[27px] font-poppins font-semibold text-[18px] leading-[27px] text-[#00000A]">{heading2}</h2>
            <div className="flex gap-5 ml-7">
                <p className="w-[16px] h-[27px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">a.</p>
                <p className="w-[542px] h-[54px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">{point2}</p>
            </div>
        </div>

        {/** three */}
        <div className="flex flex-col gap-4 mb-6">
            <h2 className="w-[619px] h-[27px] font-poppins font-semibold text-[18px] leading-[27px] text-[#00000A]">{heading3}</h2>
            <div className="flex gap-5 ml-7">
                <p className="w-[16px] h-[27px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">a.</p>
                <p className="w-[542px] h-[81px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">{point3}</p>
            </div>
        </div>

        {/** four */}
        <div className="flex flex-col gap-4 mb-6">
            <h2 className="w-[619px] h-[27px] font-poppins font-semibold text-[18px] leading-[27px] text-[#00000A]">{heading4}</h2>
            <div className="flex gap-5 ml-7">
                <p className="w-[16px] h-[27px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">a.</p>
                <p className="w-[542px] h-[81px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">{point4}</p>
            </div>
        </div>

        {/** five */}
        <div className="flex flex-col gap-4 mb-6">
            <h2 className="w-[619px] h-[27px] font-poppins font-semibold text-[18px] leading-[27px] text-[#00000A]">{heading5}</h2>
            <div className="flex gap-5 ml-7">
                <p className="w-[16px] h-[27px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">a.</p>
                <p className="w-[542px] h-[81px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">{point5}</p>
            </div>
        </div>

        {/** six */}
        <div className="flex flex-col gap-4 mb-6">
            <h2 className="w-[619px] h-[27px] font-poppins font-semibold text-[18px] leading-[27px] text-[#00000A]">{heading6}</h2>
            <div className="flex gap-5 ml-7">
                <p className="w-[16px] h-[27px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">a.</p>
                <p className="w-[542px] h-[54px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">{point6}</p>
            </div>
        </div>
    </div>
  )
}

export default Issues