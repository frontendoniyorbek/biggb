import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ControlPanel = () => {
	useEffect(() => {
		AOS.init({ once: true, duration: 900, delay: 50, offset: 60 });
	}, []);

	return (
		<section className='mt-20 px-4 sm:px-6 lg:px-16'>
			<h3 className='text-center text-base sm:text-lg font-bold tracking-widest mb-2' data-aos='fade-down'>
				QUICK SETUP <span className='font-black'>VPS / VDS</span>
			</h3>
			<h2 className='text-2xl sm:text-4xl md:text-5xl text-center font-black mb-10' data-aos='fade-up'>
				<span className='text-black'>Friendly</span> Control Panel
			</h2>
			<div className='flex flex-col md:flex-row items-center gap-6 justify-center'>
				<div className='bg-white rounded-xl p-6 shadow flex flex-col items-center w-full md:w-60' data-aos='fade-right'>
					<span className='inline-flex items-center gap-2 mb-2 font-bold text-sm'>
						<img src='https://img.icons8.com/color/48/000000/chat--v2.png' alt='chat' className='w-6 h-6' />
						FREE CHAT
					</span>
				</div>
				<div
					className='bg-gray-100 rounded-2xl shadow-xl p-0 overflow-hidden w-full md:w-60 flex justify-center'
					data-aos='zoom-in'>
					<img
						src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=480&q=80'
						alt='Server'
						className='w-40 sm:w-60 h-40 sm:h-60 object-cover'
					/>
				</div>
				<div className='bg-white rounded-xl p-6 shadow flex flex-col items-center w-full md:w-60' data-aos='fade-left'>
					<span className='inline-flex items-center gap-2 font-bold text-sm'>
						<img src='https://img.icons8.com/color/48/000000/database.png' alt='db' className='w-6 h-6' />
						Real Time Database
					</span>
				</div>
			</div>
			<div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='bg-white rounded-xl p-6 sm:p-8 shadow flex flex-col items-start' data-aos='fade-up'>
					<h4 className='font-black text-base sm:text-lg mb-2'>ONE-CLICK DEPLOY</h4>
					<p className='text-xs sm:text-sm text-gray-500'>
						Your Ultimate Tool To Conquer Overwhelming Tasks — Break Big Goals into Small Steps. Check Them Off One By One, And
						Watch Your Progress Reach 100%.
					</p>
				</div>
				<div className='bg-white rounded-xl p-6 sm:p-8 shadow flex flex-col items-start' data-aos='fade-up' data-aos-delay='100'>
					<h4 className='font-black text-base sm:text-lg mb-2'>We Build The Future</h4>
					<ul className='text-xs sm:text-sm text-gray-600 list-disc pl-4'>
						<li>*** Neural Core 4048 GB CPU AI W – Extreme AI Power</li>
						<li>Multi Sup App — Social, Marketplace, AI & Fintech</li>
						<li>Data Center — 1 PB NVMe Ultra-Fast Storage</li>
						<li>10-100 Gb/s</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ControlPanel;
