import pensionImage from "../assets/pension.png";
import pensionWhite from "../assets/pension-white.png";

function HeroCenter() {
  return (
    <div className="w-full h-full rounded-[8px] flex flex-col justify-center relative bg-gradient-to-l to-[#000000] from-[#024e02]">
        
        {/** group image */}
        <div className="w-[170px] max-sm:w-[108px] h-[70px] max-sm:h-[48px] absolute bg-white rounded-[6px] left-[410px] max-sm:left-[300px] top-[40px] max-sm:top-[250px] flex items-center justify-center">
            <img src={pensionImage} alt='company-image' className="w-[150px] h-[49px] max-sm:w-[98px] max-sm:h-[31px]" />
        </div>

        {/** container image and text */}
        <div className="w-[438px] h-[140px] max-sm:w-[326px] max-sm:h-[104px] flex flex-col gap-6 max-sm:gap-0 ml-10 max-sm:ml-20">
            <img src={pensionWhite} alt='conatiner' className="" />
            <div className="w-[300px] h-[100px] max-sm:hidden">
                <h2 className="font-poppins font-normal text-[16px] leading-[24px] text-white">
                    Carpe Diem Pension, a blockchain-based retirement fund, offers permanent payouts through CDP deposits, with a 4.32% annual inflation claimable by depositors.
                </h2>
            </div>
        </div>
        
    </div>
  )
}

export default HeroCenter