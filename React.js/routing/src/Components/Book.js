// import React, { useContext } from 'react'
import { Outlet, useOutletContext, useParams } from 'react-router-dom'

export default function Book() {
    const { id } = useParams();
    const obj = useOutletContext();
    return (
        <>
            <div>
                <h1>Book {id} {obj.hello}</h1>
            </div>
            <Outlet />
        </>
    );
}
