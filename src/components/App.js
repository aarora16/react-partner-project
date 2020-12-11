import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  filtering = (animalType) => {
    if (animalType === undefined) {
      let tempVar = '/api/pets'
      fetch(tempVar)
      .then(resource => resource.json())
      .then((data) => {
        this.setState({
          ...this.state,
          pets: data
        })
      })
    } else {
      let tempVar = `/api/pets?type=${animalType}`
      fetch(tempVar)
      .then(resource => resource.json())
      .then((data) => {
        this.setState({
          ...this.state,
          pets: data
        })
      })
    }
    this.setState({
      ...this.state,
      filters: {
        type: animalType
      }
    })

  }

  // handlePropPassing = (petArray) => {
  //   return petArray
  // }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleFiltering={this.filtering}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petArray={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
