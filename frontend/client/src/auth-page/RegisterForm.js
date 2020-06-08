import React, { Component } from 'react'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRegister = () => {
    const { username, password } = this.state
    fetch(
      '/register',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
      }
    )
      .then(res => res.text())
      .then(res => console.log('res text:', res))
      .catch(err => console.log('res err:', err))
  }
  render() {
    const { username, password } = this.state
    return (
      <div>
        <section>
          <input name="username" placeholder="username" value={username} onChange={this.handleChange} />
        </section>
        <section>
          <input name="password" placeholder="password" value={password} onChange={this.handleChange} />
        </section>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}
