import {Component} from 'react'

import './index.css'

class ListElements extends Component {
  render() {
    const {listGen} = this.props

    return (
      <ul>
        {listGen.map(each => (
          <li key={each.id}>
            <p>{each.webSite}</p>
            <p>{each.userName}</p>
          </li>
        ))}
      </ul>
    )
  }
}

export default ListElements
