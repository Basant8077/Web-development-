import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const {changeAlert} = props
  const navigate = useNavigate();
  const [input , setInput] = useState({name: "" , email: "" , password:"" , confirmpass: ""});

  const onChange=(event)=>{
    setInput({...input , [event.target.name]: event.target.value});
  }
  const handleSubmit = async(e)=>{
    //to stop reloding on submit use:
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: input.name , email: input.email , password : input.password })
    });
    const newUser = await response.json();
    localStorage.setItem("token" , newUser.JWT_TOKEN);
    changeAlert("Account created Successfullly","success");
    navigate('/');
    
  }

  return (
 <>
 <div className="container rounded " style={{
  width: "25vw",

  boxShadow: " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
  
  
 }}>
  <div className="d-flex justify-content-center ">
  <h1>Heloo , friend</h1>

  </div>
 <form onSubmit={handleSubmit}>
  <div className="mb-3 my-3">
    <label htmlFor="text" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' value={input.name} aria-describedby="emailHelp" required minLength={5} onChange={onChange}  />

    <label htmlFor="exampleInputEmail1" className="form-label my-3">Email address</label>
    <input type="email" className="form-control" value={input.email} id="email" name='email' aria-describedby="emailHelp" required onChange={onChange}/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={input.password} id="password" name='password' required onChange={onChange}  minLength={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" value={input.confirmpass} id="confirmpass" name='confirmpass'  onChange={onChange} minLength={5}/>
  </div>
  <button type="submit" disabled={input.password !== input.confirmpass || input.name.length<5 } className="btn btn-primary">Submit</button>
</form>
 </div>
 
 </>
  )
}

export default Signup
