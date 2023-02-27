import React from "react";
import { Link } from "react-router-dom";
export default function EmptyCart() {
  return (

<>
    <div class="breadcrumb-section breadcrumb-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="breadcrumb-text">
						<p>Fresh and Organic</p>
						<h1>Cart</h1>
					</div>
				</div>
			</div>
		</div>
	</div>

<div class="cart-section mt-150 mb-150">
<div class="container">
  <div class="row">
    <div class="col-lg-8 col-md-12">
      <div class="cart-table-wrap">
        <table class="cart-table">
          <thead class="cart-table-head">
            <tr class="table-head-row">
              <th class="product-remove"></th>
              <th class="product-image">Product Image</th>
              <th class="product-name">Name</th>
              <th class="product-price">Price</th>
              <th class="product-quantity">Quantity</th>
              <th class="product-total">Total</th>
            </tr>
          </thead>
          <tbody>


          
          <section className="empty-cart section">
      <h2>carro vacío... </h2>
      <Link to="/list" className="btn btn-primary">
        a llenarlo
      </Link>
    </section>
             
             
          </tbody>
        </table>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="total-section">
        <table class="total-table">
         
        </table>
        <div class="cart-buttons">
        
        </div>
      </div>

      <div class="coupon-section">
         
      </div>
    </div>
  </div>
</div>
</div>







   </>
  );
}
