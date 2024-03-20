import heroBgImage from "../assets/hero.png" ;
import HeroCenter from "./HeroCenter";
import Navbar from './Navbar';

function Hero() {
  return (
    <div className="relative">
        <img src={heroBgImage} alt='hero' className='w-[1920px] h-[827px] max-sm:h-[1100px] max-sm:max-w-full' />
        <div className='w-full h-[101.92px] absolute top-0'>
            <Navbar />
            <div className="w-[1200px] max-sm:w-fit h-[2px] bg-white/10 mx-[75px] mt-[20px]"></div>
        </div>

        {/** case study */}
        <div className="max-sm:block hidden absolute top-[130px] left-[40px]">
            <div className="w-[94px] h-[28.8px]">
                <h2 className="w-full h-[19px] font-jost font-medium text-[16px] leading-[19.4px] text-[#ffffff]">Case Studies</h2>
                <div className="w-[80.8px] h-[2.3px] bg-[#2D83EE]"></div>
            </div>
        </div>

        {/** hero-center section */}
        <div className="absolute flex max-sm:flex-col max-sm:items-center max-sm:justify-center top-[200px] max-sm:top-[180px] max-sm:left-0 max-sm:right-1 left-[100px] gap-6 max-sm:gap-0">
            <div className="w-[500px] max-sm:max-w-full max-sm:h-[282px] h-[480px]">
                <HeroCenter />
            </div>
            {/** text */}
            <div className="flex flex-col gap-4 max-sm:gap-8 mt-[140px] max-sm:mt-[70px]">
                <div className="w-[640px] h-[174px] max-sm:w-[329px] max-sm:h-[215px]">
                    <h2 className="font-jost font-medium text-[48px] max-sm:text-[36px] leading-[57px] max-sm:leading-[43px] text-white">Securing Trust : Boosting Security and Strengthening Trust at Carpe Diem Pension</h2>
                </div>
                <div className="w-[541px] h-[90px] max-sm:w-[343px] max-sm:h-[150px]">
                    <h2 className="font-poppins font-normal text-[20px] leading-[30px] text-white">QuillAudits enhances Carpe Diem Pension by addressing 33 vulnerabilities on the Pulse blockchain, boosting security and user trust in digital pensions.</h2>
                </div>
            </div>
        </div>

        <div className="w-[298px] h-[23px] max-sm:w-[344px] max-sm:h-[28px] flex items-center justify-center absolute top-[750px] max-sm:top-[1050px] left-[120px] max-sm:left-[40px]">
            <h2 className="font-jost flex font-medium text-[16px] max-sm:text-[11.5px] text-white/40 max-sm:text-white leading-[24px] max-sm:leading-[27px]">
                {'QuillAudits  --> Resources --> '}<span className="text-white">Case Studies </span><span className="max-sm:block hidden">{" --> Kucoin"}</span>
            </h2>
        </div>
    </div>
  )
}

export default Hero