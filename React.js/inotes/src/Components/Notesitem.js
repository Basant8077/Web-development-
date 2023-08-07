import { useContext } from 'react'
import React from 'react'
import NoteContext from '../context/notes/noteContext'


function Notesitem(props) {
    const contex = useContext(NoteContext);
    const { notes  , updateNote ,changeAlert } = props
    const { deletion } = contex;

    //! utility functions
    const handleDelete = (id) => {
        deletion(id);
        changeAlert("Deleted " , "danger")

    }
   

    return (
        <>
            <div className="col-md-4">
                <div className="card   my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{notes.title}</h5>
                        <p className="card-text my-2">{notes.description}</p>
                        <p className="card-text"><small className="text-body-secondary"><i className="fa-solid fa-tag mx-2 " ></i>{notes.tag}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{new Date(notes.date).toGMTString()}</small></p>
                        <div className="d-flex justify-content-evenly">

                            <i className="fa-solid fa-trash" onClick={() => { handleDelete(notes._id) }} ></i><i className="fa-solid fa-file-pen" onClick={()=>{updateNote(notes)}} ></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notesitem;
