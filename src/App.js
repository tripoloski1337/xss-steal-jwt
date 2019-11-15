import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from "./components/Data";

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      data : "",
      items : []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      items : [...this.state.items, this.state.data],
      data : ''
    });
  }

  changeData = (event) => {
    this.setState({
      data: event.target.value
    });
    console.log(this.state.data);
  }


  render(){

    const jwt = "this is our jwt token"
    localStorage.setItem('jwt-token', jwt);

      return (
      <div className="App">
        <h1>steal jwtToken in localStorage via xss</h1>
        <form onSubmit={this.handleSubmit}>      
          <table className="table">
            <tr>
              <td>>> </td>
              <td>
                <input type='text' className="form-control" onChange={this.changeData}/>
              </td>
              <td>
                <button className="button">Send </button>
              </td>
            </tr>
          </table>
        </form>
        <div className="dataList">
          <Data items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
