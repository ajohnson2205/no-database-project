import React, {Component} from 'react';

export default class CatRender extends Component {



  render() {
    var mahCatz = this.props.catArray.map(catz => {
       return (
         <li>First Name: {catz.firstName}</li>
       )
    })

    return(
      <div>
        <ul>
          {mahCatz}
        </ul>
        {/* <li>
          {this.props.catz.firstName} {this.props.catz.lastName}
        </li> */}
      </div>
    )
  }
}
