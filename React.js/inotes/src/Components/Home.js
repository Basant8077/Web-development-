import React from 'react';
import Notes from './Notes';
function Home(props) {
    return (
        <>
            <div className="container my-4 w-75 p-3">
                <h1> Add Note</h1>

                <div className="mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <label htmlFor="exampleFormControlInput1" className="form-label"><h3>Title</h3></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Title here" />
                </div>
                <div className="mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded" >
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>Description</h3></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Enter Whats i your mind' ></textarea>
                </div>
                <h1>Previous Note's</h1>
                <Notes/>
            </div>

        </>
    )

}


export default Home
