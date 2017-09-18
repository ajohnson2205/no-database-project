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
      search: ""
    };

  }


  post() {
    console.log(this);
    axios
    .post(baseURL, {
      firstName: this.state.newCatFirstName,
      lastName: this.state.newCatLastName
    })
    .then((response) => {console.log("Updated list of cats: ", response)})
    .catch((response) => {console.log("Issue! Issue!")})
  }

  get() {
    axios
      .get(baseURL)
      .then((response) => {this.setState({
        catArray: response.data
      }); console.log("Here is the response: ", response)})
      .catch((response) => {console.log("We have an issue.")})
    }


  componentWillMount() {
    this.get();
  }


  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)})
  }




  render() {
    return(
      <div>
        <div>
          <form ref="cat-form">
            <input
              type="text"
              ref="catFirstName"
              placeholder="First Name"
              form="cat-form"
              autoFocus="true"
              onChange={(e) => this.setState({newCatFirstName: this.refs.catFirstName.value})}></input>
            <input
              type="text"
              ref="catLastName"
              placeholder="Last Name"
              onChange={(e) => this.setState({newCatLastName: this.refs.catLastName.value})}></input>
            <button type="submit" onClick={(e) => {this.post()}}>Click me to create a cat!</button>
          </form>
        </div>

        <div>
          <div>
            <input
              type="text"
              ref="search"
              placeholder="Search for cats!"
              maxLength='5'
              onChange={this.updateSearch.bind(this)}
              >

              </input>
          </div>
          <div>
            <CatRender
              catArray={this.state.catArray.reverse()}
              search={this.state.search}
            />

          </div>
        </div>
      </div>
    )
  }
}
