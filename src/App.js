import {useState} from "react";
import './App.css';

function App() {
  const initialValues = {
    username: " ",
    email: " ",
    mobile: " ",
    country: " ",
    city: " ",
    state: " ",
    message: " ",
  }
  const [formValues, setFormValues] = useState(initialValues);










  return (
    <div className="container">
      <form>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" 
            name="username" 
            placeholder="Username" 
            value = {formValues.username} />
            
          </div>
          <div className="field">
            <label>Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value = {formValues.email} />

          </div>
          <div className="field">
            <label>Mobile</label>
            <input 
            type="text" 
            name="mobile" 
            placeholder="Mobile" 
            value = {formValues.mobile} />

          </div>
          <div className="field">
            <label>Country</label>
            <input 
            type="text" 
            name="country" 
            placeholder="Country" 
            value = {formValues.country} />

          </div>
          <div className="field">
            <label>City</label>
            <input 
            type="text" 
            name="city" 
            placeholder="City" 
            value = {formValues.city} />

          </div>
          <div className="field">
            <label>State</label>
            <input 
            type="text" 
            name="state" 
            placeholder="State" 
            value = {formValues.state} />

          </div>
          <div className="field">
            <label>Message</label>
            <input 
            type="text" 
            name="message" 
            placeholder="Message" 
            value = {formValues.message} />

          </div>
          <button 
          type="button" 
          class="btn btn-primary">Submit</button>




        </div>



      </form>
    </div>



  );
}

export default App;
