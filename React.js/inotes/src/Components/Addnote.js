import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'

function Addnote(props) {
    const [text , setText] = useState({title:"", description: "" , tag : "testing ta is present"});
    const {mode , changeAlert} = props
    const contex = useContext(NoteContext);
    const {addition} = contex;

    //! functions

    //* fumnctionz handeling changes on typing
   
    const onchange =(event)=>{
       setText({...text , [event.target.name]: event.target.value})
    }

    //!buttons

    const handlesubmit = (e)=>{
        e.preventDefault(); //* to prevent reloading after change
        addition(text.title , text.description , text.tag); //the inside of text passed to addition 
        changeAlert("Note added successfully","success");
    }
  return (
    <>
  
    <div className="container my-4 w-75 p-3 " style={{

        color: mode === "dark" ? "white" : "black"
    }} >
        <h1> Add Note</h1>
        <div className="mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{color: "black"}} >
            <label htmlFor="title"  className="form-label"><h3>Title</h3></label>
            <input type="text" className="form-control"  required minLength={5}  name="title"  onChange={onchange} id="title" placeholder="Enter your Title here" />
        </div>
        <div className="mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{color: "black"}}>
            <label htmlFor="description" className="form-label"><h3>Description</h3></label>
            <textarea onChange={onchange}  name='description' required minLength={5}   className="form-control" id="description" rows="5" placeholder='Enter Whats i your mind' ></textarea>
        </div>
        <div className="mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{color: "black"}} >
            <label htmlFor="tag"  className="form-label"><h3>Tag</h3></label>
            <input type="text" className="form-control" name="tag" required minLength={5}    onChange={onchange} id="tag" placeholder="Enter your Title here" />
        </div>
        <button type="button" disabled = {text.title.length < 3 || text.description.length < 5} className="btn btn-outline-success" onClick={handlesubmit} >Add Note</button>

    </div>
        <h1>Previous Note's</h1>
    </>
  )
}

export default Addnote
