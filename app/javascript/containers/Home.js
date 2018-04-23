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
        <section data-scroll-index="0" className="home bg-darken">
          <div className="jumbotron">
            <h1>Oksana's Sweet Cakes</h1>
            <p >Best Homemade Cakes ever!</p>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
