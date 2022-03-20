import React from 'react';
import ReactModal from '../ReactMoDal/ReactModal';
import "./SingleProduct.css"
const SingleProduct = (props) => {
    console.log(props.product);
    const {setCartCount}=props
    return (
        <div  data-aos="zoom-in" className='col-md-4 '> 
           <div className="card p-3 border shadow-lg mb-3">
               <img className='w-50 m-auto' src={props.product.image} alt="" />
           <h3>{props.product.title}</h3>
           <div className="d-flex justify-content-around">
           <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
           <button className='btn btn-danger'>Delete</button>
           {/* <button className='btn btn-info'>See Details</button> */}
           <ReactModal product={props.product}></ReactModal>
           </div>
           </div>
        </div>
    );
};

export default SingleProduct;