import React, { useEffect, useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsListUl } from "react-icons/bs";
import { BsBookmark, BsPeople, BsThreeDots } from "react-icons/bs";
import { BiMessageSquareCheck } from "react-icons/bi";
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { doc, onSnapshot } from 'firebase/firestore';





const NAV_ITEMS = [
    {
        name: "Home",
        icon: AiOutlineHome,
        redirect: '/home',


    },
    {
        name: "Explore",
        icon: AiOutlineSearch,
        redirect: '/explore',

    },
    {
        name: "Notifications",
        icon: IoMdNotificationsOutline,
        redirect: '/notification',

    },
    {
        name: "Messages",
        icon: BiMessageSquareCheck,
        redirect: '/messages',

    },
    {
        name: "Lists",
        icon: BsListUl,
        redirect: '/list',

    },
    {
        name: "Bookmarks",
        icon: BsBookmark,
        redirect: '/bookmarks',

    },
    {
        name: "Communities",
        icon: BsPeople,
        redirect: '/communities',

    },
    // {
    //     name: "Verified",
    //     icon: FaXTwitter,
    //     redirect: '/Verified'

    // },
    {
        name: "Profile",
        icon: AiOutlineUser,
        redirect: '/profilepage',

    },
    // {
    //     name: "More",
    //     icon: BsPeople,
    //     redirect: '/More'

    // }
]

function LeftsideBar() {

    const navigate = useNavigate()

    const handleSignOut = (e) => {
        e.preventDefault();

        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/login')
        }).catch((error) => {
            // An error happened.
        });
    }

    const [currentUser] = useState(auth?.currentUser?.uid)
    const [userData, setuserData] = useState(null)
    useEffect(() => {
        onSnapshot(doc(db, "users", currentUser), (userDoc) => {
            if (userDoc.exists) {
                setuserData(userDoc.data())
            }
        })
    }, [currentUser])
    console.log(userData);


    return (
        <div className='w-[250px]  h-screen flex flex-col justify-between'>

            <div>
                {/*logo  */}

                <div className='p-3 hover:bg-gray-200
                 hover:cursor-pointer rounded-full w-fit'>
                    <FaXTwitter className='text-2xl ' />
                </div>


                {/* options with button */}
                <div>
                    {
                        NAV_ITEMS.map((item, index) => (
                            //to me path hi denge
                            // <Link to={item.redirect} >
                            <Link >
                                <div key={index} className='flex flex-row items-center p-2 hover:bg-gray-200 rounded-full
                                   hover:cursor-pointer w-fit px-4 transition duration-200'>
                                    <item.icon className='text-2xl' />
                                    <p className='text-xl ml-2'>{item.name}</p>
                                </div>
                            </Link>
                        ))
                    }
                    <button onClick={handleSignOut} className='bg-blue-400 transition duration-200 hover:bg-blue-600 text-white w-full my-2 p-2 rounded-full'>
                        Logout
                    </button>
                </div>
            </div>

            {/* user profile button  */}
            <div className='flex flex-row items-center p-2  rounded-full justify-between hover:bg-slate-200
                hover:cursor-pointer transition duration-200 '>
                {/* user img avatar */}
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-12 h-12 rounded-full' />

                <div>
                    {/* user name */}
                    <h2 className='text-lg'>{userData?.userName}</h2>
                    {/* handle ID */}
                    <p className='text-md text-gray-500'> @{userData?.handleId}</p>
                </div>

                <div>
                    {/* icon */}
                    <BsThreeDots className='text-xl' />
                </div>



            </div>
        </div>
    )
}

export default LeftsideBar