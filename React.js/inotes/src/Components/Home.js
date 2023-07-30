import React from 'react';
import Notes from './Notes';
function Home(props) {
    const { mode, changeAlert } = props;
    return (
        <>
                
                <Notes mode ={mode }  changeAlert = {changeAlert} />

        </>
    )

}


export default Home
