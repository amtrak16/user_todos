import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import "react-router";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class User {
  constructor(
    name,
  ) {
    this.name = name;
  }
}
const initialState = {
  users: [
    new User('Bobby'),
    new User('Henry'),
    new User('Sofie'),
    new User('Miranda'),
    new User('Jerome'),
    new User('Millie')
  ],
  nameVal: '',
  nameMsg: '',
  nameErr: false,
  nameSelect: false,
  disableSbmBtn: true
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState
    this.onNameIn = this.onNameIn.bind(this)
    this.onNameAdd = this.onNameAdd.bind(this)

  }

  onNameIn({ target }) {
    if (target.value.length === 0) {
      this.setState({ nameVal: target.value, nameErr: true, nameMsg: 'Please enter a value for the users name.', nameSelect: false, nameRspMsg: '', disableSbmBtn: true })
    } else {
      this.setState({ nameVal: target.value, nameErr: false, nameMsg: '', nameSelect: false })
    }
  }

  onNameAdd({ target }) {
    let personSelected = []
    this.state.users.forEach((user) => {
      if (user.id.indexOf(target.id) === -1) { return; }
      personSelected.push(user)
      this.setState({ nameSelect: true, nameSelected: user })
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul className="heading-nav">
              <li className="heading-nav-entry"><NavLink exact to="/" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>Home</NavLink></li>
              <li className="heading-nav-entry"><NavLink exact to="/users" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>Users</NavLink></li>
              <li className="heading-nav-entry"><NavLink exact to="/todos" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>Todos</NavLink></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/users" render={(props) => (<Users {...props} state={this.state} />
            )} />
            <Route path="/todos" component={Todos} />
          </div>
        </Router>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="small-5 columns">&nbsp;</div>
          <div className="small-2 columns">
            <div className="card text-center">
              <h1>Users<br />and<br /> Todos</h1>
            </div>
          </div>
          <div className="small-5 columns">&nbsp;</div>
        </div>
      </div>
    )
  }
}

const Users = (props) => {
    const {match} = props
    return (
      <div>
        <div class="row">
          <h2 class="small-2 columns">Add User</h2>
          <div class="small-5 columns md-text-field with-floating-label icon-left">
            <input type="search" id="name_in" placeholder='Add User' value={props.state.nameVal} onChange={props.onNameIn} />
            <label for="name_in"></label>
            <span class="error">{props.state.nameMsg}</span>
          </div>
          <div className="small-2 columns" >&nbsp;</div>
          <button className="button btn-cta small-4 columns" disabled={props.state.disableSbmBtn} onClick={props.onNameAdd}>Add User</button>
          <div className="small-2 columns" >&nbsp;</div>
        </div>
        <ul class="tabs vertical">
          <li className="tab-title small-1 columns"><NavLink exact to="/users/1" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 1</NavLink></li>
          <li className="tab-title small-1 columns"><NavLink exact to="/users/2" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 2</NavLink></li>
          <li className="tab-title small-1 columns"><NavLink exact to="/users/3" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 3</NavLink></li>
          <li className="tab-title small-1 columns"><NavLink exact to="/users/4" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 4</NavLink></li>
        </ul>
        <Route exact path="/users/:id" component={UserDetail} />
      </div>
    )
  }

const UserDetail = (props) => {
  console.log(props)
  return (
    <div className="small-10 columns" >
      <div className="card">
        <h1>User {props.match.params.id}</h1>
        {props.match.params.id == 1 &&
          <h3>Now is the time for all good men to come to the aid of their country to defend its people and treasure against all comers, great and small, internal and external, in plain sight and covert.</h3>
        }
        {props.match.params.id == 2 &&
          <h3>What we really are matters more than what other people think of us. Jawaharlal Nehru
Read more at: https://www.brainyquote.com/quotes/jawaharlal_nehru_163872.</h3>
        }
        {props.match.params.id == 3 &&
          <h3>I didn't attend the funeral, but I sent a nice letter saying I approved of it. Mark Twain
Read more at: https://www.brainyquote.com/quotes/mark_twain_100376</h3>
        }
        {props.match.params.id == 4 &&
          <h3>Love is a better teacher than duty. Albert Einstein
Read more at: https://www.brainyquote.com/quotes/albert_einstein_148793.</h3>
        }

      </div >
    </div>)
}

class Todos extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>
          <li>Todo 3</li>
          <li>Todo 4</li>
        </ul>
      </div>
    )
  }
}

export default App;
