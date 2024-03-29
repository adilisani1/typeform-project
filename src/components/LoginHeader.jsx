import React, { useState } from 'react';
import { IoEarthSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useLanguage } from './LanguageContext';


const LoginHeader = () => {
    const { language, setLanguage } = useLanguage();

    const alreadyHaveAccount = language === 'English' ? 'Already have an account?' : '¿Ya tienes una cuenta?';
    const loginText = language === 'English' ? 'Login' : 'Iniciar sesión';

    return (
        <div className='flex justify-between items-center row-start-1 px-5 py-3'>
            <div className='flex items-center relative'>
                <IoEarthSharp className='text-xl' />
                <div className='relative'>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                        <RiArrowDropDownLine className='text-lg text-gray-700' />
                    </div>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className='bg-ad border-none text-gray-700 text-sm rounded-md pr-8 pl-2 py-1 appearance-none focus:outline-none focus:ring-0 '
                    >
                        <option value="English">English</option>
                        <option value="Español">Español</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-end items-center'>
                <span className='mr-2 text-[14px]'>{alreadyHaveAccount}</span>
                <a href='#' className='px-2 border py-1 text-[12px] rounded-md border-[#000000]'>{loginText}</a>
            </div>
        </div>
    );
};

export default LoginHeader;
