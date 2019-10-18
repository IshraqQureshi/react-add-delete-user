import React from 'react'
import '../assets/css/users.css';
import auth from './auth';

class Users extends React.Component {

  constructor(props){
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.userList = [];
    localStorage.setItem('userList', localStorage.getItem('userList'));
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      fname: '',
      lname: '',
      email: ''
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

  saveUser = () => {
    this.userData = {fname: this.state.fname, lname: this.state.lname, email: this.state.email}
    this.prevData = JSON.parse(localStorage.getItem('userList'));
    this.prevData.push(this.userData);
    localStorage.setItem('userList', JSON.stringify(this.prevData));
    this.setState(
      { 
        fname: '',
        lname: '',
        email: ''
      });
  }

  deleteUser = (e) => {
    //e.preventDefault();
    let deleteUserIndex = (e.target.dataset.index);
    this.prevData = JSON.parse(localStorage.getItem('userList'));
    this.prevData.splice(deleteUserIndex, 1);
    localStorage.setItem('userList', JSON.stringify(this.prevData));
    this.setState({ state: this.state });
  }

  render() {
    this.users = JSON.parse(localStorage.getItem('userList'));
    this.users = this.users == null ? [] : this.users; 
    return (
      <section className="fullwidth userSection">
        <div className="wrapper">
          <div className="secHeader">
            <h2>User's</h2>
            <button
            onClick={() => {
              auth.logout(() => {
                this.props.history.push('/login');
              })
            }
            }
            >Logout</button>
          </div>
          <div className="addUser">
            <input type="text" name="fname" placeholder="First Name" onChange={this.handleChange} value={this.state.fname}/>
            <input type="text" name="lname" placeholder="Last Name" onChange={this.handleChange} value={this.state.lname}/>
            <input type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
            <button onClick={this.saveUser}>Submit</button>
          </div>
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>

            

            {this.users.map( (obj, index) =>
              <tr key={index}>
                <td>{index+1}</td>
                <td>{obj.fname}</td>
                <td>{obj.lname}</td>
                <td>{obj.email}</td>
                <td><button onClick={this.deleteUser} data-index={index}>Delete</button></td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}
export default Users