import React, { Component } from 'react';
import axios from 'axios';
import "./Styles.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
const Foodhall = props => (
  <Tr>
    <Td>{props.foodhall.productName}</Td>
    <Td>{props.foodhall.productCategory}</Td>
    <Td>{props.foodhall.weight}</Td>
    <Td>{props.foodhall.unit}</Td>
    <Td>{props.foodhall.productPriceIdr}</Td>
    <Td>{props.foodhall.productPriceAud}</Td>
    <Td>{props.foodhall.countryOfManufacture}</Td>
    <Td>{props.foodhall.productClaims}</Td>
    <Td>{props.foodhall.typeOfPackaging}</Td>
    <Td>{props.foodhall.positioningInStore}</Td>
    <Td>{props.foodhall.promotion}</Td>
    <Td>{props.foodhall.importer}</Td>
  </Tr>
)
class FoodhallList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodhalls: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/foodhalls/')
      .then(response => {
        this.setState({
          foodhalls: response.data
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

foodhallList() {
    return this.state.foodhalls.map(currentaeon => {
      if(currentaeon.productName.toLowerCase().match(this.state.query.toLowerCase())){
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.weight.toString().match(this.state.query)){
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.unit.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productPriceIdr.toString().match(this.state.query)){
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productPriceAud.toString().match(this.state.query)){
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.importer.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Foodhall foodhall={currentaeon} key={currentaeon._id}/>;
      }
    })
}

  render() {
    return (
      <div className="render">
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <i className="fas fa-search" aria-hidden="true"></i>
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
                { this.foodhallList() }
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

export default FoodhallList;
