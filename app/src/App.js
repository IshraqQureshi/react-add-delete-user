import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/App.css'

class App extends Component {

  render() {
    console.log(this.props);
    return (
      <section className="fullWidthSection">
        <div className="wrapper verticalCenter">
          <div className="heading homeHeading">
            <h1>Welcome To React App</h1>
          </div>
          <div className="btn btn-login">
              <Link to="/login">Login</Link>
          </div>
        </div>
      </section>
    );
  }

}
export default App