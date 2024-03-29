import React from 'react'

const SignupSection = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className="">
                <h1 className='text-white font-apercu text-center text-[36px] leading-[44px]'>Sign up</h1>
                <p className='text-white text-[36px] leading-[44px] mb-[30px]'>and come on in</p>
            </div>
            <img className='max-w-[366px]' src="./product-sample.webp" />
            <p className="absolute bottom-[24px] text-white text-sm leading-[14px]">© Typeform</p>
        </div>
    )
}

export default SignupSection