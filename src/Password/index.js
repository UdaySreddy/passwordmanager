import {Component} from 'react'

import ListElements from '../ListElements'

import './index.css'

const initialList = []
class Password extends Component {
  state = {
    requiredList: initialList,
    id: 1,
    webSite: '',
    userName: '',
    password: '',
  }

  webSite = event => {
    this.setState({webSite: event.target.value})
  }

  userName = event => {
    this.setState({userName: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
  }

  addToList = () => {
    this.setState(prevState => ({id: prevState.id + 1}))

    initialList.push(this.state)
  }

  render() {
    const {requiredList} = this.state
    console.log(requiredList)
    const x = requiredList.length
    return (
      <div>
        <img
          className="appLogo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="container1">
          <form className="textContainer" onSubmit={this.submitForm}>
            <p>add new password</p>
            <div className="textbox">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                onChange={this.webSite}
                className="enterText"
                type="text"
                placeholder="Enter website"
              />
            </div>
            <div className="textbox">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                onChange={this.userName}
                className="enterText"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="textbox">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                onChange={this.password}
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="buttonBox">
              <button
                onClick={this.addToList}
                className="button1"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              className="passwordManager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
            />
          </div>
        </div>
        <div className="container2">
          <div className="hedderContainer">
            <div className="counter">
              <p>Your passwords </p>
              <p className="number">{x}</p>
            </div>
            <div className="textbox">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input type="search" placeholder="search" />
            </div>
          </div>
          <hr />
          <div className="checkboxContainer">
            <input id="check" className="checkboxx" type="checkbox" />
            <label htmlFor="check">Show Password</label>
          </div>

          {requiredList.length > 0 ? (
            <ul className="listt">
              {requiredList.map(each => (
                <ListElements listGen={each} key={each.id} />
              ))}
            </ul>
          ) : (
            <div className="nopass">
              <img
                className="nopasswords"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
              />
              <p>No passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Password
