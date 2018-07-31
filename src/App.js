import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', tracks: [{'name': 'cheese'}]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("before")
    this.setState({value: event.target.value})
    console.log("after")
  }

  handleSubmit(event) {
    event.preventDefault();
      fetch(`http://localhost:8080/search?query=${this.state.value}`)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          // Examine the text in the response
          response.json().then(function(data) {
            console.log("processing data")
            console.log(data);
            this.setState(prevState => ({tracks: [{name:"gergerg"}]}))
            console.log("after2")
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header-container">
          <div className="App-header">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
              <h1 className="App-title">Splodgify</h1>
            </div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <input name="search" type="text" value={this.state.value} onChange={this.handleChange} />
                <button>Search</button>
              </form>
            </div>
          </div>
        </header>
        <div className="App-intro">

        </div>
        <div>
          {this.state.tracks.map((track, i) => <div key={i}>{track.name}</div>)}
        </div>
      </div>
    );
  }


}

export default App;
