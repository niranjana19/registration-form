import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = {
    username: " ",
    email: " ",
    mobile: " ",
    country: " ",
    city: " ",
    state: " ",
    message: " ",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";

    }

    if (!values.email) {
      errors.email = "Email is required!";

    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }



    return errors;
  };




  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success"> Signed in successfully </div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}



      <form onSubmit={handleSubmit} >
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />

          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />

          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formValues.mobile}
              onChange={handleChange}
            />


          </div>
          <div className="field">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formValues.country}
              onChange={handleChange}
            />


          </div>
          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formValues.city}
              onChange={handleChange}
            />

          </div>
          <div className="field">
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formValues.state}
              onChange={handleChange}
            />

          </div>
          <div className="field">
            <label>Message</label>
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
            />

          </div>

          <button
            type="button"
            className="fluid ui button blue">Submit</button>




        </div>



      </form>
    </div>



  );
}

export default App;


