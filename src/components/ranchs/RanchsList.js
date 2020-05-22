import React, { Component } from 'react';
import "../style/Styles.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import RanchImages from "./RanchImages"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRanchos } from '../../actions/ranchActions';
import { ExportReactCSV } from '../ExportReactCSV'
import NavbarWithCountriesAndCategories from "../competitors/NavbarWithCountriesAndCategories";
const Rancho = props => (
  <Tr>
    <Td>{props.rancho.productName}</Td>
    <Td><RanchImages dataFromRanchList = {props.rancho.productImage}/></Td>
    <Td>{props.rancho.productCategory}</Td>
    <Td>{props.rancho.weight}</Td>
    <Td>{props.rancho.unit}</Td>
    <Td>{props.rancho.productPriceIdr}</Td>
    <Td>{props.rancho.productPriceAud}</Td>
    <Td>{props.rancho.countryOfManufacture}</Td>
    <Td>{props.rancho.productClaims}</Td>
    <Td>{props.rancho.typeOfPackaging}</Td>
    <Td>{props.rancho.positioningInStore}</Td>
    <Td>{props.rancho.promotion}</Td>
    <Td>{props.rancho.importer}</Td>
    <Td>{props.rancho.location}</Td>
  </Tr>
)
class RanchosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranchos: [],
      query: '',
      intervalId: 0,
      fileName: 'RanchsList',
    };
  }
  componentDidMount(){
    this.props.getRanchos();
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

  ranchoList() {
    return this.props.rancho.ranchos.map(currentrancho => {
      if(currentrancho.productName.toLowerCase().match(this.state.query.toLowerCase())){
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.weight.toString().match(this.state.query)){
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.unit.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.productPriceIdr.toString().match(this.state.query)){
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.productPriceAud.toString().match(this.state.query)){
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.importer.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else if (currentrancho.location.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Rancho rancho={currentrancho} key={currentrancho._id}/>;
      }else{
        return null
      }
    })
  }
  data = () => {
    const data = this.props.rancho.ranchos
    const result = data.map(({_id,productImage,...rest}) => ({...rest}));
    const query = this.state.query
    const search= result.filter(x=> [
      'productName',
      'productCategory',
      'weight',
      'unit',
      'productPriceIdr',
      'productPriceAud',
      'countryOfManufacture',
      'productClaims',
      'typeOfPackaging',
      'positioningInStore',
      'promotion',
      'importer']
      .reduce((accumulator,currentValue)=> x[currentValue].toString().toLowerCase().includes(query.toLowerCase()) || accumulator, false) );
      return search
    }
  render() {
    return (
      <div>
        <NavbarWithCountriesAndCategories/>
      <div className="render">
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <h4>Ranch Market</h4>
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
          <ExportReactCSV csvData={this.data()} fileName={this.state.fileName} />
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
              <Th scope="row">Location</Th>
            </Tr>
          </Thead>
          <Tbody>
            { this.ranchoList() }
          </Tbody>
        </Table>
        <button title='Back to top' className='scroll'
          onClick={ () => { this.scrollToTop(); }}>
          <i className="fa fa-arrow-up" ></i>
        </button>
        <br/>
        <br/>
      </div>
    </div>
    )
  }
}

RanchosList.propTypes = {
  getRanchos: PropTypes.func.isRequired,
  rancho: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  rancho: state.rancho,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getRanchos })(RanchosList);
