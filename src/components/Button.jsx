import React from 'react'

const Button = ({makeStyle, btnText}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${makeStyle}`}>
      {btnText}
    </button>
  )
}

export default Button
