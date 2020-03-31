import React, { Component } from 'react';

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
        <p>You are on Create Aeons component</p>
      </div>
    )
  }
}
export default CreateAeon;
