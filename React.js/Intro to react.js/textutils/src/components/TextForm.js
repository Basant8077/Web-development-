import { useState } from 'react'
import React from 'react'  // rfc  react function based compnent
import PropTypes from 'prop-types'


export default function TextForm(props) {
    //! Features

    const findcharcters = () => {
        let str = text.trim();
        return str.length;
    }
    const findSyllabul = () => {
        let syllabul = text.split('')
        let count = 0;
        for (let i = 0; i < syllabul.length; i++) {
            if (
                syllabul[i] === 'a' || syllabul[i] === 'e' || syllabul[i] === 'i' || syllabul[i] === 'o' || syllabul[i] === 'u' || syllabul[i] === 'A' || syllabul[i] === 'E' || syllabul[i] === 'I' || syllabul[i] === 'O' || syllabul[i] === 'U'
            ) {
                count++;
            }

        }
        return count;

    }
    const sentence = () => {

        let data = text.split(''); //split in charcter array [a,w,e,d,d,w,f]
        let count = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === '.') {
                count++;
            }
        }
        return count;
    }

    const display = () => {
        let a = findSyllabul();
        return a;
    }
    const displaysentence = () => {
        let a = sentence();
        return a;
    }




    //! Buttons 

    const handlelower = () => {
        let lower_Text = text.toLowerCase();
        setText(lower_Text);
        props.changeAlert("Text changed to Lower Case", "success")
    }
    const handleonchange = (event) => {

        setText(event.target.value)

    }
    const handleonclick = () => {

        let newText = text.toUpperCase();
        setText(newText)
        props.changeAlert("Text changed to Upper Case", "success")
    }
    const handlespace = () => {

        let newText = text.split(/[  ]+/);
        //* [] charcter set matches any given set in here 2 spaces
        //* + is use for to select more than 1 that type of selector
        setText(newText.join(" "))
        props.changeAlert("Unwanted spaces removed ", "success")

    }

    const copytext = () => {
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.changeAlert("Copied to Clipbard", "success")

    }

    const handleclear = () => {
        setText("");
        props.changeAlert("Text is cleared", "danger")
    }



    const [text, setText] = useState('');
    //* text="Change the text" wrong way to change the state
    // setText("New Text"); //! correct way to set a text
    return (
        <>
            <div className="container my-4 ">
                <h3>{props.Heading}</h3>
                {/* method 1 bg-${props.mode} text-${props.mode==='light'?'dark':'light'} */}
                <textarea className={`form-control my-3}`} style={{
                    backgroundColor: props.mode === 'light' ? 'white' : '#6c757d',
                    color: props.mode === 'light' ? 'black' : 'white'
                }} value={text
                } onChange={handleonchange} id="exampleFormControlTextarea1" rows="5"></textarea>

                <div className="container my-4">
                    <button className='btn btn-outline-primary' onClick={handleonclick} >Convert to Uppercase</button>
                    <button className='btn btn-outline-primary mx-3' onClick={handlelower} >Convert to Lowercase</button>
                    <button className='btn btn-outline-primary mx-3' onClick={handlespace} >Remove spaces</button>
                    <button className='btn btn-primary mx-3' onClick={copytext} >Copy all</button>
                    <button className='btn btn-danger mx-3' onClick={handleclear} >Clear All</button>
                </div>


            </div>


            <div className="container">
                <h1>Your Text summary</h1>
                <div className="container my-4">
                    <p>1) Number of characters (without spaces) = <b>{findcharcters()}</b>  </p>
                    <p>2) Number of characters (with spaces) = <b>{text.length}</b></p>
                    <p>3) Number of Words = <b>{text.split(" ").length}</b>  </p>
                    <p>4) Number of syllabuls = <b>{display()}</b> </p>
                    <p>5) Sentences = <b>{displaysentence()}</b></p>
                    <p> Time take to read = <b>{(text.length * 0.087).toFixed(3)} Seconds , {(text.length * 0.001464).toFixed(6)} Minutes</b> </p>

                    <h3>Preview of text</h3>
                    <p>{text.length > 0 ? text : "Enter some text above"}</p>
                </div>
            </div>
        </>

    )
}
TextForm.Prototype = {
    Heading: PropTypes.string.isRequired
}
