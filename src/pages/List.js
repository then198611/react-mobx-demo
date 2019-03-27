import React, { Component } from 'react'
import { observer, inject} from 'mobx-react'

@inject('timer')
@observer
class List extends Component {

  render() {
    return (
      <div className="List">
        <p>List Page</p>

        <p>{this.props.timer.time}</p>
        <button onClick={this.props.timer.addTime}>add</button>
        <button onClick={this.props.timer.reduceTime}>reduce</button>
      </div>
    )
  }
}

export default List
