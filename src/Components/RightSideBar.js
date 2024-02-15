import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { Link } from 'react-router-dom'


function RightSideBar() {

    const [allusers, setallUsers] = useState([])
    useEffect(() => {
        onSnapshot(collection(db, 'users'), (snapshot) => {
            // snapshot.docs.forEach((oneDoc) => {
            //     setallUsers(prev => [...prev, oneDoc.data()])
            // })
            setallUsers(snapshot.docs.map((oneDoc) =>
            ({
                userData: oneDoc.data(),
                userDocId: oneDoc.id
            })
            ))
        })
    }, [])
    console.log(allusers);
    return (
        <div className='w-[290px]  h-screen m-2' >
            <div className='border w-full'>

                <div className='bg-gray-100 w-full p-2 rounded-lg '>
                    <h1 className='text-xl font-bold p-2'>Who to follow</h1>
                    {
                        allusers.map((user, id) => (
                            <div key={id} className='flex flex-row items-center  hover:cursor-pointer hover:bg-slate-200 p-2  transition duration-200'>
                                {/* image-avatar--. */}

                                <img src="https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    className='w-11 h-11 rounded-full' alt="username" />

                                <div className='ml-2'>
                                    {/* username--> */}
                                    <Link to={`/userprofile/${user.userDocId}`}>
                                        <h2 className='text-lg hover:underline'>{user?.userData?.USER_NAME}</h2>
                                    </Link>
                                    {/* userid--. */}
                                    <p className='text-ml text-gray-500' >@{user?.userData?.USER_HANDLEID}</p>
                                </div>
                                {/*button text follow--- */}
                                <button className='ml-3 bg-black text-white py-2 px-4 rounded-full font-semibold hover:bg-black/75 hover:cursor-pointer'>Follow</button>
                            </div>
                        ))
                    }

                    {/*one user  */}

                    <div className='hover:cursor-pointer hover:bg-slate-200 border w-full'>
                        <h3 className='text-blue-400'>Show More</h3></div>
                </div>
            </div>

        </div>
    )
}

export default RightSideBar