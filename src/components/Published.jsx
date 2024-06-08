import React from 'react'


function Published({title, selectName, options}) {
    return (
        <div className='flex justify-between mx-4'>
            <div>
                <h1 className=' text-white'>{title}</h1>
                <select name={selectName} id={selectName} className='border-2 border-black rounded-md p-1 w-fit sm:w-48 sm:p-2'>

                    {options.map((data, index)=>{
                        return(
                            <option value={data} key={index}>{data}</option>
                        )
                    })}
                   
                </select>
            </div>
           
        </div>
    )
}

export default Published
