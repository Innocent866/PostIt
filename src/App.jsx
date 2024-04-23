import React from 'react'
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import "./App.css"
import Home from './Pages/HomePage'
import Layout from './Layout/Layout'
import WelComePage from './Pages/WelComePage'
import CreateStoryPage from './Pages/CreateStoryPage'
import PeopleStoryPage from './Pages/PeopleStoryPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>} >
            <Route path='/' element={<Home/>}/>
            <Route path='/welcome' element={<WelComePage/>}/>
            <Route path='/createstory' element={<CreateStoryPage/>}/>
            <Route path='/peoplestory' element={<PeopleStoryPage/>}/>
          </Route>
          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App