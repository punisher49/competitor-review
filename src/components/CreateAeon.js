import React, { Component } from 'react';
import Search from "./Search";

class CreateAeon extends Component {
  constructor(props){
    super(props)
    this.state = {
      productName: '',
      productCategory: '',
      weight: '',
      unit: '',
      productPriceIdr: '',
      productPriceAud: '',
      countryOfManufacture: '',
      productClaims: '',
      typeOfPackaging: '',
      positioningInStore: '',
      promotion: '',
      importer: '',
      productImage: '',
    }
  }
  render(){
    return(
      <div>
          <Search/>
      </div>
    )
  }
}
export default CreateAeon;
