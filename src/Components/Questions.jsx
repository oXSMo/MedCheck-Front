import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../redux/fetch';

export default function Questions({ setChecked }) {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers, trace },
    results: { result },
  } = useSelector((state) => state);

  return (
    <>
      {/* <h2 className='text-2xl my-4 text-center'>{Questions?.question}</h2> 
        <ul className='flex flex-col h-full justify-around w-80 justify-self-center '>
        {Questions?.options.map((element,i)=>(
            <li key={`${i}-${trace}`} className='items-center cursor-pointer border-b border-gray-700 flex '>
                <input 
                    type="radio" 
                    name={`options-${trace}`}
                    required
                    id={`Quest${i}`}
                    onChange={()=>{setChecked(i)}}
                    className='cursor-pointer'
                    
                />
                <label htmlFor={`Quest${i}`} className='px-5 text-2xl py-3 cursor-pointer'>{element}</label>
            </li>

        ))}
        </ul> */}
    </>
  );
}
