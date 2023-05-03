import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleonchange =(event)=>{
    
        setText(event.target.value)

    }
    const handleonclick =()=>{
       
        let newText = text.toUpperCase();
        setText(newText )
    }


    const [text, setText] = useState('Enter Text here');
    //* text="Change the text" wrong way to change the state
    // setText("New Text"); //! correct way to set a text
    return (
        <div className="container my-4 ">
            <h3>{props.Heading}</h3>
            <textarea className="form-control my-3" value={text
            } onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className='btn btn-primary' onClick={handleonclick} >Convert to Uppercase</button>
        </div>

    )
}
TextForm.Prototype = {
    Heading: PropTypes.string.isRequired
}
