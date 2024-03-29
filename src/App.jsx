import { useState } from 'react'
import TypeForm from './components/TypeForm';
import SignupSection from './components/SignupSection';
import { LanguageProvider } from './components/LanguageContext';
import './index.css';



function App() {
  return (
    <LanguageProvider>
      <div className='flex justify-center items-center h-screen overflow-hidden'>
        <div className='flex-1 lg:block hidden bg-[#191919] min-h-screen justify-center items-center '>
          <SignupSection />
        </div>
        <div className='flex-1 grid basis-[10%] bg-white rounded-2xl h-full overflow-auto rounded-tl-3xl px-4 md:p-0 rounded-bl-3xl ml-[-20px] '>
          <TypeForm />
        </div>
      </div >
    </LanguageProvider>
  );
}

export default App; 
