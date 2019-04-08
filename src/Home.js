import React, { Component } from "react";
import { withAuth } from '@okta/okta-react';
import logo from "./logo.svg";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {authenticated: false};
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
      }
    
      async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
          this.setState({authenticated});
        }
      }
    
      async componentDidMount() {
        await this.checkAuthentication();
      }
    
      async componentDidUpdate() {
        await this.checkAuthentication();
      }
    
      async login() {
        this.props.auth.login('/')
      }
    
      async logout() {
        this.props.auth.logout('/');
      }
    
    render() {
    const {authenticated} = this.state;
    let body = null;
    if (authenticated) {
        body = (
          <div className="Buttons">
            <button onClick={this.logout}>Logout</button>
            <p>
            </p>
          </div>
        );
      } else {
        body = (
          <div className="Buttons">
            <button onClick={this.login}>Login</button>
          </div>
        );
      }
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
            {body}
          </header>
        </div>
      );
    //   return (
    //         <div className="App">
    //           <header className="App-header-container">
    //             <div className="App-header">
    //               <div>
    //                 <img src={logo} className="App-logo" alt="logo" />
    //               </div>
    //               <div>
    //                 <h1 className="App-title">Splodgify</h1>
    //               </div>
    //               <div>
    //                 <Link to="/songs">Songs</Link>
    //                 Albums
    //                 Artists
    //                 <Link to="/admin">Admin</Link>
    //               </div>
    //               <Search />
    //             </div>
    //           </header>
    //           <div className="App-intro" />
    //           <div>
    //               <Switch>
    //                 <Route exact path="/admin" component={Admin}/>
    //                 <Route path="/songs" component={MusicList}/>
    //               </Switch>
    //           </div>
    //             <PlaybackControls />
    //         </div>
    //   );
    }
  }
  
  export default withAuth(Home);