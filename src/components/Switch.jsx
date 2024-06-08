import React from 'react'
import SwitchSelector from "react-switch-selector";

function Switch(props) {
    const options = [
        {
            label: <span>OF</span>,
            value: {
                foo: true
            },
            selectedBackgroundColor: "red",
        },
        {
            label: "On",
            value: "On",
            selectedBackgroundColor: "green"
        }
    ];

    const onChange = (newValue) => {
        console.log(newValue);
    };

    const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");


    return (
        <>
            <div className='w-32 h-8 mr-4 mx-3'>
                <h1 className='text-white'>{props.title}</h1>
                <SwitchSelector
                    onChange={onChange}
                    options={options}
                    initialSelectedIndex={initialSelectedIndex}
                    backgroundColor={"white"}
                    fontColor={"black"}
                />
            </div>
        </>
    )
}

export default Switch
