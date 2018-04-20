import React from 'react';
import { Jumbotron, Button,} from 'react-bootstrap'
import { Link } from "react-router-dom"

const Contact = (props) => {
 return(
   <div>

   <Jumbotron>

 <h1>Hello, world!</h1>
 <p>
   This is a simple hero unit, a simple jumbotron-style component for calling
   extra attention to featured content or information.
 </p>
 <p>
   <Button bsStyle="primary"><Link to="home">Back Home</Link></Button>
 </p>
 <p>DFdnfkjnsdkjnfjsndjfnjsdnfnjsnfdkjs</p><p>DFdnfkjnsdkjnfjsndjfnjsdnfnjsnfdkjs</p><p>DFdnfkjnsdkjnfjsndjfnjsdnfnjsnfdkjs</p>
</Jumbotron>
   </div>
 )
}

export default Contact;
