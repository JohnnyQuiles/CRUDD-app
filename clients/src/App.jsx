import React, { Component } from 'react';
import './App.css';
const serverUrl = 'localhost:4000';

async function createUser(user) {
  console.log("user:", user);
  const response = await fetch(`${serverUrl}/users/create-user`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },
    body: JSON.stringify({
      user
    })
  });
  const userResponse = await response.text();
  console.log('CREATE USER RESPONSE:', userResponse);
  return userResponse;
};
// async function getCurrentUser(event) {
// const response = await fetch(`${serverUrl}/get-current-user`, {
//   method: "POST", // *GET, POST, PUT, DELETE, etc.
//   mode: "cors",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     "access-control-request-headers": "content-type",
//     "x-Trigger": "CORS",
//   },
//   body: JSON.stringify({
//     id: event.id,
//     name: event.name
//   })
// });
// const currentUserResponse = await response.text();
// console.log("CURRENT USER RESPONSE:", currentUserResponse);
// return currentUserResponse;
// }; 
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: String,
      name: String,
      age: Number,
      favoriteMovies: [{ type: String }],
    }
  }
  handlerUser = (event) => {
    this.setState({ id: event.target.id });
  };
  onClickUserResponseHandler = async () => {
    const userResponse = await createUser(this.state.id);
    console.log('USER RESPONSE:', userResponse);
  };
  onClickGetUser
  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <h1>Crudd lol :D</h1>
        <br />

        <label>ID:</label>
        <input name='id' type='text' value={id.id} onChange={this.handlerUser}></input>
        <button id='getId' onClick={this.onClickUserResponseHandler}>Get ID</button>
        <br />

      </div>
    )
  }
}

export default App;

