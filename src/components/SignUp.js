
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  
  const [role, setRole] = useState("role");
  

  const getIsFormValid = () => {
    // Implement this function
    if(!firstName  || !validateEmail(email) || !password.value || password.value.length <8 || role === 'role'){
       return false;
    }
    return true;
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
        value: "",
        isTouched: false
    });
    setRole('role')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type='text' placeholder="First name" />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type='text' placeholder="Last name" />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email address" />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input onBlur={() => setPassword({...password, isTouched: true})} value={password.value} onChange={(e) => setPassword({...password, value: e.target.value })}  type='' placeholder="Password" />
            {/* <h3>{password.value.length >=1 && password.value.length <6 ? PasswordErrorMessage() : ''}</h3> */}
            <h3>{password.isTouched && password.value.length <8 ? (<PasswordErrorMessage />): null}</h3>
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value='individual'>Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
      
    </div>
  
  );
}

export default SignUp;
