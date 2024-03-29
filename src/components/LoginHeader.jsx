import React, { useState } from 'react';
import { IoEarthSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useLanguage } from './LanguageContext';


const LoginHeader = () => {
    const { language, setLanguage } = useLanguage();

    const [isLangOpen, setIsLangOpen] = useState(false);
    const alreadyHaveAccount = language === 'English' ? 'Already have an account?' : '¿Ya tienes una cuenta?';
    const loginText = language === 'English' ? 'Login' : 'Iniciar sesión';

    const toggleDropdown = () => setIsLangOpen(!isLangOpen);
    const handleLanguageSelect = (lang) => {
        setLanguage(lang)
        setIsLangOpen(false)
    }

    return (
        <div className='flex justify-between items-center row-start-1 px-5 py-3'>
            <div className='flex items-center relative'>
                <IoEarthSharp className='text-lg' />
                <div className='relative flex items-center'>
                    <div className='ml-1'>
                        <button className='text-gray-700 text-sm' onClick={toggleDropdown}>{language}</button>
                    </div>
                    <div className='flex items-center pr-2 pointer-events-none'>
                        <RiArrowDropDownLine className='text-lg text-gray-700' />
                    </div>

                    {isLangOpen && (
                        <div className='absolute z-10 mt-1 top-7 transition-all duration-150 w-32 bg-white  rounded-md shadow-lg' >
                            <a href="#" onClick={() => handleLanguageSelect('English')} className='block px-4 py-2 text-sm min-h-[32px] m-0 text-gray-700 hover:bg-gray-100'>English</a>
                            <a href="#" onClick={() => handleLanguageSelect('Español')} className='block px-4 py-2 text-sm min-h-[32px] m-0 text-gray-700 hover:bg-gray-100'>Español</a>
                        </div>
                    )}
                    {/* <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className=' bg-transparent border-none text-gray-700 text-sm rounded-md pr-8 pl-2 py-1 appearance-none focus:outline-none focus:ring-0 '
                    >
                        <option value="English">English</option>
                        <option value="Español">Español</option>
                    </select> */}
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
