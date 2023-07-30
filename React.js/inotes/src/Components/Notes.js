import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

import Notesitem from './Notesitem';
import Addnote from './Addnote';

const Notes = (props) => {

  const contex = useContext(NoteContext);
  const { notes } = contex;
  const { mode, changeAlert } = props

  return (<>
    <div className="container my-4 w-75 p-3 ">

      <Addnote mode={mode} changeAlert={changeAlert} />
      <div className="  row " >
        {notes.map((notes, index) => {
          return <Notesitem notes={notes} key={index} />
        })}
      </div>
    </div>
  </>
  )
}

export default Notes;
