import React from 'react'

const Button = ({text}) => {
  return (
    <div className='flex justify-center items-center flex-col w-[200px] my-8 h-[60px] bg-gold-gradient rounded-md text-white'>
        <h2 className='text-slate-300'>
            {text}
        </h2>
    </div>
  )
}

export default Button