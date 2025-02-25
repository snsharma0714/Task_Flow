import React, { useContext } from 'react'
import './App.css'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Login from './components/Auth/Login'
// import { getLocalStorage, setLocalStorage } from '/utils/LocalStorage'
// import { useEffect } from 'react'
import { useState, useEffect } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },[])
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  

  const handleLogin = (email,password)=>{
    console.log(email,password)
    if(email== 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
      }
      setUser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employees'}))
    }
    else{
      alert("Invalid Credential")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      {/* {<EmployeeDashboard/>} */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
