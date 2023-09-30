import React, { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import Navbar from '../Components/Navbar';
import '../index.css';
import AllData from '../redux/data';
import { fetchQuestion, useFetchQuestion } from '../redux/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetQuest, resetResult } from '../redux/reducers';

export default function Home() {

  const Navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if (!localStorage.getItem('token')) {
      Navigate('sign')
    }
  })

   
  

  return (
    <div className='min-h-screen flex flex-col'>
      
      {/* Navbar */}
        <Navbar />

      <div className=' sm:pl-24 pl-4 pr-28 w-full items-center justify-center flex  flex-[1] bg-[radial-gradient(white,white,#c3d5fb)]'>
        <div className='grid grid-cols-[3fr_2fr] w-full h-full flex-[1]'>
          <div>
            <div className=' h-full flex justify-center items-start text-black flex-col'>
              <h1 className='w-80 text-[38px] leading-10 font-extrabold mb-4'>Online Quiz Form Templates</h1>
              <p className='font-semibold p-1 sm:w-96 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, repellat ipsam accusamus incidunt ullam itaque expedita odio enim facere vel eos dolore quia sequi nostrum, repellendus ad, delectus perspiciatis iure?, repellendus ad, delectus perspiciatis iure?</p>
              
              <button onClick={()=>{Navigate('quizzes')}} className='signbutton1 w-32 font-extrabold border border-[#234C92] rounded-xl flex justify-center items-center gap-2 mt-4'>Start</button>
            </div>
          </div>
          <div className='justify-self-start'>
            <img className='justify-self-start lg:block hidden' src="https://i.ibb.co/vPWGmCW/Online-test-rafiki.png" alt="Online-test-rafiki" border="0" />
          </div>
        </div>
      </div>
     
     
     
     
     
      
    </div>
          
  );
}
