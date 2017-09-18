import React, {Component} from 'react';
import '../App.css';
import cat1 from '../images/color-cats/singapura.png'
import cat2 from '../images/color-cats/chartreux.png'
import cat3 from '../images/color-cats/japanese-bobtail.png'
import cat4 from '../images/color-cats/sphynx-cat.png'
import cat5 from '../images/color-cats/turkish-angora.png'
import cat6 from '../images/color-cats/turkish-van.png'

export default class CatRender extends Component {

  randomCat() {
    var rando = Math.floor(Math.random()*6)+1
    switch(rando) {
      case 1: return (cat1)
      break;
      case 2: return (cat2)
      break;
      case 3: return (cat3)
      break;
      case 4: return (cat4)
      break;
      case 5: return (cat5)
      break;
      case 6: return (cat6)
      break;


    }
  }

  render() {
    let filteredCats = this.props.catArray.filter(
      (catz) => {
        return ( catz.firstName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1);
      }
    );

    var mahCatz = filteredCats.map(catz => {
       return (
         <div className="cat-box">
           <p>First Name: {catz.firstName}</p>
           <p>Last Name: {catz.lastName}</p>
           <img src={this.randomCat()} />
         </div>
       )
    })

    return(
        <div className="cat-renders">
          {mahCatz}
        </div>
    )
  }
}
