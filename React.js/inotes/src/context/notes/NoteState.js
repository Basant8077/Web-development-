import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const data = [];
  const [notes, setNotes] = useState(data);

  // 1) FETCH DATA FROM BACKEND
  
    const fetchdata = async () => {
      const response = await fetch("http://localhost:5000/api/notes/fetchAllNotes", {
        method: "GET",  //fetch returns a promise
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNDBhOTUxMWM5YjM2MGE0NjIyNjY0In0sImlhdCI6MTY4OTc0ODkwOH0.CSmc8q2Rw196EZde76BXj2X-RfaYDGDrhjs7hAdpZ2Q"
        }
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
      console.log(json);
       setNotes(json);
    }
 

  //additon of note
  const addition = async(title, description, tag) => {

      const response = await fetch("http://localhost:5000/api/notes/addnote", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNDBhOTUxMWM5YjM2MGE0NjIyNjY0In0sImlhdCI6MTY4OTc0ODkwOH0.CSmc8q2Rw196EZde76BXj2X-RfaYDGDrhjs7hAdpZ2Q"
        },
        body: JSON.stringify({title , description , tag})
      });
      const note = await response.json(); // parses JSON response into native JavaScript objects
      setNotes(notes.concat(note))
    }

  //deletion of note
  const deletion = async (id) => {
    const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiNDBhOTUxMWM5YjM2MGE0NjIyNjY0In0sImlhdCI6MTY4OTc0ODkwOH0.CSmc8q2Rw196EZde76BXj2X-RfaYDGDrhjs7hAdpZ2Q"
        },
        
      });
      // eslint-disable-next-line
       const note = await response.json(); // parses JSON response into native JavaScript objects

    const newnote = notes.filter((note) => { return note._id !== id })
    setNotes(newnote);
  }

  //edit note
  const editnote = (id, title, description, tag) => {
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (

    <NoteContext.Provider value={{ notes, addition, deletion, editnote , fetchdata }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;