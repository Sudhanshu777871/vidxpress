import React from 'react'
import ReactPlayer from 'react-player';

function Video() {
    return (
       <div className='w-full lg:w-[50%]'>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=nTWkdhmTyVk"
                controls={true}
                width="100%"
               
            />
    </div>
    )
}

export default Video
