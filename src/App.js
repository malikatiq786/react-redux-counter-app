import logo from './logo.svg';
import './App.css';
import * as Actions from '../src/store/constants/index';
import { connect } from "react-redux";

const App = ({ count, inc, dec}) => {
  console.log(count);
  return (
    <div className="App">

<button className="btn btn-success" onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <h1>
        {count}
      </h1>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
     count: state.c.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({ type: Actions.INC }),
    dec: () => dispatch({ type: Actions. DEC})

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
