import React from 'react'

class Pet extends React.Component {
  handleButtons = () => {
    document.querySelector('.ui disabled button').style.diplay = "block"
    document.querySelector('.ui primary button').style.diplay = "none"
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button" >Already adopted</button>
          <button className="ui primary button" onClick={this.handleButtons}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
