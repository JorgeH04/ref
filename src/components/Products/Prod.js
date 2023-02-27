import React from "react";
import { Link } from "react-router-dom";
// impt
import PropTypes from "prop-types";
//import img from "../../assets/mainBcg.jpeg";
export default function Product({ image, title, _id, price }) {
 
  return (

    <>
    <div class="col-lg-4 col-md-6 text-center strawberry">
        <div class="single-product-item">
						<div class="product-image">
               <Link to={`products/${_id}`} >
							<a ><img src={image} alt=""/></a>
              </Link>

						</div>
            <Link to={`products/${_id}`} >
						<h3>{title}</h3>
            </Link>
						<p class="product-price"><span>Per Kg</span> {price}$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>

    </>
   
  );
}
Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
