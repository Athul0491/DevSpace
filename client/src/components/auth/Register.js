import React, { useState }  from "react";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState({});
  
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name : {name},
      email : {email},
      password : {password},
      password2 : {password2}
    }
    console.log(newUser);
  }
  return (
    
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevConnector account</p>
            <form onSubmit = {handleSubmit}>
              <div className="form-group">
                <input type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Name" 
                  name="name" 
                  value = {name}
                  onChange={changeName}
                  required />
              </div>
              <div className="form-group">
                <input type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Email Address" 
                  name="email"
                  value = {email}  
                  onChange={changeEmail}/>
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a Gravatar email
                </small>
              </div>
              <div className="form-group">
                <input type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Password" 
                  name="password" 
                  value = {password} 
                  onChange={changePassword}
                />
              </div>
              <div className="form-group">
                <input type="password" 
                  className="form-control form-control-lg" 
                  placeholder="Confirm Password" 
                  name="password2" 
                  value = {password2} 
                  onChange={changePassword2}
                />
              </div>
              <input type="submit" 
                className="btn btn-info btn-block mt-4" 
              />
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;
