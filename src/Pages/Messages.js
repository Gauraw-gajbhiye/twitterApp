import React from 'react'
import LeftsideBar from '../Components/LeftSideBar'
import Feed from '../Components/Feed'
import RightSideBar from '../Components/RightSideBar'

function Messages() {
    return (
        <div>
            <div className='flex flex-row justify-center'>
                {/* left sidebar messages page pe dikhane hai isiliye left side bar call kiya */}
                <LeftsideBar />


                {/* Feed   copy the class name code from feed */}
                <div className='w-[500px] border-l border-r pb-10'>
                    <h1>All Messages</h1>

                </div>

                {/* Right sidebar messages page pe dikhane hai isiliye left side bar call kiya}*/}
                <RightSideBar />
            </div>

        </div>
    )
}

export default Messages