import RightCard from "./RightCard";
import imageOne from "../assets/detail_image1.png";
import imageTwo from "../assets/detail_image2.png";
import DataInformation from "./DataInformation";
import NestedDataInformation from "./NestedDataInformation";
import DataInformationBullet from "./DataInformationBullet";
import Issues from "./Issues";
import RatingCard from "./RatingCard";

function DetailsSection() {
  return (
    <div className="flex max-sm:flex-col justify-between px-[100px] max-sm:px-0 max-sm:p-3 pt-10">

      {/** left section (lengthy) */}
      <div className="lg:w-[70%] max-sm:w-auto max-sm:px-4">
        {/** first block */}
        <div className="w-[617px] h-[135px] max-sm:w-[376px] max-sm:h-[216px] mb-12">
          <h2 className="font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
            Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
            self-managed, inclusive, globally portable fund. Unique for its
            token burn mechanism, it ensures a sustainable 4.32% inflation
            payout. With $143.11k and 41.06% of CDP already burned, it serves 35
            users globally.
          </h2>
        </div>

        {/** second block */}
        <div className="w-[551px] h-[85px] max-sm:w-[381px] max-sm:h-[128px] mb-12">
          <h2 className="font-jost font-bold text-[34px] leading-[42px] text-[#00000A]">
            CarpeDiem Pension&apos;s Flexible, Blockchain-Enabled Future
          </h2>
        </div>

        {/** third para */}
        <div className="w-[613px] h-[324px] max-sm:w-[376px] max-sm:h-[513px] mb-12">
          <p className="font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
            CarpeDiem Pension redefines retirement planning with a unique
            approach that deviates from traditional pension funds. With no
            minimum age for retirement, it offers flexibility and freedom,
            ensuring all genders receive equal treatment. CarpeDiem Pension
            ensures blockchain transparency, anonymity, and global
            accessibility, safeguarding pensions during international
            relocation. Easily transfer pensions to loved ones; share wallet
            access. Re-deposit payouts for increased future benefits.
            Importantly, CarpeDiem Pension prioritizes deposit security by
            avoiding utilizing client funds for internal investments. To become
            a part of this forward-thinking pension scheme, one simply needs to
            install and configure a blockchain wallet.
          </p>
        </div>

        {/** deatil image 1 */}
        <div className="w-[758px] h-[373px]  max-sm:w-[382px] max-sm:h-[187px] mb-12">
          <img
            src={imageOne}
            alt="abcd"
            className="w-auto h-auto rounded-[6px]"
          />
        </div>

        {/** next heading */}
        <div className="w-[643px] h-[128px] max-sm:w-[381px] max-sm:h-[255px] mb-12">
          <h2 className="font-jost font-bold text-[34px] leading-[42.5px] text-[#00000A]">
            CarpeDiem Pension&apos;s Challenges: Enhancing Security Against
            Reentrancy, Front-Running, and Infinite Minting
          </h2>
        </div>

        {/** next para */}
        <div className="w-[614.89px] h-[216px] max-sm:w-[376px] max-sm:h-[351px] mb-12">
          <p className="font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
            CarpeDiem Pension confronts critical security challenges, including
            the risks of reentrancy and front-running exploits.Malicious actors
            may exploit contract vulnerabilities, withdrawing excess funds or
            manipulating transaction timing for unfair advantages. System faces
            infinite minting threats, risking economic stability with endless
            creation of CDP tokens or pension shares. Addressing these
            challenges is paramount to safeguarding the integrity and security
            of CarpeDiem Pension.
          </p>
        </div>

        {/** 2nd image */}
        <div className="w-[640px] h-[370px] max-sm:w-[380px] max-sm:h-[220px] mb-12">
          <img
            src={imageTwo}
            alt="abcd"
            className="w-full h-full rounded-[6px]"
          />
        </div>

        {/** next heading */}
        <div className="w-[620px] h-[85px] max-sm:w-[323px] max-sm:h-[170px] mb-12">
          <h2 className="font-jost font-bold text-[34px] leading-[42.5px] text-[#00000A]">
            CarpeDiem Pension&apos;s Journey Through our Audit Process
          </h2>
        </div>

        {/** lists ul/ol */}
        <div className="flex flex-col gap-12 mb-12">
          <DataInformation
            heading="1. Information Gathering:"
            bullet1="Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents."
            bullet2="Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions."
            bullet3="Discussed client concerns and specific areas of focus for the audit."
          />
          <NestedDataInformation
            heading="2. Manual Code Review:"
            bullet="Conducted a line-by-line review of the smart contract code, focusing on:"
            nestedBullet1="Vulnerability identification: Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc."
            nestedBullet2="Logic flaws: Identifying inconsistencies or unintended behaviors in the code logic."
            nestedBullet3="Tokenomics correctness: Verifying if the code accurately implements the intended economic model and token distribution mechanisms."
            nestedBullet4="Solidity best practices: Compliance with secure coding standards and adherence to established guidelines."
          />
          <DataInformationBullet
            heading="3. Functional Testing"
            bullet1="Developed and executed a comprehensive set of test cases covering various user interactions and edge cases."
            bullet2="Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits."
            bullet3="Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors)."
            bullet4="Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally."
          />
          <DataInformation
            heading="4. Automated Testing:"
            bullet1="Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning."
            bullet2="Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors."
            bullet3="Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour."
          />
          <DataInformationBullet
            heading="5. Reporting & Remediation:"
            bullet1="Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact."
            bullet2="Provided clear recommendations for fixing each vulnerability, including code snippets and best practices."
            bullet3="Collaborated with the CDP team to prioritize and address the identified issues."
            bullet4="Conducted additional verification testing after vulnerability fixes were implemented."
          />
        </div>

        {/** heading */}
        <div className="w-[643px] h-[85px] mb-12">
          <h2 className="font-jost font-bold text-[34px] leading-[42.5px] text-[#00000A]">
            QuillAudits&apos; Strategic Approach to CDP Security Audits
          </h2>
        </div>

        {/** para */}
        <div className="w-[614px] h-[189px] mb-12">
          <h2 className="font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
            We prioritize threat modeling based on platform-specific risks.
            Security-first, we identify and mitigate vulnerabilities beyond
            functionality testing. Using white-box and black-box tests, we
            conduct thorough vulnerability assessments. Maintaining
            transparency, we communicate openly with the CDP team. Emphasizing
            clarity, we present actionable insights for efficient issue
            resolution.
          </h2>
        </div>

        {/** heading */}
        <div className="w-[643px] h-[85px] mb-12">
          <h2 className="font-jost font-bold text-[34px] leading-[42.5px] text-[#00000A]">
            Comprehensive Audit Discoveries and Remediation Strategies
          </h2>
        </div>

        {/** para */}
        <div className="w-[614px] h-[108px] mb-12">
          <h2 className="font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
            Throughout the audit process, we unearthed a total of 33 issues,
            spanning from minor concerns to critical vulnerabilities. Among
            these, some of the critical issues identified were: Here's how we
            remediated them :
          </h2>
        </div>

        <div className="mb-12">
          <Issues
            heading1="1. Unauthorized Claim/Compound:"
            heading2="2. Precision Loss in mintCDP():"
            heading3="3. Multiplication Accuracy:"
            heading4="4. Incorrect Share Allocation:"
            heading5="5. Logic Error in Referral Handling:"
            heading6="6. Referral Exploitation:"
            point1="Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time."
            point2="Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function."
            point3="Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations."
            point4="The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources."
            point5="A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system"
            point6="Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity."
          />
        </div>

        {/** heading */}
        <div className="w-[643px] h-[43px] mb-10">
          <h2 className="font-jost font-bold text-[34px] leading-[42.5px] text-[#00000A]">
            Remediation & Impact:
          </h2>
        </div>

        {/** para */}
        <div className="w-[614px] h-[81px] mb-10">
          <h2 className="font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
            All identified vulnerabilities were addressed by the CDP team,
            significantly enhancing the smart contract&apos;s security posture.
            Key improvements include
          </h2>
        </div>

        {/** bullet pointe */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex gap-4">
            <span className="mt-2">
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="8" height="8" rx="4" fill="#253858" />
              </svg>
            </span>
            <h2 className="w-[578px] h-[27px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
              Implementation of reentrancy protection mechanisms.
            </h2>
          </div>
          <div className="flex gap-4">
            <span className="mt-2">
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="8" height="8" rx="4" fill="#253858" />
              </svg>
            </span>
            <h2 className="w-[578px] h-[54px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
              Accurate handling of decimal values using established libraries or
              best practices.
            </h2>
          </div>
          <div className="flex gap-4">
            <span className="mt-2">
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="8" height="8" rx="4" fill="#253858" />
              </svg>
            </span>
            <h2 className="w-[578px] h-[27px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
              Revised calculations with proper scaling factors
            </h2>
          </div>
          <div className="flex gap-4">
            <span className="mt-2">
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="8" height="8" rx="4" fill="#253858" />
              </svg>
            </span>
            <h2 className="w-[578px] h-[54px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
              Fixing logic errors to ensure deposits and waiting periods are
              enforced.
            </h2>
          </div>
          <div className="flex gap-4">
            <span className="mt-2">
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="8" height="8" rx="4" fill="#253858" />
              </svg>
            </span>
            <h2 className="w-[578px] h-[27px] font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
              Addressing referral system vulnerabilities to prevent abuse.
            </h2>
          </div>
        </div>

        {/** link */}
        <div className="w-[642px] h-[54px] mb-12">
          <h2 className="font-poppins font-semibold text-[18px] leading-[27px] text-[#00000A]">
            Embed this tweet :-
            <span className="font-normal text-[#4060fffd] hover:text-[#407AFF] cursor-pointer">
              https://x.com/CarpeDiemCDP/
              <br />
              status/1742906560794296402?s=20
            </span>
          </h2>
        </div>

        {/** para */}
        <div className="w-[630px] h-[135px] mb-12">
          <h2 className="font-poppins font-normal text-[18px] leading-[27px] text-[#00000A]">
            CDP smart contract audit revealed and fixed critical
            vulnerabilities, safeguarding funds and ensuring platform stability.
            This underscores the need for proactive security in blockchain
            projects, crucial for financial asset management. Through audits and
            issue resolution, CDP reinforces platform security, bolstering user
            trust.
          </h2>
        </div>

        {/** card */}
        <div className="w-[609px] h-[417px]">
          <RatingCard />
        </div>
      </div>

      {/** right section */}
      <div className="w-[30%] max-sm:w-full pt-10 max-sm:pt-0 max-sm:hidden">
        <RightCard />
      </div>
    </div>
  );
}

export default DetailsSection;
