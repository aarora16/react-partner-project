import React from 'react'

class Pet extends React.Component {
  handleButtons = (event) => {
    const adoptButton = event.target
    const adoptedButton = event.target.parentElement.firstElementChild

    adoptButton.classList.remove('primary')
    adoptButton.classList.add('disabled')
    adoptedButton.classList.remove('disabled')
    adoptedButton.classList.add('primary')
  }

  handleGender = (gender) => {
    if (gender === 'male') {
      return '♂ '
    } else {
      return '♀ '
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <p className="header">
            {this.handleGender(this.props.petInst.gender)}
            {this.props.petInst.name}
          </p>
          <div className="meta">
            <span className="date">{this.props.petInst.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInst.age}</p>
            <p>Weight: {this.props.petInst.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button" >Already adopted</button>
          <button className="ui primary button" onClick={event => this.handleButtons(event)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
