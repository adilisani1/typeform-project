import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';



const SignupSection = () => {
    const { language, setLanguage } = useLanguage();

    const translations = {
        signUp: {
            English: "Sign up",
            Español: "Registrarse",
        },
        comeOnIn: {
            English: "and come on in",
            Español: "y entra",
        },
        copyright: {
            English: "© Typeform",
            Español: "© Typeform",
        }
    };

    const getText = (key) => translations[key][language];

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className="">
                <h1 className='text-white font-apercu text-center text-[36px] leading-[44px]'>{getText('signUp')}</h1>
                <p className='text-white text-[36px] leading-[44px] mb-[30px]'>{getText('comeOnIn')}</p>
            </div>
            <img className='max-w-[366px]' src="./product-sample.webp" alt="Product Sample" />
            <p className="absolute bottom-[24px] text-white text-sm leading-[14px]">{getText('copyright')}</p>
        </div>
    );
}

export default SignupSection;
