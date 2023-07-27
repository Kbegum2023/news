import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BusinessPage from './pages/BusinessPage';
import PoliticsPage from './pages/PoliticsPage';
import TechnologyPage from './pages/TechnologyPage';
import LifestylePage from './pages/LifestylePage';
import Layout from './Layout/Layout';

import './style.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
       <Route path='/politics' element={<PoliticsPage/>}/>
        <Route path='/business' element={<BusinessPage/>}/>
         <Route path='/technology' element={<TechnologyPage/>}/>
          <Route path='/lifestyle' element={<LifestylePage/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
