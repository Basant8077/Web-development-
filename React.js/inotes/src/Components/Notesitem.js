import React from 'react'

function Notesitem(props) {
    const { notes } = props
    return (
        <>
            <div className="col-md-4">
                <div className="card   my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{notes.title}</h5>
                        <p className="card-text my-2">{notes.description}</p>
                        <p className="card-text"><small className="text-body-secondary"><i className="fa-solid fa-tag mx-2"></i>{notes.tag}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{new Date(notes.date).toGMTString()}</small></p>
                        <div className="d-flex justify-content-evenly">

                            <i className="fa-solid fa-trash"></i><i className="fa-solid fa-file-pen"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notesitem;
