import React, { useEffect, useState } from 'react'
import { BsImage, BsFillEmojiSmileFill } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { FaPollH } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const OPTION_ICONS = [BsFillEmojiSmileFill, AiOutlineFileGif, FaPollH, CiLocationOn, SlCalender]

function CreatePost() {
    const [postText, setpostText] = useState('')

    const [picture, setpicture] = useState(null)

    const handleSelectImage = (e) => {
        e.preventDefault();
        setpicture(null)
        if (e.target.files[0]) {
            setpicture(e.target.files[0])
        }

    }

    const [randomKey, setrandomKey] = useState(null)

    useEffect(() => {
        var a = Array.from(
            Array(20),
            () => Math.floor(Math.random() * 36).toString(36)
        ).join('');
        setrandomKey(a)

    }, [])

    const [uploadProgress, setuploadprogress] = useState(0)

    const handleCreatePost = () => {
        if (postText || picture) {

            if (picture) {
                const storageRef = ref(storage, `post/${randomKey}.jpg`);
                var uploadTask = uploadBytesResumable(storageRef, picture);

                uploadTask.on(
                    "state_changed",
                    //Monitor the upload
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                        setuploadprogress(progress)
                    },

                    //error
                    (error) => {
                        console.log(error);
                    },

                    () => {
                        // Handle successful uploads on complete

                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then((downloadURL) => {

                                addDoc(collection(db, "POSTS"), {
                                    POST_TEXT: postText,
                                    POST_IMAGE: downloadURL,
                                    POST_TIMESTAMP: serverTimestamp()
                                }).then(() => {
                                    setpostText(" ")
                                    setuploadprogress(0)
                                    var a = Array.from(
                                        Array(20),
                                        () => Math.floor(Math.random() * 36).toString(36)
                                    ).join('');
                                    setrandomKey(a)
                                }).catch(err => console.log(err))

                            });
                    }
                )

            } else {

                addDoc(collection(db, "POSTS"), {
                    POST_TEXT: postText,
                    POST_IMAGE: "",
                    POST_TIMESTAMP: serverTimestamp
                })
                    .then(() => {
                        setpostText("")
                    })
                    .catch(err => console.log(err))

            }


        }
    }



    return (
        <div className='flex flex-row  p-2 border-b'>
            {/* left--Avtar */}
            <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='User Name'
                className='w-12 h-12 rounded-full m-2 ' />

            {/* right--rest of the data */}
            <div>
                {/* top data */}
                <input type='text'
                    className='w-full outline-none border-1 focus:outline-none p-3 my-1 text-xl'
                    placeholder='What is Happining?'
                    value={postText}
                    onChange={(e) => setpostText(e.target.value)} />

                {/* bottom data */}
                <div className='flex flex-row items-center justify-between w-fit'>
                    <input type='file' onChange={handleSelectImage} />
                    {/* 6 icons */}
                    <div className='flex flex-row items-center'>
                        {/* {

                            OPTION_ICONS.map((ICO, index) => (
                                <div key={index} className='p-1 hover:cursor-pointer hover:bg-slate-200 rounded-full'>
                                    <ICO className='text-xl text-blue-400 m-2' />
                                </div>
                            ))
                        } */}
                        {/* 
                        <BsImage className='text-xl text-blue-400 m-2 ' />
                        <AiOutlineFileGif />
                        <FaPollH />
                        <BsFillEmojiSmileFill />
                        <SlCalender />
                        <CiLocationOn /> */}
                    </div>

                    <button onClick={handleCreatePost} className='bg-blue-400 hover:bg-blue-600 rounded-full
                     p-1 text-lg text-white w-24 transition duration-200'>
                        POST
                    </button>
                </div>
                <progress value={uploadProgress} max="100" />
            </div>
        </div>
    )
}

export default CreatePost