import React from 'react';
import { Jumbotron, Button, Col, Row} from 'react-bootstrap'
import { Link } from "react-router-dom"
import EmailForm from './EmailForm'
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component {
  constructor(props){
    super(props)

    this.addNewMessage = this.addNewMessage.bind(this)
  }

  addNewMessage(formPayload) {
    fetch('/api/v1/questions', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ messages: [...this.state.messages, responseData] })
    })
  }

  render() {
    let addNewMessage = (formPayload) => this.addNewMessage(formPayload)
     return(
       <div>
       <section data-scroll-index="5" className="social bg-darken">
         <div className="container">
           <div className="row social-icons">


             <a href="http://www.facebook.com" className="social-link col-md-3 col-6">
               <i className="fa fa-facebook" aria-hidden="true"></i>
               <span className="social-name">facebook</span>
             </a>


             <a href="https://www.twitter.com" className="social-link col-md-3 col-6">
               <i className="fa fa-twitter" aria-hidden="true"></i>
               <span className="social-name">twitter</span>
             </a>


             <a href="https://www.youtube.com" className="social-link col-md-3 col-6">
               <i className="fa fa-youtube" aria-hidden="true"></i>
               <span className="social-name">youtube</span>
             </a>


             <a href="https://www.instagram.com" className="social-link col-md-3 col-6">
               <i className="fa fa-instagram" aria-hidden="true"></i>
               <span className="social-name">instagram</span>
             </a>
           </div>
         </div>
       </section>

       <EmailForm addNewMessage={addNewMessage}/>

       </div>
     )
  }
}

export default Contact;
