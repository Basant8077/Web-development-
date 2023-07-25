import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import NoteContext from '../context/notes/noteContext'
import { useContext, createContext } from 'react'

function Home(props) {
    const a = useContext(NoteContext);
    useEffect(()=>{
        a.ubdate();
    },[])
    return (
        <>
            <h1>This is  home </h1>
        </>
    )
    
}


export default Home
