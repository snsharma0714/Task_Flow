import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    // console.log(handleLogin)

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        console.log("Email is:",email)
        console.log("Password is:",password)
        setemail("")
        setpassword("")
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    required
                    className='border-2 border-emerald-600 text-xl outline-none bg-transparent py-1 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                    />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }}
                    required
                    className='border-2 border-emerald-600 text-xl  outline-none bg-transparent py-1 px-5 rounded-full mt-2 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                    <button className='mt-6 bg-emerald-600 text-xl text-white outline-none border-none py-1 px-2 rounded-full placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login