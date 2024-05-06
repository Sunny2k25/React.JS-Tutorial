import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'



function App() {

  return (
   <UserContextProvider>
   <h1>React with chai</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App

{/**Context api matlab ek global variable bna raha hu us variable ke ander 
sara data jayega kyuki react hain hme pata hain  state itni aasani se update nahi hota hain  */}