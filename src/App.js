
import './App.css';

function App() {
  return (
    <div className="container">
      <form>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form"></div>
        <div className="field">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />

        </div>
        <div className="field">
          <label>Mobile</label>
          <input type="mobile" name="mobile" placeholder="Mobile" />

        </div>
        <div className = "field">
          <label>Country</label>
          <input type = "country" name = "country" placeholder = "Country" />

        </div>
        <div className = "field">
          <label>City</label>
          <input type = "city" name = "city" placeholder = "City" />

        </div>
        <div className = "field">
          <label>State</label>
          <input type = "state" name = "state" placeholder = "State" />

        </div>
        <div className = "field">
          <label>Message</label>
          <input type = "message" name = "message" placeholder = "Message" />

</div>
<button type = "button" class = "btn btn-primary">Submit</button>







      </form>
    </div>



  );
}

export default App;
