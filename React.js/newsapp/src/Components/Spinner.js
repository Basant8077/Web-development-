import React, { Component } from 'react'
import Loading from "./Loading.webp"
export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Loading} alt="Loading" myStyle={{ height: "10px", width: "20px" }} />
            </div>
        )
    }
}
