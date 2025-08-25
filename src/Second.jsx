

import {React, useState }from 'react'
import { BrowserRouter, Routes , Route ,  Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FIrst from './FIrst'
import image1 from '/src/assets/congratulations.png'
import image2 from '/src/assets/emoji.jpg'



const questions= [
  {
      
    questionText :'What is the capital of France?',
    answerOptions :[
      {answerText: 'New York', isCorrect:false},
        {answerText: 'London', isCorrect:false},
       { answerText: 'Paris', isCorrect:true},
        {answerText: 'Dubai', isCorrect:false},

    ],
  },
    {
  
    questionText :'Which animal is the king of the jungle?',
    answerOptions :[
      {answerText: 'Peacock', isCorrect:false},
        {answerText: 'Rhinosarus', isCorrect:false},
       { answerText: 'Cheetah', isCorrect:false},
        {answerText: 'Lion', isCorrect:true},

    ],
  },
    {
   
    questionText :'How many Oceans are there in the world?',
    answerOptions :[
      {answerText: '5', isCorrect:true},
        {answerText: '7', isCorrect:false},
       { answerText: '3', isCorrect:false},
        {answerText: '8', isCorrect:false},

    ],
  },
    {
     
    questionText :'What is the 6th largest country in the world?',
    answerOptions :[
      {answerText: 'USA', isCorrect:false},
        {answerText: 'Brazil', isCorrect:true},
       { answerText: 'India', isCorrect:false},
        {answerText: 'Canada', isCorrect:false},

    ],
  },
    {
       
    questionText :'What is the fastest train in India?',
    answerOptions :[
      {answerText: 'Vande Bharat Express', isCorrect:true},
        {answerText: 'Shatabdi Express', isCorrect:false},
       { answerText: 'Rajdhani Express', isCorrect:false},
        {answerText: 'Gatimaan Express', isCorrect:false},

    ],
  },
]





const Second = () => {



 

  const navigate = useNavigate();
  const handleButtonClick =() =>
    {
        navigate('/');
    };

  const [currentquestions,setCurrentQuestions] = useState(0)
  const [answered, setAnswered] = useState(false)
  const[selectedAnswer, setSelectedAnswer]= useState(null)
  const [score, setScore] = useState(0)
  const[showScore, setShowScore]= useState(false)


  
  const handleAnswerOption = (index, isCorrect)=>{
    setAnswered(true)
    setSelectedAnswer(index)
    if(isCorrect)
    {
      setScore(score+1)
    }
  }

  const NextQuestion =() =>{
    setAnswered(false)
    setSelectedAnswer(null)
    const nextQuestion=currentquestions+1;
    if(nextQuestion <questions.length){
    setCurrentQuestions(currentquestions +1)
    }
    else{
      setShowScore(true);
    }
  }

 

   
  return (
  

   <div className="w-full h-screen flex items-center justify-center ">
      <div className='w-full max-w-sm bg-white p-5 rounded shadow-slate-500 shadow-lg'>
         <div className='p-2  text-center font-bold text-green-500 mb-8 text-xl'>Online Quiz App</div>

    
      {showScore? <div>
        <div>
          { score>=3 ? <div><span className="text-red-500 font-bold ">Congratulations !</span>
          <img src={image1} /></div>:<div><span className=" text-center text-red-500  font-bold ">Better Luck Next Time !</span><img src={image2}/></div>}
          </div>
       <div className="text-red-500 text-2xl text-center font-bold">  You scored 
        <span className=" p-1 text-3xl "> {score} </span>
         out of { questions.length} 
         
        </div>

          <div>
             
             <button className=" block w-full bg-green-500 text-white p-2 rounded mt-4 w-100%"  onClick={handleButtonClick} >Back to Quiz </button>  
          </div>

        </div> :  
        
          <div>
            
          <div>   {questions[currentquestions].questionText}     </div>

         {questions[currentquestions].answerOptions.map((option,index)=>(
          
      
          <button  onClick ={() =>  handleAnswerOption(index, option.isCorrect)} className={`block w-full p-2 mt-2 bg-green-100 text-gray rounded-lg shadow-sm  gap-2 ${
          answered ? option.isCorrect? "bg-green-500"
         :selectedAnswer === index? "bg-red-500" 
         :"" 
         :"" }`}>{option.answerText}</button>

         )) } 
         <button className={`${answered?"bg-green-500 ":"bg-green-300 "} block w-full text-white p-2 mt-6 rounded`} disabled = {answered? "" :"disabled"} onClick={NextQuestion}>Next</button>
         <p className="text-center text-grey-400 text-sm mt-2"> Question {currentquestions +1} of {questions.length}</p>
         </div>
        }
           
    </div>

  </div>
  )

}

export default Second

