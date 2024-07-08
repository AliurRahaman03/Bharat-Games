import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from './Pages/Landing'
import Activity from './Pages/Activity'
import Agent from './Pages/Agent'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import ReferAndEarn from './Pages/ReferAndEarn'
import Register from './Components/Register'
import Login from './Components/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Landing/>} />
          <Route path='activity' element={<Activity/>} />
          <Route path='agent' element={<Agent/>} />
          <Route path='home' element={<Home/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='referandearn' element={<ReferAndEarn/>} />
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
        
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
