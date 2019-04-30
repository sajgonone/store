import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

//Provider
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

//Consumer


class ProductProvider extends Component {
  state= {
    products:storeProducts,
    detailProduct:detailProduct
  }
  handleDetail = () => {
    console.log('hello from detail');
  }
  addtoCart = () => {
    console.log('hello from add to cart');
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        handleDetail:this.handleDetail,
        addtoCart:this.addtoCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}



export { ProductProvider, ProductConsumer };
