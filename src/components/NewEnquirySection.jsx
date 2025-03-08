import React from 'react'
import FAQSection from './FAQSection';

const NewEnquirySection = () => {
  return (
    <div className="relative py-16 md:py-24" id="about">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className='relative z-10'>
        <FAQSection />
      </div>
    </div>
  );
}

export default NewEnquirySection
