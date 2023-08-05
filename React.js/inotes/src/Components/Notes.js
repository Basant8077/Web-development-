import React, { useState } from 'react'
import { useContext, useEffect , useRef} from 'react'
import NoteContext from '../context/notes/noteContext';

import Notesitem from './Notesitem';
import Addnote from './Addnote';

const Notes = (props) => {

  const contex = useContext(NoteContext);
  const { notes, fetchdata , editnote } = contex;
  const { mode, changeAlert } = props
  const ref = useRef(null);
  const refclose = useRef(null);

  const [text , setText] = useState( { id: "", etitle:"", edescription: "" , etag : ""});
  useEffect(() => {

    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateNote = (currentnotes)=>{
    ref.current.click();
    setText({ id: currentnotes._id, etitle: currentnotes.title , edescription : currentnotes.description , etag: currentnotes.tag});
  
  }

  const onchange = (event)=>{
    setText({...text , [event.target.name]: event.target.value}) //new method to set most item at same time
  } 
  
  const handleclick = (e)=>{
    console.log("updating note")
    editnote(text.id , text.etitle , text.edescription , text.etag )
    refclose.current.click();

  }


  return (<>
    <div className="container my-4 w-75 p-3 ">

      <Addnote mode={mode} changeAlert={changeAlert} />
    
      <button  type="button" ref={ref} className="btn btn-primary invisible" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

     
      <div className="modal fade modal-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" >
            <label htmlFor="title"  className="form-label"><h3>Title</h3></label>
            <input type="text" value={text.etitle} className="form-control" name="etitle"  onChange={onchange} id="etitle" placeholder="Enter your Title here" />
        </div>
        <div className="mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" >
            <label htmlFor="description"  className="form-label"><h3>Description</h3></label>
            <textarea onChange={onchange} value={text.edescription}  name='edescription' className="form-control" id="edescription" rows="5" placeholder='Enter Whats i your mind' ></textarea>
        </div>
        <div className="mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" >
            <label htmlFor="tag"  className="form-label"><h3>Tag</h3></label>
            <input type="text" value={text.etag} className="form-control" name="etag"  onChange={onchange} id="etag" placeholder="Enter your Title here" />
        </div>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={text.etitle.length<5 || text.edescription.length<5}  onClick={handleclick} className="btn btn-primary"> Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="  row " >
        {notes.map((notes, index) => {
          return <Notesitem notes={notes} key={index}  updateNote = {updateNote} />
        })}
      </div>
    </div>
  </>
  )
}

export default Notes;
