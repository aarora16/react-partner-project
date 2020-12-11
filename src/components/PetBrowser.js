import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  helperMethod = () => {
    return (
      this.props.petArray.map(pet => <Pet petInst={pet} key={pet.id}/>)
     ) 
  }

  render() {
    return (
      <div className="ui cards">
        { this.helperMethod() }
      </div>
    )
  }
}

export default PetBrowser
