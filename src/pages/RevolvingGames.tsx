import React from 'react'
import { Link } from 'react-router-dom';

const CustomIcon = ({ width = 28, height = 29, fill = '#38E8EE', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 28 29"
    fill="none"
    {...props}
  >
    <path
      d="M13.65 3.77251C13.7604 3.72433 13.8795 3.69946 14 3.69946C14.1205 3.69946 14.2396 3.72433 14.35 3.77251C18.6644 5.65831 22.7798 7.97005 26.635 10.6733C26.7709 10.7686 26.8768 10.9006 26.9405 11.0538C27.0043 11.207 27.0231 11.3752 26.9948 11.5387C26.9666 11.7022 26.8924 11.8543 26.781 11.9773C26.6696 12.1003 26.5255 12.189 26.3655 12.2332C22.3631 13.3386 18.4903 14.8686 14.8132 16.7972L14.8097 16.7995C14.6767 16.8695 14.5448 16.9383 14.413 17.0095C14.2861 17.0773 14.1445 17.1128 14.0006 17.1128C13.8567 17.1128 13.7151 17.0773 13.5882 17.0095C12.011 16.1678 10.3966 15.3978 8.75 14.7018V14.4405C8.75 14.2877 8.82817 14.1512 8.95067 14.0777C10.7116 13.0105 12.5232 12.0294 14.3792 11.1377C14.5883 11.0371 14.749 10.8576 14.8258 10.6386C14.9026 10.4196 14.8892 10.179 14.7887 9.96984C14.6881 9.76068 14.5086 9.60003 14.2896 9.52323C14.0705 9.44643 13.83 9.45978 13.6208 9.56035C11.7142 10.4765 9.85317 11.4845 8.04417 12.5808C7.7868 12.737 7.56478 12.945 7.39223 13.1917C7.21969 13.4383 7.10041 13.7182 7.042 14.0135C5.27008 13.3317 3.4658 12.7372 1.63567 12.232C1.47571 12.1878 1.33161 12.0991 1.22018 11.9761C1.10875 11.8532 1.03459 11.7011 1.00634 11.5375C0.978084 11.374 0.996912 11.2058 1.06062 11.0526C1.12434 10.8994 1.2303 10.7675 1.36617 10.6722C5.22105 7.96938 9.33606 5.65803 13.65 3.77251Z"
      fill={fill}
    />
    <path
      d="M15.2367 18.5518C18.1023 17.0209 21.0946 15.7398 24.1803 14.7228C24.3367 16.3725 24.437 18.0397 24.4778 19.7208C24.4824 19.8971 24.4335 20.0706 24.3378 20.2186C24.242 20.3666 24.1038 20.4822 23.9412 20.5503C20.634 21.9316 17.4674 23.628 14.4853 25.616C14.3416 25.7118 14.1727 25.763 14 25.763C13.8273 25.763 13.6584 25.7118 13.5147 25.616C10.5329 23.628 7.36678 21.9316 4.06 20.5503C3.89737 20.4825 3.75901 20.3671 3.66305 20.2193C3.56708 20.0715 3.51798 19.8982 3.52217 19.722C3.563 18.0397 3.66333 16.3737 3.81967 14.7217C4.89417 15.0763 5.95467 15.4613 7 15.8767V17.3583C6.74792 17.5036 6.53603 17.7094 6.38349 17.9571C6.23095 18.2048 6.14258 18.4867 6.12636 18.7771C6.11015 19.0676 6.16661 19.3575 6.29063 19.6207C6.41465 19.8839 6.60232 20.112 6.83667 20.2843C6.73167 20.7277 6.57767 21.1628 6.3735 21.5793C6.90083 21.8278 7.42467 22.0857 7.94383 22.3493C8.23648 21.7541 8.45248 21.1241 8.58667 20.4745C8.8817 20.3433 9.13469 20.1331 9.31764 19.867C9.50059 19.601 9.60637 19.2895 9.62328 18.9671C9.64019 18.6446 9.56756 18.3238 9.41344 18.0401C9.25931 17.7564 9.0297 17.5208 8.75 17.3595V16.607C10.1128 17.2024 11.4516 17.8511 12.7633 18.5518C13.1439 18.7551 13.5686 18.8614 14 18.8614C14.4314 18.8614 14.8561 18.7551 15.2367 18.5518Z"
      fill={fill}
    />
    <path
      d="M5.20567 23.2056C5.69567 22.7168 6.08417 22.1673 6.37233 21.5781C6.90083 21.8278 7.42467 22.0856 7.94383 22.3505C7.5621 23.1258 7.0552 23.833 6.4435 24.4435C6.27763 24.598 6.05824 24.6822 5.83156 24.6782C5.60487 24.6742 5.38859 24.5823 5.22827 24.422C5.06796 24.2617 4.97613 24.0454 4.97213 23.8187C4.96813 23.5921 5.05227 23.3727 5.20683 23.2068L5.20567 23.2056Z"
      fill={fill}
    />
  </svg>
);


const Plusicon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g opacity="0.6">
      <path d="M11.1429 11.1429V6H12.8571V11.1429H18V12.8571H12.8571V18H11.1429V12.8571H6V11.1429H11.1429Z" fill="#E6DBDB"/>
    </g>
  </svg>
);

const Quotes = () =>(
  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
    <path d="M17.3194 31.98H5.96008V18.5816C5.96008 14.9799 6.71737 12.2425 8.23194 10.3696C9.89798 8.4247 12.6999 7.30816 16.6378 7.02002V13.3951C15.2747 13.3951 14.1388 13.9353 13.23 15.0159C12.7757 15.5921 12.5485 16.7087 12.5485 18.3655V20.4185H17.3194V31.98ZM35.0399 31.98H23.6806V18.5816C23.6806 14.9799 24.3622 12.3506 25.7253 10.6938C27.5428 8.53275 30.4205 7.30816 34.3584 7.02002V13.3951C32.0108 13.3951 30.6855 14.5116 30.3826 16.7447C30.3069 17.0328 30.269 17.5731 30.269 18.3655V20.4185H35.0399V31.98Z" fill="#8C8C8B"/>
  </svg>
);


const RevolvingGames:React.FC = () => {
  return (
    <div className='pt-[80px]'>
      <div className='text-[20px] text-[#A1A1AA] leading-8 px-[104px] pb-[51px]'>
        Casestudies {'>'} <span className='text-[#00C6CC]'>Revolving Games</span>
      </div>
      <div className='flex items-center gap-[122px] px-[104px] pb-[100px]'>
        <div className='flex flex-col gap-[48px]'>
          <h1 className='text-white text-[44px] leading-[54px] tracking-[-1.2px] font-bold'>Building a seamless Web2 + Web3 Purchases for a AAA Game</h1>
          <p className='text-[22px] text-[#959595] leading-8'>Clyde built a secure, responsive checkout embedded in the game server, allowing players to pay instantly with Stripe or USDT without ever leaving gameplay.</p>
          <div className='flex'>
            <img src="/assets/avatargroup.png" alt="" className='h-[46px] pr-5'/>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
              <circle cx="4.16992" cy="4.16992" r="4.16992" fill="white"/>
              </svg>
              <p className='text-white pl-2 font-medium'>400k users</p>
            </div>
          </div>
        </div>
        <img src="/assets/revimg.png" alt="" className='w-[44.2%]'/>
      </div>


      {/* Overview */}
      <div className='px-[104px]'>
      <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[104px] pt-[60px] pb-[70px] '>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>Overview</h1>
        <p className='text-[22px] text-[#BEBEBE] font-medium leading-8'>A next-gen game needed a frictionless, in-game purchase experience that worked seamlessly across fiat (Stripe) and crypto (USDT) — without pulling players out of the gameplay. Clyde was brought in to design and build a secure, responsive web purchase flow integrated with their game server.</p>
      </div>

      {/* How did we build Revolving Games? */}
      <div className='px-[104px]'>
      <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='pt-[80px] pb-[70px]  '>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px] px-[104px]'>How did we build Revolving Games?</h1>
        <p className='px-[104px] pb-[70px] text-[#A1A1AA] text-[22px] '>Building a revolving game requires smart design, real-time tech, and seamless monetization. Here are the four key steps:</p>
        <div className=' bg-[url("/assets/curvbg1.png")] bg-cover '>
        <div className='flex justify-between px-[147px] gap-[167px]'>
          <div>
            <img src="/assets/1.png" alt="" className=''/>
            <p className='text-center text-[24px] text-white pt-10'>Core Gameplay <br /> Development</p>
          </div>
          <div>
            <img src="/assets/2.png" alt="" className=''/>
            <p className='text-center text-[24px] text-white pt-10'>Backend & Live <br />Server Integration</p>
          </div>
          <div>
            <img src="/assets/3.png" alt="" className=''/>
            <p className='text-center text-[24px] text-white pt-10'>Monetization & <br />Purchase Flow</p>
          </div>
          <div>
            <img src="/assets/4.png" alt="" className=''/>
            <p className='text-center text-[24px] text-white pt-10'>Live Operations & <br />Content Updates</p>
          </div>
        </div>
          
        </div>
      </div>


      {/* Challenges */}
      <div className='px-[104px]'>
      <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[104px] pt-[60px] pb-[70px]'>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>Challenges</h1>
        <p className='text-[22px] text-[#A1A1AA] leading-8'>The client needed a seamless, mobile-optimized purchase system supporting both fiat and crypto payments without disrupting gameplay. It required real-time backend synchronization, secure authentication and payment verification, plus reliable fallback handling for failed crypto transactions—ensuring a smooth and secure user experience.</p>
      </div>


      {/* Tech Stack */}
      <div className='px-[104px]'>
      <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[104px] pt-[60px]'>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>Tech Stack</h1>
        <div className='flex flex-col gap-[35px]'>
          <div className='flex gap-[34px]'>
            <div className='flex items-center w-1/2 pl-[28px] py-[31px] border border-[#212121] rounded-[24px]'>
              <div className='p-[15px] bg-[#EBEBEB0D] rounded-xl'>
                <CustomIcon/>
              </div>
              <p className='text-[22px] leading-7 text-[#EFEFEF] pl-[43px]'><span className='text-[#939393]'>Frontend:</span>React.js (S3 Hosted)</p>
            </div>
            <div className='flex items-center w-1/2 pl-[28px] py-[31px] border border-[#212121] rounded-[24px]'>
              <div className='p-[15px] bg-[#EBEBEB0D] rounded-xl'>
                <CustomIcon/>
              </div>
              <p className='text-[22px] leading-7 text-[#EFEFEF] pl-[43px]'><span className='text-[#939393]'>Backend:</span>Express.js on EC2, PostgreSQL (RDS)</p>
            </div>
          </div>
          <div className='flex gap-[34px]'>
            <div className='flex items-center w-1/2 pl-[28px] py-[31px] border border-[#212121] rounded-[24px]'>
              <div className='p-[15px] bg-[#EBEBEB0D] rounded-xl'>
                <CustomIcon/>
              </div>
              <p className='text-[22px] leading-7 text-[#EFEFEF] pl-[43px]'><span className='text-[#939393]'>Payments:</span>Stripe (fiat), USDT on-chain (crypto)</p>
            </div>
            <div className='flex items-center w-1/2 pl-[28px] py-[31px] border border-[#212121] rounded-[24px]'>
              <div className='p-[15px] bg-[#EBEBEB0D] rounded-xl'>
                <CustomIcon/>
              </div>
              <p className='text-[22px] leading-7 text-[#EFEFEF] pl-[43px]'><span className='text-[#939393]'>Security:</span>JWT login, webhook validation</p>
            </div>
          </div>
        </div>
      </div>

      {/* images */}
      <div className='px-[104px] pt-[110px] flex flex-col gap-[46px]'>
        <div className='flex gap-[50px]'>
          <img src="/assets/revimg1.png" alt="" className='w-[54.45%] h-auto'/>
          <img src="/assets/revimg2.png" alt="" className='w-[41.75%]'/>
        </div>
        <img src="/assets/revimg3.png" alt="" />
      </div>


      {/* What we deliver */}
      <div className='px-[104px] pt-[150px] pb-[80px]'>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[59px]'>What We Delivered</h1>
        <div className='flex gap-[52px]'>
          <div className='flex flex-col justify-between w-1/2'>
            <div className='flex items-center py-[21px] px-[21px] bg-[#121315] border border-[#171717] rounded-lg'>
              <Plusicon/>
              <p className='text-[18px] text-white leading-[30px] pl-[12px]'>Boosted purchase conversion rates</p>
            </div>
            <div className='flex items-center py-[21px] px-[21px] bg-[#121315] border border-[#171717] rounded-lg'>
              <Plusicon/>
              <p className='text-[18px] text-white leading-[30px] pl-[12px]'>Improved User retention</p>
            </div>
            <div className='flex items-center py-[21px] px-[21px] bg-[#121315] border border-[#171717] rounded-lg'>
              <Plusicon/>
              <p className='text-[18px] text-white leading-[30px] pl-[12px]'>Reduced drop-offs across payment flows</p>
            </div>
            <div className='flex items-center py-[21px] px-[21px] bg-[#121315] border border-[#171717] rounded-lg'>
              <Plusicon/>
              <p className='text-[18px] text-white leading-[30px] pl-[12px]'>Boosted purchase conversion rates</p>
            </div>
            <div className='flex items-center py-[21px] px-[21px] bg-[#121315] border border-[#171717] rounded-lg'>
              <Plusicon/>
              <p className='text-[18px] text-white leading-[30px] pl-[12px]'>Boosted purchase conversion rates</p>
            </div>
          </div>

          <img src="/assets/deliver.png" alt="" className='w-1/2'/>
        </div>
      </div>
      

      {/* Tracking Performance and Measuring Results */}
      <div className='px-[104px]'>
      <div className='px-[104px] h-[1px] w-full bg-[#161515]'></div>
      </div>
      <div className='px-[104px] pt-[70px] '>
        <h1 className=' text-[24px] sm:text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br text-center sm:text-left from-white to-[#71717A] text-transparent bg-clip-text leading-tight pt-[40px] sm:pt-0 pb-[40px]'>Tracking Performance and Measuring Results</h1>
        <div className='flex gap-[80px]'>
          <img src="/assets/tracking.png" alt="" className='w-[69.6%]'/>
          <div className='flex flex-col w-[35.4%] gap-[25px]'>
            <div style={{background: 'linear-gradient(180deg, rgba(0, 142, 153, 0.26) 0%, rgba(255, 255, 255, 0.00) 100%)'}} className='flex flex-col items-center gap-[8px] h-1/2 justify-center  rounded-2xl'>
              <h1 className='text-[40px] text-white font-semibold text-center'>70%</h1>
              <p  className='text-[#B5B2B2] text-[16px] '>Increase in player retention</p>
            </div>
            <div style={{background: 'linear-gradient(180deg, rgba(0, 142, 153, 0.26) 0%, rgba(255, 255, 255, 0.00) 100%)'}} className='flex flex-col items-center gap-[8px] h-1/2 justify-center  rounded-2xl'>
              <h1 className='text-[40px] font-semibold text-white text-center'>3x</h1>
              <p  className='text-[#B5B2B2] text-[16px] '>Longer average play sessions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder */}
      <div className='px-[104px] pt-[84px]'>
        <div className='flex pl-[60px] pr-[79px] py-[53px] gap-[70px] bg-[#111215] rounded-[28px]'>
          <div className='flex flex-col items-center w-[660px]  '>
            <img src="/assets/revfounder.png" alt="" className='h-[102px] w-[102px]' />
            <h1 className='text-[20px] text-[#FFFCF6] pt-[26px] text-center font-semibold'>Nick Chadda</h1>
            <p className='text-[#84A5AA] text-[15px] leading-[24px] text-center'>Co-Founder @ Revolving Games</p>
          </div>
          <div className='flex flex-col justify-between'>
            <Quotes/>
            <p className='text-[20px] text-[#DFDFDF] '>Clyde nailed it. The new web purchase flow is seamless, secure, and perfectly integrated with our gameplay. <span className='text-[#32B9C4] font-medium'>Huge boost in conversions, and way fewer support issues.</span> We finally have a web experience that matches the quality of our games.</p>
          </div>
        </div>
      </div>

      {/* Ready to build */}
      <div className='px-[104px] pt-[80px] pb-[68px]'>
        <div className='bg-[url("/assets/bg5.png")] bg-cover bg-left-bottom flex flex-col items-center rounded-[32px]'>
          <h1 className='text-[48px] text-[#A0C2FF] font-semibold text-center pt-[98px]'>Ready to build a modern hybrid <br />payment flow for your game?</h1>
          <div className='pt-[43px] pb-[163px]'>
          <Link to="/contact">
          <button className='text-[16px] text-white bg-[#008E99] rounded-xl px-[20px] py-[12px]'>Contact Us</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevolvingGames