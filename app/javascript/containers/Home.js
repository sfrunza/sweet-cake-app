import React, { Component } from 'react';
import { Jumbotron, Button,} from 'react-bootstrap'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div className="index">

          <Jumbotron>
        HOME
        </Jumbotron>

      </div>
    )
  }
}

export default Home;
