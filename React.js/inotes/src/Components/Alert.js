import React from 'react'

function Alert(props) {
    const {alert} = props
    return (
        <>
            <div className={`alert alert-${alert.type}`} role="alert">
               <strong>{ alert.message}</strong>
            </div>

        </>
    )
}

export default Alert
