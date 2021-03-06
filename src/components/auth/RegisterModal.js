import React, {Component} from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import "bootstrap/dist/css/bootstrap.min.css";

class RegisterModal extends Component {
  state = {
    modal: false,
    email: '',
    company: '',
    name: '',
    country: '',
    state: '',
    position: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }
  componentDidUpdate(prevProps) {
    const {error, isAuthenticated} = this.props;
    if(error !== prevProps.error){
      if(error.id === 'REGISTER_FAIL'){
        this.setState({msg: error.msg.msg})
      }else{
        this.setState({msg: null})
      }
    }

    if(this.state.modal){
      if(isAuthenticated){
        this.toggle()
      }
    }
  }
  toggle = () => {
    this.props.clearErrors()
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()

    const {email, company, name, country, state, position, password} = this.state

    const newUser = {email, company, name, country, state, position, password}

    this.props.register(newUser)

    // this.toggle()
  }


  render(){
    return (
      <div>
      <button className="btn btn-warning btn-lg modals modalsback" onClick={this.toggle}  id="orangebutton">
      REGISTER
    </button>

      <Modal isOpen={this.state.modal} toggle={this.toggle}>
      <ModalHeader toggle={this.toggle}>Register</ModalHeader>
      <ModalBody>
      {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null }
      <Form onSubmit={this.onSubmit}>
      <FormGroup>
      <Label for="email">Email</Label>
      <Input
      type="email"
      name="email"
      id="email"
      placeholder="Email"
      className="mb-3"
      onChange={this.onChange}
      />

      <Label for="company">Company</Label>
      <Input
      type="text"
      name="company"
      id="company"
      placeholder="Company"
      className="mb-3"
      onChange={this.onChange}
      />

      <Label for="name">Name</Label>
      <Input
      type="text"
      name="name"
      id="name"
      placeholder="Name"
      className="mb-3"
      onChange={this.onChange}
      />

      <Label for="country">Country</Label>
      <Input
      type="text"
      name="country"
      id="country"
      placeholder="Country"
      className="mb-3"
      onChange={this.onChange}
      />

      <Label for="state">State</Label>
      <Input
      type="text"
      name="state"
      id="state"
      placeholder="State"
      className="mb-3"
      onChange={this.onChange}
      />

      <Label for="position">Position</Label>
      <Input
      type="text"
      name="position"
      id="position"
      placeholder="Position"
      className="mb-3"
      onChange={this.onChange}
      />

      <Label for="password">Password</Label>
      <Input
      type="password"
      name="password"
      id="password"
      placeholder="Password"
      className="mb-3"
      onChange={this.onChange}
      />
    <Button color="warning" id="orangecolor" style={{ marginTop: "2rem" }} block>
      Register
      </Button>
      </FormGroup>
      </Form>
      </ModalBody>
      </Modal>
      </div>
    );

  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register,clearErrors })(RegisterModal);
