
function BeforeAfter() {
  return (
    <div className="w-[860px] h-[250px] flex max-sm:flex-col max-sm:justify-center max-sm:items-center gap-10">
        {/** before */}
        <div className="w-[369.5px] h-[250px] max-sm:w-[370px] max-sm:h-[281px] flex flex-col gap-5 mt-5">
            <div className="w-full h-[30px] max-sm:w-[326px] max-sm:h-[25.5px] bg-[#FFABC9]">
                <h2 className="w-[183px] h-[24px] max-sm:w-[183px] max-sm:h-[24px] font-inter font-bold text-[20px] leading-[30px] text-black">
                    Before QuillAudits
                </h2>
            </div>
            <div className="w-[358px] h-[96px] max-sm:w-[326px] max-sm:h-[96px] font-poppins font-normal text-[16px] leading-[24px] text-[#00000A]">
                Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains
            </div>
            <div className="w-[358px] h-[72px] max-sm:w-[340px] max-sm:h-[96px] font-poppins font-normal text-[16px] leading-[24px] text-[#00000A]">
                Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the system&apos;s economic balance.
            </div>
        </div>

        <div className="w-[1px] h-[270px] bg-[#E0E0E4]"></div>

        {/** after */}
        <div className="w-[369.5px] h-[250px] max-sm:w-[370px] max-sm:h-[250px] flex flex-col gap-5 mt-5">
            <div className="w-full h-[30px] max-sm:w-[326px] max-sm:h-[25.5px] bg-[#ABCDFF]">
                <h2 className="w-[183px] h-[24px] max-sm:w-[183px] max-sm:h-[24px] font-inter font-bold text-[20px] leading-[30px] text-black">
                    After QuillAudits
                </h2>
            </div>
            <div className="w-[349.34px] h-[48px] max-sm:w-[349px] max-sm:h-[44px] font-poppins font-normal text-[16px] leading-[24px] text-[#00000A]">
                Implementation of reentrancy protection mechanisms.
            </div>
            <div className="w-[367px] h-[96px] max-sm:w-[370px] max-sm:h-[96px] mt-9 font-poppins font-normal text-[16px] leading-[24px] text-[#00000A]">
                Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.
            </div>
        </div>
    </div>
  )
}

export default BeforeAfter