import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase';
import { Navigate, useNavigate } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

function LoginResistrationPage() {


    const navigation = useNavigate()


    const [userName, setuserName] = useState("")
    const [handleId, setHandleId] = useState("")
    const [resisterEmailId, setresisterEmailId] = useState("")
    const [password, setpassword] = useState("")


    const handleCreateAccount = (e) => {
        e.preventDefault();
        if (resisterEmailId && password && userName && handleId) {
            createUserWithEmailAndPassword(auth, resisterEmailId, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;


                    setDoc(doc(db, "users", user.uid), {
                        USER_NAME: userName,
                        HANDLE_ID: handleId,
                        USER_EMAIL: resisterEmailId,
                        USER_PASSWORD: password,
                        USER_CREATE_ON: serverTimestamp()
                    })
                        .then(() => {
                            setuserName("")
                            setHandleId("")
                            setresisterEmailId("")
                            setpassword("")

                            navigation("/home")
                        }).catch((error) => {
                            console.log(error);
                        })

                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    const [loginEmailId, setloginEmailId] = useState("")
    const [loginPassword, setloginPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, loginEmailId, loginPassword)
            .then(() => {
                checkUserState()
            })
            .catch((err) => console.log(err))
    }



    const checkUserState = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation("/home")
            }
        });
    }

    return (
        <div className='flex flex-row item-center justify-center'>

            {/* login Page code from tailwind css */}


            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-7" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-3">
                                <input
                                    // value={loginEmailId} 
                                    onChange={(e) => { setloginEmailId(e.target.value) }}
                                    id="email1"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

                            </div>
                            <div className="mt-2">
                                <input
                                    //  value={loginPassword} 
                                    onChange={(e) => { setloginPassword(e.target.value) }}
                                    id="password1"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={handleLogin}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Sign in
                            </button>
                        </div>
                    </form>


                </div>
            </div>


            {/* resiatration code from tailwind css */}

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">



                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create Account</h2>
                </div>

                <div>
                    <label htmlFor="Handle Id" className="block text-sm font-medium leading-6 text-gray-900">Handle Id </label>
                    <div className="mt-2">
                        <input value={handleId} onChange={(e) => { setHandleId(e.target.value) }} id="Handle Id" name="Handle Id" type="Handle Id" autoComplete="Handle Id" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>


                <div>
                    <label htmlFor="User Name" className="block text-sm font-medium leading-6 text-gray-900">User Name </label>
                    <div className="mt-2">
                        <input value={userName} onChange={(e) => { setuserName(e.target.value) }} id="User Name" name="User Name" type="User Name" autoComplete="User Name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input
                                    value={resisterEmailId}
                                    onChange={(e) => { setresisterEmailId(e.target.value) }}
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

                            </div>
                            <div className="mt-2">
                                <input
                                    value={password}
                                    onChange={(e) => { setpassword(e.target.value) }}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleCreateAccount}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Create Account</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default LoginResistrationPage