import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../context/cart";
export default function CartItem({ _id, image, title, price, amount }) {
  // cart context
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(
    CartContext
  );
  return (

<>

   	           <tr class="table-body-row">
									<td class="product-remove">
                      <a    type="button"
                            className="cart-btn remove-btn"
                            onClick={() => {
                              removeItem(_id);
                            }}>
                         <i class="far fa-window-close"></i>
                      </a>
                  </td>
									<td class="product-image"><img src={image} alt=""/></td>
									<td class="product-name">{title}</td>
									<td class="product-price">${price}</td>
									<td class="product-quantity">
                     <input type="number" placeholder="0"/>
                  </td>
									<td class="product-total">1</td>
								</tr>


</>




  );
}
