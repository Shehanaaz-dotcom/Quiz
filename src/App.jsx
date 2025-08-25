import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes , Route , Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FIrst from './FIrst'
import Second from './Second'


function App() {
  
  return (
    <BrowserRouter basename={"/Quiz/"}>
    <Routes>
   
          <Link><Route exact path="/" element={<FIrst/>}/></Link>
        
       <Link>  <Route path="/Second" element={<Second/>}/></Link>

    </Routes>
 </BrowserRouter>
  )
}

export default App
