import React, { Component } from 'react';
import "../style/Styles.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import FoodhallImages from "./FoodhallImages"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFoodhalls } from '../../actions/foodhallActions';
import { ExportReactCSV } from '../ExportReactCSV'
import NavbarWithCountriesAndCategories from "../competitors/NavbarWithCountriesAndCategories";
const Foodhall = props => (
  <Tr>
    <Td>{props.foodhall.productName}</Td>
    <Td><FoodhallImages dataFromFoodhallList = {props.foodhall.productImage}/></Td>
    <Td>{props.foodhall.weight}</Td>
    <Td>{props.foodhall.unit}</Td>
    <Td>{props.foodhall.productPriceIdr.toFixed(2)}</Td>
    <Td>{props.foodhall.productPriceAud.toFixed(2)}</Td>
    <Td>01/03/2020</Td>
    <Td>{props.foodhall.countryOfManufacture}</Td>
    <Td>{props.foodhall.productClaims}</Td>

  </Tr>
)
class FoodhallList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      intervalId: 0,
      fileName: 'FoodhallsList',
    };
  }

  componentDidMount(){
    this.props.getFoodhalls();
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
    return this.props.foodhall.foodhalls.map(currentfoodhall => {
      if(currentfoodhall.productName.toLowerCase().match(this.state.query.toLowerCase())){
        return <Foodhall foodhall={currentfoodhall} key={currentfoodhall._id}/>;
      }else if (currentfoodhall.weight.toString().match(this.state.query)){
        return <Foodhall foodhall={currentfoodhall} key={currentfoodhall._id}/>;
      }else if (currentfoodhall.unit.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Foodhall foodhall={currentfoodhall} key={currentfoodhall._id}/>;
      }else if (currentfoodhall.productPriceIdr.toString().match(this.state.query)){
        return <Foodhall foodhall={currentfoodhall} key={currentfoodhall._id}/>;
      }else if (currentfoodhall.productPriceAud.toString().match(this.state.query)){
        return <Foodhall foodhall={currentfoodhall} key={currentfoodhall._id}/>;
      }else if (currentfoodhall.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Foodhall foodhall={currentfoodhall} key={currentfoodhall._id}/>;
      }else if (currentfoodhall.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Foodhall foodhall={currentfoodhall} key={currentfoodhall._id}/>;
      }else{
        return null
      }
    })
  }
  data = () => {
    const data = this.props.foodhall.foodhalls
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
              <h4>Foodhall Market</h4>
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
                  <Th scope="row">Weight</Th>
                  <Th scope="row">Unit</Th>
                  <Th scope="row">Price (IDR)</Th>
                  <Th scope="row">Price (AUD)</Th>
                  <Th scope="row">Date Created</Th>
                  <Th scope="row">Country of Manufacture</Th>
                  <Th scope="row">Product Claims</Th>

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
        </div>
      )
    }
  }

  FoodhallList.propTypes = {
    getFoodhalls: PropTypes.func.isRequired,
    foodhall: PropTypes.object.isRequired
  };
  const mapStateToProps = (state) => ({
    foodhall: state.foodhall,
    isAuthenticated: state.auth.isAuthenticated
  });

  export default connect(mapStateToProps, { getFoodhalls })(FoodhallList);
