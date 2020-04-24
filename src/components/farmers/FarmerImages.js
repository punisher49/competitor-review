import React, { Component } from 'react';
import "../style/Styles.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import "../style/Styles.css"
class FarmerImages extends Component {


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
    return this.props.dataFromFarmerList
  }
  render(){
    return (
      <>
      <img src="https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png" width="40px" height="40px" alt="photos" onClick={() => this.handleShow()}/>

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

export default FarmerImages
