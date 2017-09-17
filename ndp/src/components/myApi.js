import React, {Component} from 'react';
import axios from 'axios'
import CatRender from './catRender'


const baseURL = 'http://localhost:3001/api/cats'

export default class MyApi extends Component {
  constructor() {
    super();

    this.state = {
      catArray: [],
      newCatFirstName: "",
      newCatLastName: "",
      color: undefined,
      blerg: "Meow meow meow!",
      cats: ['Ted', 'Gary', 'Snowball'],
      singleCat: "Ted"
    }

  }

  get() {
    axios
      .get(baseURL)
      .then((response) => {this.setState({
        catArray: response.data
      }); console.log("Here is the response: ", response)})
      .catch((response) => {console.log("We have an issue.")})
    }

  post() {
    axios
      .post(baseURL, {
        firstName: this.state.newCatFirstName,
        lastName: this.state.newCatLastName
      })
      .then((response) => {console.log("Updated list of cats: ", response)})
      .catch((response) => {console.log("Issue! Issue!")})
  }

  componentWillMount() {
    this.get();
  }




  render() {
    return(
      <div>
        <div>
          <form ref="cat-form">
            <input
              placeholder="First Name"
              form="cat-form"
              type="text"
              ref="catFirstName"
              autoFocus="true"
              onChange={(e) => this.setState({newCatFirstName: this.refs.catFirstName.value})}></input>
            <input type="text" ref="catLastName"
              onChange={(e) => this.setState({newCatLastName: this.refs.catLastName.value})}></input>
            <button onClick={(e) => {this.post()}}>Click me to create a cat!</button>
          </form>
        </div>
        {/* <div>
          <button onClick={(e) => {this.listCats()}}>List all of the cats!</button>
        </div> */}

        <div>
          {/* <CatRender
            catArray={this.state.catArray}
            cats={this.state.cats}
            singleCat={this.state.singleCat}
          /> */}

          {/* <ul>
            {this.state.catArray.map((cat) => {
              return <CatRender catz={cat} key={cat.id} />
            })}
          </ul> */}

          <ul>
            <CatRender catArray={this.state.catArray} />
          </ul>




        </div>
      </div>
    )
  }
}
