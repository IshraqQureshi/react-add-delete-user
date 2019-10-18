import React, { Component } from 'react';
import Auth from './auth';
import '../assets/css/login.css';


class Login extends Component {

  constructor(props){
    super();
    if( Auth.isAuthenticated() == 1 )
    {
      props.history.push('/users');
    }
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  handleChange = ( event ) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      [name]: value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    Auth.login(() => {
      this.props.history.push('/users');
    }, this.state.username, this.state.password); 

    console.log(Auth.isAuthenticated());
    
    if( Auth.isAuthenticated() == 0 ){
      this.setState({
        error: 'Invalid Credentials'
      });
    }

  }
      
  render() {
    return (
      <section>
        <div className="wrapper">
          <div className="loginFormWrapper">
            <form>
              <h2>Login</h2>
              <input placeholder="User Name" type="text" name="username" onChange={ this.handleChange } />
              <input placeholder="Password" type="password" name="password" onChange={ this.handleChange } />
              <button onClick={this.onSubmit}>Submit</button>
              <p className="error">{this.state.error}</p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default Login