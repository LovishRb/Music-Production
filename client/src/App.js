import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Services from './components/services'
import './styles/App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className='app-bg'>
      <Navbar/>
      <Home/>
    </div>
      
        <Services/>
      <Routes>
        <Route index element={
          <>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
