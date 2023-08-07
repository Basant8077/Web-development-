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
          "auth-token": localStorage.getItem("token")
        }
      });
      const json = await response.json(); // parses JSON response into native JavaScript objects
    
       setNotes(json);
    }
 

  //additon of note
  const addition = async(title, description, tag) => {

      const response = await fetch("http://localhost:5000/api/notes/addnote", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
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
          "auth-token": localStorage.getItem("token")
        },
        
      });
      // eslint-disable-next-line
       const note = await response.json(); // parses JSON response into native JavaScript objects

    const newnote = notes.filter((note) => { return note._id !== id })
    setNotes(newnote);
  }

  //edit note
  const editnote = async(id, title, description, tag) => {
// eslint-disable-next-line
    const response = await fetch(`http://localhost:5000/api/notes/updateNote/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({  title , description , tag})
      });
      let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag; 
          break; 
        }
      }  
      setNotes(newNotes);
  }

  return (

    <NoteContext.Provider value={{ notes, addition, deletion, editnote , fetchdata }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;