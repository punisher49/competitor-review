import React, { Component } from 'react';
import axios from 'axios';
import "./style/Styles.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Iframe from 'react-iframe'

class AeonImages extends Component {


  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose(){
    this.setState({
      show: false
    })
  }
  handleShow(){
    this.setState({
      show: true
    })
  }

  imageList() {
    return this.props.dataFromAeonList
  }
  render(){
    return (
      <>
      <Button className="btn-sm" onClick={() => this.handleShow()}>
      Image
      </Button>

      <Modal show={this.state.show} onHide={() => this.handleClose()} animation={false}>
      <Modal.Header closeButton>

      <Modal.Title>Product Image</Modal.Title>

      </Modal.Header>

      <Modal.Body>

      <Iframe src={this.imageList()} fluid />

      </Modal.Body>

      <Modal.Footer>

      <Button variant="secondary" onClick={ () => this.handleClose()}>
      Close
      </Button>

      </Modal.Footer>

      </Modal>
      </>
    );
  }
}

export default AeonImages
