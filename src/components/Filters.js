import React from 'react'

class Filters extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedAnimalType: ""
    }
  }

  handleAnimal = (event) => {
    this.setState({
      selectedAnimalType: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleFiltering(this.state.selectedAnimalType)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.selectedAnimalType} onChange={event => this.handleAnimal(event)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={event => this.handleSubmit(event)} >Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
