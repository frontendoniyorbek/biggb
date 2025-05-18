import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your icon (replace with your actual icon path)
import verifiedIcon from '../assets/verified-green.svg'; // example path

const BigDataStatus = () => {
	useEffect(() => {
		AOS.init({ once: true, duration: 900 });
	}, []);

	return (
		<section
			className='
        w-full flex justify-center items-center

      '
			data-aos='fade-up'>
			<div
				className='
          w-full max-w-[1554px]
          bg-white
          rounded-[56px]
          shadow-[0px_0px_25px_0px_rgba(0,0,0,0.04)]
          flex flex-col md:flex-row
          justify-between items-center
          md:py-[86px] py-9  px-8 sm:px-16 md:px-28
          relative
          overflow-hidden
        '
				style={{
					backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1.5px, transparent 1.5px)',
					backgroundSize: '20px 20px',
				}}>
				{/* Left: Title & Stat */}
				<div className='w-full md:w-[48%] text-center md:text-left mb-8 md:mb-0'>
					<div className='font-syne font-bold uppercase text-[20px] leading-14 md:text-[32px] tracking-[12%] md:mb-8 sm:mb-6 mb-4'>
						Connect Socet Big Data
					</div>
					<div className='font-syne font-black text-[2.2rem] xs:text-[2.8rem] sm:text-[3.2rem] md:text-[3.4rem] lg:text-[3.8rem] md:mb-7 mb-5'>
						11 278 620
					</div>
					<div className='font-syne font-bold text-[1.1rem] md:text-[1.3rem] uppercase text-[#38e49e] tracking-[0.1em]'>
						ONLINE
					</div>
				</div>
				{/* Right: Features */}
				<div className='w-full md:w-[48%] flex flex-col gap-5'>
					<div className='flex items-center gap-3 justify-center md:justify-start'>
						<img src={verifiedIcon} alt='Verified' className='w-6 h-6' loading='lazy' />
						<span className='font-syne text-black text-[1.1rem] md:text-[1.25rem]'>
							<span className='font-bold'>24/7/365 Online</span> Online
						</span>
					</div>
					<div className='flex items-center gap-3 justify-center md:justify-start'>
						<img src={verifiedIcon} alt='Verified' className='w-6 h-6' loading='lazy' />
						<span className='font-syne text-black text-[1.1rem] md:text-[1.25rem]'>
							Secure Your Files With
							<span className='font-bold ml-1'>Automatic Backups</span>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BigDataStatus;
