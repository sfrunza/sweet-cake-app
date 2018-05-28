import React from 'react';
import { Jumbotron, Button, Col, Row} from 'react-bootstrap'
import { Link } from "react-router-dom"
import EmailForm from './EmailForm'
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      costumers: []
    }

    this.addNewMessage = this.addNewMessage.bind(this)
  }

  addNewMessage(formPayload) {
    fetch(`/api/costumers`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })

    .then(body => {
      let newCostumer = this.state.costumers.concat(body)
      this.setState({
        costumers: newCostumer
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let addNewMessage = (formPayload) => this.addNewMessage(formPayload)

     return(
       <div className="contacts-container">
         <section data-scroll-index="5" className="social bg-darken">
           <div className="container">
             <div className="row social-icons">
               <a href="http://www.facebook.com" className="social-link col-xs-6 col-sm-3">
                 <span className="social-name"><i className="fa fa-facebook" aria-hidden="true"></i><br></br>facebook</span>
               </a>
               <a href="https://www.twitter.com" className="social-link col-xs-6 col-sm-3">
                 <span className="social-name"><i className="fa fa-twitter" aria-hidden="true"></i><br></br>twitter</span>
               </a>
               <a href="https://www.youtube.com" className="social-link col-xs-6 col-sm-3">
                 <span className="social-name"><i className="fa fa-youtube" aria-hidden="true"></i><br></br>youtube</span>
               </a>
               <a href="https://www.instagram.com" className="social-link col-xs-6 col-sm-3">
                 <span className="social-name"><i className="fa fa-instagram" aria-hidden="true"></i><br></br>instagram</span>
               </a>
             </div>
           </div>
         </section>
         <section className="container">
           <div className="col col-md-4">
               <h4>Phone Numbers</h4>
                 <p className="paragraph">1-234-567-890</p>
                 <p className="paragraph">1-987-654-321</p>

               <h4>Email Address</h4>
                <p className="paragraph">contact@gmail.com</p>

               <h4>Business Hours</h4>
                <p className="paragraph">Mon-Fri : 9am - 9pm</p>
                <p className="paragraph">Sat : 9am - 2pm</p>
            </div>
            <div className="col col-md-8">
                 <EmailForm addNewMessage={addNewMessage}/>
            </div>
         </section>
      </div>
     )
  }
}

export default Contact;
