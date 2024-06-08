import React from 'react'
import Video from './Video'
import Published from './Published'
import Input from './Input'
import Switch from './Switch'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'

function Main() {
    return (
        <div className='bg-[rgb(11,22,40)] w-full min-h-lvh
        flex justify-center items-center'>
            
            <div className='bg-[rgb(12,39,60)] w-11/12 m-auto min-h-lvh flex flex-col lg:flex-row lg:justify-center lg:items-center'>
            <Header/>
                {/* video */}
                <Video />
                {/* div for actions on video */}
                <div className='mt-5'>

                    <div className='flex justify-between mx-0 mt-3'>
                        <Published title="Published On" selectName="mediaSelect" options={["YouTube", "Instagram", "Facebook", "TikTok"]} />
                        <Switch title="Auto Published" />
                    </div>
                    {/* input for video title */}
                    <Input type="text" placeholder="Video Title" name="video_title" />


                    {/* input for video description */}
                    <Input type="textarea" placeholder="Video Description" name="video_description" />

                    {/* input for video description */}
                    <Input type="text" placeholder="Video Tags Separated With Comma" name="video_tags" />

                    {/* switch for allow sub-title */}
                    <div className='flex justify-between mx-3 mt-3'>
                        <Button title="Video Sub-Title" btntitle={false} />
                        <Button title="Video Audio" btntitle={true} />
                    </div>

                    {/* container for video access type */}
                    <div className='flex justify-between mx-0 mt-3'>
                        <Published title="Published Type" selectName="accessType" options={["Private", "Public"]} />

                        <Published title="Audience" selectName="audienceType" options={["For Children", "For Adult", "For Both"]} />
                    </div>

                    {/* container for published btn */}
                    <div className='flex justify-between mx-3  my-5'>
                        <Button title="Published" btntitle={true} />
                       
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Main
