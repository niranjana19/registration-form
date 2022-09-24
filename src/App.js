import {useState, useEffect} from "react";
import './App.css';

function App() {
  const initialValues = {
    username:" ",
    email:" ",
    mobile:" ",
    country:" ",
    city:" ",
    state:" ",
    message:" ",
  };
  
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit]= useState(false);


const handleChange = (e) => {
  console.log(e.target);
  const {name, value} = e.target;
  setFormValues ({...formValues, [name]:value
  });
 

}

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(() => {
  console.log(formErrors);
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formValues);
  }
},[formErrors]);









const validate = (values) => {
  const errors = {}
  const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 
  if (!values.username) {
    errors.username = "Username is required!";

  }

  if(!values.email){
errors.username = "Email is required!";
  }

 

  return errors;
}




  return (
    <div className="container">
      <pre>{JSON.stringify(formValues,undefined, 2)}</pre>
      <form onSubmit = {handleSubmit} >
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value = {formValues.username} 
            onChange = {handleChange}
            />
            
          </div>
          <div className="field">
            <label>Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value = {formValues.email} 
            onChange = {handleChange}
            />

          </div>
          <div className="field">
            <label>Mobile</label>
            <input 
            type="text" 
            name="mobile" 
            placeholder="Mobile" 
            value = {formValues.mobile} 
            onChange = {handleChange}
            />


          </div>
          <div className="field">
            <label>Country</label>
            <input 
            type="text" 
            name="country" 
            placeholder="Country" 
            value = {formValues.country} 
            onChange = {handleChange}
            />


          </div>
          <div className="field">
            <label>City</label>
            <input 
            type="text" 
            name="city" 
            placeholder="City" 
            value = {formValues.city} 
            onChange = {handleChange}
            />

          </div>
          <div className="field">
            <label>State</label>
            <input 
            type="text" 
            name="state" 
            placeholder="State" 
            value = {formValues.state} 
            onChange = {handleChange}
            />

          </div>
          <div className="field">
            <label>Message</label>
            <input 
            type="text" 
            name="message" 
            placeholder="Message" 
            value = {formValues.message} 
            onChange = {handleChange}
            />

          </div>
          <p>{formErrors.password}</p>
          <button 
          type="button" 
          class="btn btn-primary">Submit</button>




        </div>



      </form>
    </div>



  );
}

export default App;
