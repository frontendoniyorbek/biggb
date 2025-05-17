import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CTA = () => {
	useEffect(() => {
		AOS.init({ once: true, duration: 900, offset: 60 });
	}, []);

	return (
		<section className='mt-20 px-4 sm:px-6 flex justify-center'>
			<div
				className='bg-black text-white px-4 sm:px-8 md:px-12 py-8 md:py-10 rounded-3xl w-full max-w-3xl flex flex-col md:flex-row justify-between items-center shadow-2xl'
				data-aos='zoom-in'>
				<div className='mb-4 md:mb-0 md:mr-10 text-center md:text-left'>
					<span className='block text-xl sm:text-2xl font-bold'>
						Sign Up For <span className='text-yellow-300'>Big Data</span> Today
					</span>
				</div>
				<div>
					<span className='block mb-2 text-base sm:text-lg'>
						Start GB{' '}
						<span className='font-black'>
							$0.99/<span className='text-white'>Day</span>
						</span>
					</span>
					<button className='bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition'>
						CONFIGURATION
					</button>
				</div>
			</div>
		</section>
	);
};

export default CTA;
