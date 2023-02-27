import React from "react";
import Product from "./Prod";
 
export default function ProductList({ title, products }) {

  return (
    <>

      
          {products.map(item => {
               return <Product key={item._id} {...item} />;
           })}
				
      
 
 
</>
      );
}
