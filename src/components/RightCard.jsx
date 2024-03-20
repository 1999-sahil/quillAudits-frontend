
function RightCard() {
  return (
    <div className="w-[342px] h-[150px] rounded-[6px] bg-gradient-to-r from-[#7184FD] to-[#2D83EE] p-[1px] flex items-center justify-center shadow-lg shadow-[#5580DB36]">
        <div className="w-full h-full rounded-[5px] bg-[#FFFFFF] flex flex-col gap-5 py-[10px] px-[26px]">
            {/** above text */}
            <div className="">
                <h2 className="w-[91.39px] h-[21px] font-inter font-normal text-[14px] leading-[21px] text-[#808080]">
                    Headquarters
                </h2>
                <h2 className="w-[137px] h-[24px] font-inter font-medium text-[16px] lading-[24px] text-[#00000A]">
                    Switzerland
                </h2>
            </div>
            <div>
                <h2 className="w-[73.72px] h-[21px] font-inter font-normal text-[14px] leading-[21px] text-[#808080]">
                    Chain
                </h2>
                <h2 className="w-[185.93px] h-[24px] font-inter font-medium text-[16px] lading-[24px] text-[#00000A]">
                    Pulse Blockchain
                </h2>
            </div>
        </div>
    </div>
  )
}

export default RightCard