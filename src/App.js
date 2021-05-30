import logo from './logo.svg';
import './App.css';
import * as Actions from '../src/store/constants/index';
import { connect } from "react-redux";
import React, { useEffect } from "react"
import axios from 'axios';

const App = ({ count,users, inc, dec ,setUsers, deleteUser}) => {

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2")
    .then((response)=> setUsers(response.data.data))
  }, [setUsers]);

  console.log(setUsers);
  return (
    <div className="App">

<button className="btn btn-success" onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <h1>
        {count}
      </h1>

      <hr>
      </hr>

      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>FIRST_NAME</th>
            <th>AVATAR</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr  key={index}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>
                <img src={user.avatar} alt={user.first_name} />
              </td>
              <td><a onClick={()=>deleteUser(user.id)} key={user.id}>Delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
     count: state.c.count,
     users: state.c.users

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({ type: Actions.INC }),
    dec: () => dispatch({ type: Actions. DEC}),
    deleteUser: () => dispatch({type: Actions.DELETEPOST}),
    setUsers: (users) => dispatch({ type :Actions.SETUSERS,users})

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
