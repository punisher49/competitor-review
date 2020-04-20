import React, { Component } from 'react';
import axios from 'axios';
import "./style/Styles.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
const Primo = props => (
  <Tr>
    <Td>{props.primo.productName}</Td>
    <Td>{props.primo.productCategory}</Td>
    <Td>{props.primo.weight}</Td>
    <Td>{props.primo.unit}</Td>
    <Td>{props.primo.productPriceIdr}</Td>
    <Td>{props.primo.productPriceAud}</Td>
    <Td>{props.primo.countryOfManufacture}</Td>
    <Td>{props.primo.productClaims}</Td>
    <Td>{props.primo.typeOfPackaging}</Td>
    <Td>{props.primo.positioningInStore}</Td>
    <Td>{props.primo.promotion}</Td>
    <Td>{props.primo.importer}</Td>
  </Tr>
)
class PrimosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primos: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/primos/')
    .then(response => {
      this.setState({
        primos: response.data
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

  primoList() {
    return this.state.primos.map(currentprimo => {
      if(currentprimo.productName.toLowerCase().match(this.state.query.toLowerCase())){
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.weight.toString().match(this.state.query)){
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.unit.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.productPriceIdr.toString().match(this.state.query)){
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.productPriceAud.toString().match(this.state.query)){
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }else if (currentprimo.importer.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Primo primo={currentprimo} key={currentprimo._id}/>;
      }
    })
  }

  render() {
    return (
      <div className="render">
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <h4>Primo Market</h4>
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
            { this.primoList() }
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

export default PrimosList;
