import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Characteristic = () => {
	useEffect(() => {
		AOS.init({ once: true, duration: 900, delay: 50, offset: 60 });
	}, []);

	return (
		<section className='mt-20 px-4 sm:px-6 lg:px-16'>
			<div className='flex flex-col md:flex-row md:justify-between md:items-center mb-8'>
				<div data-aos='fade-right'>
					<h6 className='uppercase text-xs tracking-widest text-gray-500 mb-1'>REALIBLE & QUICK SETUP</h6>
					<h2 className='font-black text-2xl sm:text-3xl md:text-4xl'>CHARACTERISTIC</h2>
				</div>
				<div className='flex items-center gap-3 mt-4 md:mt-0' data-aos='fade-left'>
					<span className='font-black text-lg sm:text-xl'>5.0</span>
					<img src='https://img.icons8.com/color/48/000000/nodejs.png' alt='Node.js' className='w-6 h-6' />
				</div>
			</div>
			<div className='grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 mb-6'>
				{Array.from({ length: 6 }).map((_, idx) => (
					<div
						key={idx}
						className='bg-gray-100 rounded-xl p-2 sm:p-4 flex items-center justify-center'
						data-aos='zoom-in'
						data-aos-delay={idx * 70}>
						<img
							src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=80&q=80&sig=${idx}`}
							alt='Server'
							className='w-12 h-12 sm:w-16 sm:h-16 object-cover'
						/>
					</div>
				))}
			</div>
			<ul className='text-xs sm:text-sm text-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-1 font-medium'>
				<li data-aos='fade-up'>
					<span className='font-black'>CPU Power 128-Core Gold / Platinum</span> Processors
				</li>
				<li data-aos='fade-up' data-aos-delay='100'>
					<span className='font-black'>512 GB DDR4 ECC</span> Registered RAM +
				</li>
				<li data-aos='fade-up' data-aos-delay='200'>
					<span className='font-black'>1 048 128 TB NVMe SSD</span>
				</li>
			</ul>
		</section>
	);
};

export default Characteristic;
