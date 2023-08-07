import React, { useState  } from 'react'
import {useNavigate} from 'react-router';

function Login(props) {

  const {changeAlert} = props
  let navigate = useNavigate();
  const [creditentials, setCreditentials] = useState({email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: creditentials.email, password: creditentials.password })
    });
    const authToken = await response.json(); // parses JSON response into native JavaScript objects
    if(authToken.success){
      //redirect
      //save the auth token
      localStorage.setItem("token" , authToken.JWT_TOKEN);
     changeAlert("Logged in","success");
     navigate('/');

    }
    else{
      changeAlert("User Not Found", "danger");
    }
  }
  const onChange = (event) => {
    setCreditentials({ ...creditentials, [event.target.name]: event.target.value })
  } //new method to set most item at same time

  return (
    <>
      {/* submit form hota h button nhi so form pr on submit lgega */}
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
          <input type="email" className="form-control" id="email" name="email" value={creditentials.email} aria-describedby="emailHelp"  onChange={onChange}  />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password"  onChange={onChange}   value={creditentials.password} name='password' />
        </div>
        <button type="submit" className="btn btn-primary"  >Submit</button>
      </form>
    </>
  )
}

export default Login
