import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';
import Notesitem from './Notesitem';

const Notes = () => {
    
    const contex = useContext(NoteContext);
    const {notes,setNotes} = contex;

  return (
    <div className="row" >
    {notes.map((notes , index)=>{
        return <Notesitem notes = {notes} key = {index}  />
    })}
    </div>
  )
}

export default Notes;
