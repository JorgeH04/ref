import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/products";
import { CartContext } from "../../context/cart";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";

export default function ProductDetails() {
  const { _id } = useParams();
  const history = useHistory();

  const { products } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const product = products.find(item => item._id === _id);

  const [details, setDetails] = React.useState([{title: "", price: "", amount: "", image: ""}]);
  const [price, setPrice] = React.useState();
  const [title, setTitle] = React.useState();
  const [amount, setAmount] = React.useState();

  



  React.useEffect(() => {
    let prod = products.find(item => item._id === _id);
    setDetails(prod) 
  }, []);
 

  React.useEffect(() => {
    let vim = products.find(item => item._id === _id);
    let bb = vim.price
    setPrice(bb) 
  }, []);



  const handleCheckdos = (e) => {

    const checked = e.target.checked;

    if (checked) {
      let vv = products.find(item => item._id === _id);
      let ca = vv.price
      let car = vv.amountdos
      let val = ca + car
      console.log( ca + car)
      setPrice(ca + car)
    } else {
      let vc = products.find(item => item._id === _id);
      let cac = vc.price
       setPrice(cac)
    }
  };


  const handleCheck = (e) => {

    const checked = e.target.checked;

    if (checked) {
      let vv = products.find(item => item._id === _id);
      let ca = vv.price
      let car = vv.amount
      let val = ca + car
      console.log( ca + car)
      setPrice(ca + car)
      // setDetails({
      //   ...details,
      //   [e.target.name]: e.target.value
      // })   
    } else {
      let vc = products.find(item => item._id === _id);
      let cac = vc.price
       setPrice(cac)
    }
  };


  if (products.length === 0) {
    return <Loading />;
  } else {
   const { image, description } = product;


    return (
      <>

      <div class="breadcrumb-section breadcrumb-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="breadcrumb-text">
              <p>See more Details</p>
              <h1>Single Product</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  

<div class="single-product mt-150 mb-150">
<div class="container">
  <div class="row">
    <div class="col-md-5">
      <div class="single-product-img">
        <img src={image}  alt=""/>
      </div>
    </div>
    <div class="col-md-7">
      <div class="single-product-content">
        <h3>{title}</h3>
        <p class="single-product-pricing"><span>Per Kg</span> ${price}</p>

        <p class="single-product-pricing">  
        <div>
            <div>
              <input
                type="checkbox"
                name={details.price}
                value={details.val}
                onChange={(e) => handleCheck(e)}
              />
              <label htmlFor="double">Spice</label>
            </div>
        </div>
        </p>



      


        <p>{  description }</p>
       
        <div class="single-product-form">
    

            <a
            class="cart-btn"
            onClick={() => {
              addToCart( {...details, price, });
              history.push("/cart");
            }}
          >
            Add to card
          </a>


      
        </div>
     
      </div>
    </div>
  </div>
</div>
</div>





</>

    );
  }
}
