import React, { useState } from 'react'

export default function About() {

  const [myStyle, setmystyle] = useState({  //my style will take an object
    color: 'white',
    backgroundColor: '#282828'
  });
  const[btn , btnChange] = useState('Light Mode');

  const togglestyle = () => {
   if(myStyle.color === 'white')
   {
    setmystyle({
      color: 'black',
      backgroundColor:' white',
      border: "1px solid white"
    })
    btnChange('Dark Mode')
   }
   else{
     setmystyle({
      color: 'white',
      backgroundColor: '#282828',
      border: "1px solid white"

     })
     btnChange('Light Mode')
   }
  }

  return (
    <>
      <div className="container my-5" style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="card" style={myStyle}>
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={myStyle}>
                  Collapsible Group Item
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                Some placeholder content for the first accordion panel. This panel is shown by default,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi sint, iste unde eveniet maiores ipsa officia cumque earum omnis amet dolores. Officiis architecto, corporis at iusto cum dolores. Placeat, quibusdam! thanks to the <code>.show</code> className.
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <button type="button" className="btn btn-primary" onClick={togglestyle} >{btn}</button>

        </div>
      </div>

    </>

  )
}
