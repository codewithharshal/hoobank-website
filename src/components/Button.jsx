import React from 'react'

const Button = (styles) => {
  return (
    <button type='button' className={`py-5 px-8 mt-8 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started

    </button>
  )
}

export default Button