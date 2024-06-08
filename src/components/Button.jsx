import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Button({ title, btntitle }) {
    const [changeTitle, setChangeTitle] = useState(btntitle);

    // Define the button class based on the state
    const buttonClass = changeTitle ? 'bg-green-500' : 'bg-red-500';
    // toastify
    const notify = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

    return (
        <div>
            {title == "Published" ? <button
                className={`bg-orange-600 text-white p-2 rounded-md w-52 sm:w-64 hover:bg-orange-700`}

                onClick={() => { notify("Video Is Publishing....") }} >
                {title} <i className="fa fa-send text-xl mx-3"></i>
            </button> :
                <>
                    <h1 className='text-white'>{title}</h1>
                    <button
                        className={`${buttonClass} text-white p-1 rounded-md w-32`}
                        onClick={() => setChangeTitle(!changeTitle)}
                    >
                        {changeTitle ? 'Enable' : 'Disable'}
                    </button>
                </>
            }
            <ToastContainer />
        </div>
    );
}

export default Button;
