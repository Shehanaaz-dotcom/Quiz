import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes , Route , Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FIrst from './FIrst'
import Second from './Second'


function App() {
  
  return (
    <BrowserRouter basename={"/Quiz"}>
    <Routes>
   
          <Route path="/" element={<FIrst/>}/>
        
         <Route path="/Second" element={<Second/>}/>

    </Routes>
 </BrowserRouter>
  )
}

export default App
