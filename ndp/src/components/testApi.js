import React, {Component} from 'react';
import axios from 'axios';
import configz from '../config.js'

var admins = [
  {
    name: "Zoe",
    id: 1210731
  }, {
    name: "Candice",
    id: 1216697
  }, {
    name: "Tiffany",
    id: 1218272
  }
]

const proxyurl = "https://cors-anywhere.herokuapp.com/";

var url = "https://api.intercom.io/conversations?type=user&user_id=";

var config = {
  auth: {
    username: configz.key
  },
  headers: {
    'Accept': 'application/json'
  }
}

class TestApi extends Component {
  constructor() {
    super();
    this.state = {
      userId: ""
    }
  }

  search(query) {

    axios
      .get(proxyurl + url + query, config)
      .then((response) => {console.log(response)})
      .catch((response) => {console.log("error!")})
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  render() {
    return (
      <div>
        {/* <input type="text" ref="query" onChange={(e) => {
          this.updateSearch();
        }}/> */}
        <button for="query" onClick={(e) => {this.updateSearch()}}>Click me!</button>
        <input type="text" ref="query" onChange={(e) => this.setState({userId: this.refs.query.value})}></input>
      </div>
    )
  }
}

export default TestApi;
