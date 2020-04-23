import React, { Component } from 'react';
import axios from 'axios';
import "./style/Styles.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
const Grand = props => (
  <Tr>
    <Td>{props.grand.productName}</Td>
    <Td>{props.grand.productCategory}</Td>
    <Td>{props.grand.weight}</Td>
    <Td>{props.grand.unit}</Td>
    <Td>{props.grand.productPriceIdr}</Td>
    <Td>{props.grand.productPriceAud}</Td>
    <Td>{props.grand.countryOfManufacture}</Td>
    <Td>{props.grand.productClaims}</Td>
    <Td>{props.grand.typeOfPackaging}</Td>
    <Td>{props.grand.positioningInStore}</Td>
    <Td>{props.grand.promotion}</Td>
    <Td>{props.grand.importer}</Td>
  </Tr>
)
class GrandsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grands: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('https://hidden-dawn-00072.herokuapp.com/grands/')
    .then(response => {
      this.setState({
        grands: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    console.log('Value', value)
    // setTimeout(() => {
    this.setState({
      query: value
    });
    // }, 3000);
  };
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  grandList() {
    return this.state.grands.map(currentgrand => {
      if(currentgrand.productName.toLowerCase().match(this.state.query.toLowerCase())){
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.weight.toString().match(this.state.query)){
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.unit.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.productPriceIdr.toString().match(this.state.query)){
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.productPriceAud.toString().match(this.state.query)){
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }else if (currentgrand.importer.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Grand grand={currentgrand} key={currentgrand._id}/>;
      }
    })
  }

  render() {
    return (
      <div className="render">
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <h4>Grand Lucky</h4>
          <input
            className="form-control form-control-lrg ml-3 w-50"
            name="query"
            id="search-input"
            type="search"
            placeholder="Search for a Product"
            aria-label="Search"
            onChange={this.handleInputChange}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            />
            <i className="fas fa-search fa-2x" id="searchIcon" aria-hidden="true"></i>
        </form>
        <br />


        <Table>
          <Thead>
            <Tr>
              <Th scope="row">Product Name</Th>
              <Th scope="row">Product Category</Th>
              <Th scope="row">Weight</Th>
              <Th scope="row">Unit</Th>
              <Th scope="row">Price (IDR)</Th>
              <Th scope="row">Price (AUD)</Th>
              <Th scope="row">Country of Manufacture</Th>
              <Th scope="row">Product Claims</Th>
              <Th scope="row">Type of Packaging</Th>
              <Th scope="row">Position in Store</Th>
              <Th scope="row">Promotion</Th>
              <Th scope="row">Importer</Th>
            </Tr>
          </Thead>
          <Tbody>
            { this.grandList() }
          </Tbody>
        </Table>
        <button title='Back to top' className='scroll'
          onClick={ () => { this.scrollToTop(); }}>
          <i className="fa fa-arrow-up" ></i>
        </button>
        <br/>
        <br/>
      </div>
    )
  }
}

export default GrandsList;
