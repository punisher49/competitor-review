import React, { Component } from 'react';
import axios from 'axios';
import "./Styles.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
const Hero = props => (
  <Tr>
    <Td>{props.hero.productName}</Td>
    <Td>{props.hero.productCategory}</Td>
    <Td>{props.hero.weight}</Td>
    <Td>{props.hero.unit}</Td>
    <Td>{props.hero.productPriceIdr}</Td>
    <Td>{props.hero.productPriceAud}</Td>
    <Td>{props.hero.countryOfManufacture}</Td>
    <Td>{props.hero.productClaims}</Td>
    <Td>{props.hero.typeOfPackaging}</Td>
    <Td>{props.hero.positioningInStore}</Td>
    <Td>{props.hero.promotion}</Td>
    <Td>{props.hero.importer}</Td>
  </Tr>
)
class HerosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: [],
      query: '',
      intervalId: 0
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/heros/')
      .then(response => {
        this.setState({
          heros: response.data
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

heroList() {
    return this.state.heros.map(currenthero => {
      if(currenthero.productName.toLowerCase().match(this.state.query.toLowerCase())){
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.productCategory.toLowerCase().match(this.state.query.toLowerCase())) {
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
    }else if (currenthero.typeOfPackaging.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.positioningInStore.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.promotion.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
    }else if (currenthero.importer.toLowerCase().match(this.state.query.toLowerCase())) {
      return <Hero hero={currenthero} key={currenthero._id}/>;
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
    )
  }
}

export default HerosList;
