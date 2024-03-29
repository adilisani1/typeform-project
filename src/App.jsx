import { useState } from 'react'
import TypeForm from './components/TypeForm';
import SignupSection from './components/SignupSection';
import './index.css';


function App() {
  return (
    <div className='flex justify-center items-center h-screen overflow-hidden'>
      <div className='flex-1 bg-[#191919] min-h-screen justify-center items-center '>
        <SignupSection />
      </div>
      <div className='flex-1 grid basis-[10%] bg-white rounded-2xl h-full overflow-auto rounded-tl-3xl p-0 rounded-bl-3xl ml-[-20px] '>
        <TypeForm />
      </div>
    </div >
  );
}

export default App; 
