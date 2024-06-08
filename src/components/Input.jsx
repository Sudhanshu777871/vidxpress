import React from 'react'

function Input({ type, placeholder, name }) {
    return (
        <>
            

            {type == "textarea" ? <textarea name={name} id={name} placeholder={placeholder} className='w-11/12 p-1 indent-2 mt-3 rounded-md block m-auto sm:w-[95%]'></textarea> : <input type={type} name={name} id={name} placeholder={placeholder} className='w-11/12 p-1 indent-2 mt-3 rounded-md block m-auto sm:w-[95%] sm:p-2' />}
        </>
    )
}

export default Input
