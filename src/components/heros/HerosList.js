import React, { Component } from 'react';
import "../style/Styles.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import HeroImages from "./HeroImages"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHeros } from '../../actions/heroActions';
import { ExportReactCSV } from '../ExportReactCSV'
import NavbarWithCountriesAndCategories from "../competitors/NavbarWithCountriesAndCategories";
const Hero = props => (
  <Tr>
    <Td>{props.hero.productName}</Td>
    <Td><HeroImages dataFromHeroList = {props.hero.productImage}/></Td>
    <Td>{props.hero.weight}</Td>
    <Td>{props.hero.unit}</Td>
    <Td>{props.hero.productPriceIdr.toFixed(2)}</Td>
    <Td>{props.hero.productPriceAud.toFixed(2)}</Td>
    <Td>01/03/2020</Td>
    <Td>{props.hero.countryOfManufacture}</Td>
    <Td>{props.hero.productClaims}</Td>

  </Tr>
)
class HerosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      intervalId: 0,
      fileName: 'HeroList',
    };
  }

  componentDidMount(){
    this.props.getHeros();
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

  heroList() {
    return this.props.hero.heros.map(currenthero => {
      if(currenthero.productName.toLowerCase().match(this.state.query.toLowerCase())){
        return <Hero hero={currenthero} key={currenthero._id}/>;
      }else if (currenthero.weight.toString().match(this.state.query)){
        return <Hero hero={currenthero} key={currenthero._id}/>;
      }else if (currenthero.unit.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Hero hero={currenthero} key={currenthero._id}/>;
      }else if (currenthero.productPriceIdr.toString().match(this.state.query)){
        return <Hero hero={currenthero} key={currenthero._id}/>;
      }else if (currenthero.productPriceAud.toString().match(this.state.query)){
        return <Hero hero={currenthero} key={currenthero._id}/>;
      }else if (currenthero.countryOfManufacture.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Hero hero={currenthero} key={currenthero._id}/>;
      }else if (currenthero.productClaims.toLowerCase().match(this.state.query.toLowerCase())) {
        return <Hero hero={currenthero} key={currenthero._id}/>;
      }else{
        return null
      }
    })
  }

  data = () => {
    const data = this.props.hero.heros
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
              <h4>Hero Market</h4>
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
                { this.heroList() }
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

  HerosList.propTypes = {
    getHeros: PropTypes.func.isRequired,
    hero: PropTypes.object.isRequired
  };
  const mapStateToProps = (state) => ({
    hero: state.hero,
    isAuthenticated: state.auth.isAuthenticated
  });

  export default connect(mapStateToProps, { getHeros })(HerosList);
