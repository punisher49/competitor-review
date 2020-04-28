import React, { Component } from 'react';
import axios from 'axios';
import "../style/Styles.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import app from "../auth/base";
import AeonImages from "./AeonImages"
// import { ExportCSV } from '../ExportCSV'
// import { ExportReactCSV } from '../ExportReactCSV'

const Aeon = props => (
  <Tr>
    <Td>{props.aeon.productName}</Td>
    <Td><AeonImages dataFromAeonList = {props.aeon.productImage}/></Td>
    <Td>{props.aeon.productCategory}</Td>
    <Td>{props.aeon.weight}</Td>
    <Td>{props.aeon.unit}</Td>
    <Td>{props.aeon.productPriceIdr}</Td>
    <Td>{props.aeon.productPriceAud}</Td>
    <Td>{props.aeon.countryOfManufacture}</Td>
    <Td>{props.aeon.productClaims}</Td>
    <Td>{props.aeon.typeOfPackaging}</Td>
    <Td>{props.aeon.positioningInStore}</Td>
    <Td>{props.aeon.promotion}</Td>
    <Td>{props.aeon.importer}</Td>
  </Tr>
)
class AeonsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aeons: [],
      query: '',
      intervalId: 0,
      showImage: false,
      fileName: 'AeonList'
    };
    this.handleCounter = this.handleCounter.bind(this);
  }
  componentDidMount() {
    axios.get('https://hidden-dawn-00072.herokuapp.com/aeons')
    .then(response => {
      this.setState({
        aeons: response.data
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
  noMatch(){
    return (
      <div>No match</div>
    )
  }

  aeonList() {
    return this.state.aeons.map(currentaeon => {
      if(currentaeon.productName.toLowerCase().match(this.state.query.toLowerCase())){
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.weight.toString().match(this.state.query)){
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.unit.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productPriceIdr.toString().match(this.state.query)){
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productPriceAud.toString().match(this.state.query)){
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }else if (currentaeon.importer.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Aeon aeon={currentaeon} key={currentaeon._id}/>;
      }
    })
  }
  handleCounter(_State){
    console.log(_State);
  }
  render() {
    return (
      <div className="render">
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <h4>Aeon Market</h4>

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
              <Th scope="row">Image</Th>
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
            { this.aeonList() }
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

export default AeonsList;


// <ExportReactCSV csvData={this.aeonList().toString()} fileName={this.state.fileName} />
