import React, { Component } from 'react';
import "../style/Styles.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import "../style/Styles.css"
class GrandImages extends Component {


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
    return this.props.dataFromGrandList
  }
  render(){
    return (
      <>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/512px-Circle-icons-image.svg.png" width="35px" height="35px" alt="photos" onClick={() => this.handleShow()}/>

      <Modal show={this.state.show} onHide={() => this.handleClose()} animation={false}>
      <Modal.Header closeButton>

      <Modal.Title>Product Image</Modal.Title>

      </Modal.Header>

      <Modal.Body>

      <Image src={this.imageList()} fluid />

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

export default GrandImages
