import React, { Component } from 'react';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class BreadCrumbs extends Component {
    constructor(props) {
      super(props);

    }
    render(){
       return(
         <div id="footer">
            <Breadcrumb className="footer-block">
              <Breadcrumb.Item  href="/home" to="/home">Home</Breadcrumb.Item>
              <Breadcrumb.Item  href="/photo" to="/photo">
                   Photo
              </Breadcrumb.Item>
              <Breadcrumb.Item  href="/pricing" to="/pricing">Prices</Breadcrumb.Item>
              <Breadcrumb.Item  href="/contact" to="/contact">Contact</Breadcrumb.Item>
              <p>
              Copyright © Sweet-Cakes - All Rights Reserved.
              </p>
            </Breadcrumb>
        </div>

 )
}
}

export default BreadCrumbs;
