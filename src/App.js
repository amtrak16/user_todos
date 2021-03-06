import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import "react-router";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

class App extends Component {
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
            <Route path="/users" render={(props) => (<Users {...props} />)} /> 
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

class Users extends Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = initialState
    this.onNameIn = this.onNameIn.bind(this)
    this.onNameAdd = this.onNameAdd.bind(this)
    // this.onNameClick = this.onNameClick.bind(this)
  }

  onNameIn({ target }) {
    if (target.value.length === 0) {
      this.setState({ nameVal: target.value, nameErr: true, nameMsg: 'Please enter a user name.', nameSelect: false, nameRspMsg: '', disableSbmBtn: true })
    } else {
      this.setState({ nameVal: target.value, nameErr: false, nameMsg: '', nameSelect: false, disableSbmBtn: false })
    }
  }

  onNameAdd({ target }) {
    let newUsers = this.state.users.slice(0)
    let newUser = new User(this.state.nameVal)
    newUsers.push(newUser)
    console.log(this.state.nameVal, newUsers)
    this.setState({ users: newUsers })
  }

  // onNameClick({ target }) {
  //   let personSelected = []
  //   this.state.users.forEach((user) => {
  //     if (user.id.indexOf(target.value) === -1) { return; }
  //     personSelected.push(user)
  //     this.setState({ nameSelect: true, nameSelected: user })
  //   })
  // }

  render() {
    return (
      <div>
        <div class="row">
          <h3 class="small-2 columns">Add User</h3>
          <div class="small-2 columns md-text-field with-floating-label icon-left">
            <input type="search" id="name_in" placeholder='Add User' value={this.state.nameVal} onChange={this.onNameIn} />
            <label for="name_in"></label>
            <span class="error">{this.state.nameMsg}</span>
          </div>
        <button className="button btn-cta small-2 columns" disabled={this.state.disableSbmBtn} onClick={this.onNameAdd}>Add User</button>
          <div className="small-6 columns" >&nbsp;</div>
        </div>
        <div class="row">
          <div class="small-2 columns"></div>
          <div class="small-2 columns">
          </div>
          <div class="small-8 columns"></div>
        </div>

        <ul class="tabs vertical">
          {this.state.users.map((user, idx) => {
            return(
              <li className="tab-title small-1 columns" key={idx} ><NavLink exact to={`/users/${user.name}`} activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>{user.name}</NavLink></li>
            )
          })}
        </ul>

        {/* onClick={this.onNameClick} */}

        {/* <NavLink exact to="/users/:id" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>{user.name}</NavLink> */}

          {/* <li className="tab-title small-1 columns"><NavLink exact to="/users/1" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 1</NavLink></li>
          <li className="tab-title small-1 columns"><NavLink exact to="/users/2" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 2</NavLink></li>
          <li className="tab-title small-1 columns"><NavLink exact to="/users/3" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 3</NavLink></li>
          <li className="tab-title small-1 columns"><NavLink exact to="/users/4" activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>User 4</NavLink></li> */}
        <Route exact path="/users/:id" render={(props) => (<UserDetail {...props} />)} />
        {/* <Route path="/users" render={(props) => (<Users {...props} />)} />  */}
      </div>
    )
  }
}

class Todo {
  constructor(
    title,
    content
  ) {
    this.title = title;
    this.content = content;
  }
}
const initialTodoState = {
  todos: [ ],
  todoVal: '',
  todoMsg: '',
  todoErr: false,
  todoSelect: false,
  disableSbmBtn: true
}

class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = initialTodoState
    this.onTodoIn = this.onTodoIn.bind(this)
    this.onTodoAdd = this.onTodoAdd.bind(this)
    // this.onTodoClick = this.onTodoClick.bind(this)
  }

  onTodoIn({ target }) {
    if (target.value.length === 0) {
      this.setState({ todoVal: target.value, todoErr: true, todoMsg: 'Please enter a todo title.', todoSelect: false, todoRspMsg: '', disableSbmBtn: true })
    } else {
      this.setState({ todoVal: target.value, todoErr: false, todoMsg: '', todoSelect: false, disableSbmBtn: false })
    }
  }

  onContentIn({ target }) {
    if (target.value.length === 0) {
      this.setState({ contentVal: target.value, contentErr: true, contentMsg: 'Please enter a todo content.', contentSelect: false, contentRspMsg: '', disableSbmBtn: true })
    } else {
      this.setState({ contentVal: target.value, contentErr: false, contentMsg: '', contentSelect: false, disableSbmBtn: false })
    }
  }

  onTodoAdd({ target }) {
    let newTodos = this.state.todos.slice(0)
    let newTodo = new Todo(this.state.todoVal)
    newTodos.push(newTodo)
    console.log(this.state.todoVal, newTodos)
    this.setState({ todos: newTodos })
  }

  render () {
    return (
      <div>
        <div className="small-12 columns" >
          <div className="card">
            <h1 class="text-center">User {this.props.match.params.id}</h1>
          </div >
        </div>
        <div class="row">
          <h3 class="small-2 columns">Add Todo</h3>
          <div class="small-2 columns md-text-field with-floating-label icon-left">
            <input type="search" id="todo_in" placeholder='Title' value={this.state.todoVal} onChange={this.onTodoIn} />
            <label for="todo_in"></label>
            <span class="error">{this.state.todoMsg}</span>
          </div>
          <button className="button btn-cta small-2 columns" disabled={this.state.disableSbmBtn} onClick={this.onTodoAdd}>Add Todo</button>
          <div className="small-6 columns" >&nbsp;</div>
        </div>
        <div class="row">
          <div class="small-2 columns"></div>
          <div class="small-2 columns">
          </div>
          <div class="small-8 columns"></div>
        </div>

        <ul class="tabs vertical">
          {this.state.todos.map((todo, idx) => {
            return (
              <li className="tab-title small-3 columns" key={idx} ><NavLink exact to={`/todos/${todo.title}`} activeClassName="active" activeStyle={{ padding: '5px', backgroundColor: 'lightgrey', borderRadius: '5px' }}>{todo.title}</NavLink></li>
            )
          })}
        </ul>
        <Route exact path="/todos/:id" component={TodoDetail} />
      </div>
    )
  }
}

class TodoDetail extends Component {
  render() {
    return (
      <div>
        <div className="small-12 columns" >
          <div className="card">
            <h1 class="text-center">Todo {this.props.match.params.id}</h1>
          </div >
        </div>
      </div>
    )
  }
}

class Todos extends Component {
  render() {
    return (
      <div>
        <div className="small-12 columns" >
          <div className="card">
            <h1 class="text-center">Todos</h1>
          </div >
        </div>
      </div>
    )
  }
}


export default App;
