import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

function Feed() {
    const [allPost, setallPost] = useState([])

    useEffect(() => {
        const path = collection(db, 'POSTS')
        onSnapshot(path, (snapshot) => {
            // setallPost(snapshot.docs.map((oneDoc) => oneDoc.data()))
            snapshot.docs.forEach((oneDoc) => {
                setallPost((prev) => [...prev, oneDoc.data()])
            })
        })
    }, [])


    return (
        <div className='w-[500px] border-l border-r pb-10'>
            {/* Home toogle button */}


            {/* create post  component*/}
            <CreatePost />

            {/* one post component */}

            {
                allPost.map((postData, i) => (
                    < Post
                        key={i}
                        postText={postData.POST_TEXT}
                        postImage={postData.POST_IMAGE}
                        postTimestamp={postData.POST_TIMESTAMP}
                    />
                ))
            }

        </div>
    )
}

export default Feed