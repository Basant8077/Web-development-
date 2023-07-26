import React from 'react'

function Notesitem(props) {
    const { notes } = props
    return (
        <>
            <div className="col-md-4">
                <div class="card   my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{ "width": "18rem;" }}>
                    <div class="card-body">
                        <h5 class="card-title">{notes.title}</h5>
                        <p class="card-text">{notes.description}</p>
                        <p class="card-text"><small class="text-body-secondary">{notes.tag}</small></p>
                        <p class="card-text"><small class="text-body-secondary">{ new Date(notes.date).toGMTString()}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notesitem;
