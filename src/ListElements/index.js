import {Component} from 'react'

import './index.css'

class ListElements extends Component {
  render() {
    const {listGen} = this.props
    const {webSite, userName} = listGen
    const First = webSite.slice(0, 1)

    return (
      <li className="listElement">
        <div className="div1">
          <h1 className="letter">{First}</h1>
        </div>
        <div className="div1">
          <p>{webSite}</p>
          <p>{userName}</p>
          <img
            className="imageee"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        </div>
        <div className="div1">
          <button className="buttonn" type="button">
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default ListElements
