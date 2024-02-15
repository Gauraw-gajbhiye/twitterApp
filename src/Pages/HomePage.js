import React from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import Feed from '../Components/Feed'
import RightSideBar from '../Components/RightSideBar'

function HomePage() {
    return (
        <div className='flex flex-row justify-center'>
            {/* left sidebar */}
            <LeftSideBar />
            {/* feed */}
            <Feed />
            {/* Home $ Toggle button */}

            {/* Create post component*/}

            {/* one post */}

            {/* right sidebar */}
            <RightSideBar />
        </div>
    )
}

export default HomePage