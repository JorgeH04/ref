import React from "react";
import { ProductContext } from "../../context/products";
import ProductList from "./ProductsList";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
export default function PaginatedProducts() {
  const { sorted, page, changePage } = React.useContext(ProductContext);


  if (sorted[page]) {
    return (
      <>


  <div class="breadcrumb-section breadcrumb-bg">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="breadcrumb-text">
						<p>Fresh and Organic</p>
						<h1>Shop</h1>
					</div>
				</div>
			</div>
		</div>
	</div>




   	<div class="product-section mt-150 mb-150">
		<div class="container">

			<div class="row">
                <div class="col-md-12">

                    <div class="product-filters">
										<h1 className="search-errors text-center">
                            Products
                     </h1>
                     
                    </div>
                </div>
            </div>

			<div class="row product-lists">

			          <ProductList products={sorted[page]}></ProductList>

		 
     </div>

			 
			 
			 

			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="pagination-wrap">
						<ul>
							<li><a href="#">Prev</a></li>
							<li><a href="#">1</a></li>
							<li><a class="active" href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">Next</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>


    </>

  );


  } else {
    return (
      <h3 className="search-errors">
        lamentablemente su búsqueda no coincidió con ninguno de los productos
      </h3>
    );
  }
}
