import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  helperMethod = () => {
    this.props.petArray.forEach(pet => {
      return (
        <Pet petInst={pet}/>
      )
    })
  }

  render() {
    return (
      <div className="ui cards">
        {this.helperMethod()}
      </div>
    )
  }
}

export default PetBrowser
