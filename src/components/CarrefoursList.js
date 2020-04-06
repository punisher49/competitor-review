import React, { Component } from 'react';
import axios from 'axios';
import "./style/Styles.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
const Carrefour = props => (
  <Tr>
    <Td>{props.carrefour.productName}</Td>
    <Td>{props.carrefour.productCategory}</Td>
    <Td>{props.carrefour.weight}</Td>
    <Td>{props.carrefour.unit}</Td>
    <Td>{props.carrefour.productPriceIdr}</Td>
    <Td>{props.carrefour.productPriceAud}</Td>
    <Td>{props.carrefour.countryOfManufacture}</Td>
    <Td>{props.carrefour.productClaims}</Td>
    <Td>{props.carrefour.typeOfPackaging}</Td>
    <Td>{props.carrefour.positioningInStore}</Td>
    <Td>{props.carrefour.promotion}</Td>
    <Td>{props.carrefour.importer}</Td>
  </Tr>
)
class CarrefoursList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrefours: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/carrefours/')
    .then(response => {
      this.setState({
        carrefours: response.data
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

  carrefourList() {
    return this.state.carrefours.map(currencarrefour => {
      if(currencarrefour.productName.toLowerCase().match(this.state.query.toLowerCase())){
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.weight.toString().match(this.state.query)){
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.unit.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.productPriceIdr.toString().match(this.state.query)){
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.productPriceAud.toString().match(this.state.query)){
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
      }else if (currencarrefour.importer.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Carrefour carrefour={currencarrefour} key={currencarrefour._id}/>;
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
            { this.carrefourList() }
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

export default CarrefoursList;
