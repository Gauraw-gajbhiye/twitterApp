import React, { useEffect, useState } from 'react'
import LeftsideBar from '../Components/LeftSideBar'
import RightSideBar from '../Components/RightSideBar'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

function UserProfile() {

    const { friendId } = useParams()
    const [friendsData, setfriendsData] = useState(null)
    useEffect(() => {
        onSnapshot(doc(db, "USERS", friendId), (friendsDoc) => {
            if (friendsDoc.exists()) {
                setfriendsData(friendsDoc.data())
            }
        })
    }, [friendId])



    return (
        <div>
            <div className='flex flex-row justify-center'>
                {/* left sidebar messages page pe dikhane hai isiliye left side bar call kiya */}
                <LeftsideBar />


                {/* Feed   copy the class name code from feed */}

                {/* user id ke liye {friendId} call kiya hai */}
                <div className='w-[500px] border-l border-r pb-10'>
                    <h1>{friendsData?.USER_NAME}</h1>
                    <h1>{friendsData?.HANDLE_ID}</h1>

                    <h1>{friendsData?.USER_CREATED_ON.toDate().toDateString()}</h1>
                    <h1>{friendsData?.USER_EMAIL}</h1>
                </div>

                {/* Right sidebar messages page pe dikhane hai isiliye left side bar call kiya}*/}
                <RightSideBar />
            </div>

        </div>
    )
}

export default UserProfile