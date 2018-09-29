import React, { Component } from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap'

const PictureTile = props => {

    return(
      <Col md={4} sm={6}>
        <Thumbnail href="#" src={props.picture.url} height="42" width="42"/>
        <h5>{props.name}</h5>
      </Col>
  )
}

export default PictureTile;
