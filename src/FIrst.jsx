import {React , useState}from 'react'
import { BrowserRouter, Routes , Route , Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Second from './Second';


const FIrst = () => {
  
const navigate = useNavigate();
const handleButtonClick =() =>
  {
     navigate('/Second');
  };

   
  return (

    <div className="w-full h-screen flex items-center justify-center ">
          <div className='w-full max-w-sm bg-white p-5 rounded shadow-slate-500 shadow-lg'>
               <div className='p-2   text-center font-bold text-green-500 mb-4 text-xl'>Online Quiz App</div>
               <div className="z-10  bg-green-100 divide-y divide-gray-100 rounded-lg shadow-sm mb-2 p-2 text-gray-500">
   
               <div className='p-4 font-bold text-red-500  text-xl '>Instructions</div>
               <p className ="p-1"> 1. Quiz contain 5 Questions.</p>
                <p className ="p-1"> 2. No Time limit.</p>
                <p className ="p-1">3. Next question will be enabled only after answering current question.</p>
                <p className ="p-1">4. Once you select an option you cannot change the option or cannot go back to previous question.</p>
                <p className ="p-1">5. Every question has only one correct answer.</p>

             <div>
        
        <button className=" block w-full bg-green-500 text-white p-2 rounded mt-4 w-100%"  onClick={handleButtonClick} >START QUIZ </button>  
       
              </div>
              </div>

         </div>
    </div>
   
  )
}


export default FIrst
