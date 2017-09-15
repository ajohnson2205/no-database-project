import React, {Component} from 'react';
import axios from 'axios';



var url = "https://swapi.co/api/planets/schema"


class TestApi extends Component {
constructor() {
  super();
  this.state = {
    returnObject: {}
  }
}



componentWillMount() {
  axios
    .get(url)
    // .then((response) => {console.log(response)})
    .then((response) => {this.setState({returnObject: response})})
}

  render() {
    return(
      <h1>Additional content from another file.</h1>
    )
  }
}

export default TestApi;
