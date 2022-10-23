import React from 'react';
import styles from '../styles';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex flex-col justify-start mr-10'>
        <img src={logo} alt="Bank_logo" className='w-[266px] h-[72px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payment easy, reliable and secure</p>
      </div>
      <div className='flex-1.5 w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 ml-0 md:ml-10'>
        {
          footerLinks.map(links => (
            <div key={links.title} className='flex flex-col ss:my-0 my-4 min-w-[150px] '>
              <h4 className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}>{links.title}</h4>
              <ul className='list-none mt-4'>
                {links.links.map((link, index) => (
                  <li key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite  hover:text-secondary cursor-pointer ${index !== links.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                      {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
      </div>
    <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
    <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>&copy; 2022 HooBank All Rights Resevered</p>
    <div className='flex flex-row md:mt-0 mt-6'>
      {socialMedia.map((social, index) => (
        <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
      ))
      }
    </div>
        </div>
    </footer>
  )

export default Footer
