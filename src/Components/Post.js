import React from 'react'
import { MdVerified } from "react-icons/md";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";


const PostOptions = [
    {
        icon: FaRegComment,
        number: 20
    },
    {
        icon: FaRetweet,
        number: 20
    },
    {
        icon: AiOutlineHeart,
        number: 20
    },
    {
        icon: BiPoll,
        number: 20
    },
    {
        icon: FiShare

    }

]

function Post(props) {

    const { postText, postImage, postTimestamp } = props

    return (
        <div className='flex flex-row p-2 border-b  '>
            {/* Left avtar */}
            <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='User Name'
                className='w-12 h-12 rounded-full m-2 ' />


            {/* Right data */}


            <div className='p-1'>
                <div className='flex flex-row items-center justify-between'>


                    <div className='flex flex-row items-center'>
                        {/* userName, handleId */}
                        <h1 className='text-lg font-semibold hover:underline hover:cursor-pointer'> Gaurav Gajbhiye</h1>
                        <MdVerified className='text-blue-600 ml-1' />
                        <h2 className='text-md text-gray-600 ml-1 hover:cursor-pointer'>grvgajbhiye@gmail.com | <span className='hover:underline '>2h</span></h2>
                    </div>


                    {/* OPTION THREE DOTS */}
                    <div className='p-2 rounded-full hover:bg-slate-200 hover:cursor-pointer'>
                        <BsThreeDots />
                    </div>


                </div>

                <div>
                    {/* Post text */}
                    {
                        postText && <p className='text-md my-2 '>{postText}</p>

                    }


                    {/* post image*/}
                    {
                        postImage && (
                            <img
                                src={postImage}
                                alt='User Name'
                                className='rounded-lg border-10 max-h-[400px] max-w-[400px]'
                            />
                        )
                    }


                </div>


                <div className='flex flex-row items-center justify-around p-2'>
                    {/* Like Share Comment */}
                    {/* {
                        PostOptions.map((oneOpt, i) => (
                            <div key={i} className=' group hover:cursor-pointer flex flex-row items-center '>
                                <div className='p-2  group-hover:bg-blue-100 rounded-full'>
                                    <oneOpt.icon className='group-hover:text-blue-600' />
                                </div>
                                <p className='group-hover:text-blue-600'>{oneOpt.number}</p>
                            </div>
                        ))
                    } */}
                    <div className=' group hover:cursor-pointer transition duration-200 flex flex-row items-center '>
                        <div className='p-2  group-hover:bg-blue-100 rounded-full'>
                            <FaRegComment className='group-hover:text-blue-600' />
                        </div>
                        <p className='group-hover:text-blue-600'>123</p>
                    </div>

                    <div className=' group hover:cursor-pointer transition duration-200 flex flex-row items-center '>
                        <div className='p-2  group-hover:bg-green-100 rounded-full'>
                            <FaRetweet className='group-hover:text-green-600' />
                        </div>
                        <p className='group-hover:text-green-600'>123</p>
                    </div>

                    <div className=' group hover:cursor-pointer transition duration-200 flex flex-row items-center '>
                        <div className='p-2  group-hover:bg-pink-100 rounded-full'>
                            <AiOutlineHeart className='group-hover:text-pink-600' />
                        </div>
                        <p className='transition duration-200group-hover:text-pink-600'>123</p>
                    </div>

                    <div className=' group hover:cursor-pointer transition duration-200 flex flex-row items-center '>
                        <div className='p-2  group-hover:bg-blue-100 rounded-full'>
                            <BiPoll className='transition duration-200 group-hover:text-blue-600' />
                        </div>
                        <p className='group-hover:text-blue-600'>123</p>
                    </div>
                    <div className=' group hover:cursor-pointer transition duration-200 flex flex-row items-center '>
                        <div className='p-2 transition duration-200 group-hover:bg-blue-100 rounded-full'>
                            <FiShare className='transition duration-200 group-hover:text-blue-600' />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Post