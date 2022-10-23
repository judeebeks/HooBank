import React from 'react';
import { google, apple, bill } from '../assets';
import styles, {layout} from '../styles'

const Billings = () => {
  return (
    <section id="billing" className={`${layout.sectionReverse} `}> 
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="Billing Icons" className='w-[100%] h-[100%] relative z-[5]' />   
       <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
       <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

        </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='hidden sm:block' /> billing & Invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque ullam asperiores at, error molestiae?</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="Apple Store" className='w-[128px] h-[42px] mr-5 cursor-pointer' />
          <img src={google} alt="Google Playstore" className='w-[128px] h-[42px] mr-5 cursor-pointer' />
        </div>
        </div>
    </section >
  )
}

export default Billings
