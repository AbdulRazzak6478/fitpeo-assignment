import React from 'react'
import '../styles/ProductSell.css';
import Search from './Search';
import { BiSolidUserRectangle } from 'react-icons/bi'
const ProductSell = () => {
  return (
    <>
        <div className="products-container">
            <div className="product-header">
                <h4>Product Sell</h4>
                <div className="">
                    <Search />
                    <select className='days'>
                        <option value="last-30-days">Last 30 days</option>
                    </select>
                </div>
            </div> 
            <div className="product-nav">
                <h6>Product Name</h6>
                <div className="nav">
                    <p>Stock</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>
            </div>
            <div className="product-item">
                <div className="product-detail">
                    <BiSolidUserRectangle fontSize={'30px'} />
                    <div className="product">
                        <p>Abstract 3D</p>
                        <p className="role">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    </div>
                </div>
                <div className="data">
                    <p>32 in stock</p>
                    <p>$ 45.99</p>
                    <p>20</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductSell