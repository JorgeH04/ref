import React, { Component } from 'react'
import axios from 'axios'
//import {getPosts} from './service'
import { getAll, paginate } from './data';

export const ProductContext = React.createContext();


export default function ProductProvider({ children }) {

   const [loading, setLoading] = React.useState(false);   
   const [products, setProducts] = React.useState([]);
   const [featured, setFeatured] = React.useState([]);
   const [sorted, setSorted] = React.useState([]);
   const [page, setPage] = React.useState(0);
   const [filters, setFilters] = React.useState({
    search: "",
    name: "todos",
    shipping: false,
    price: "todos"
  });
  const [price, setPrice] = React.useState();

 

    const initialUrl = `https://fdback.herokuapp.com/api/post`;

 //  const initialUrl = `http://localhost:4000/api/post`;

    const initialUrlDos = `https://fdback.herokuapp.com`;

 // const initialUrlDos = `http://localhost:4000`;
  
  console.log(initialUrlDos)


   React.useEffect(() => {
    setLoading(true);
    async function fetchData() {
      let response = await getAll(initialUrl);
      setSorted(paginate(products));
      setProducts(response.data);
      setLoading(false);
  }
  fetchData();
  
  }, []);

  

   
   React.useEffect(() => {
    setLoading(true);
    async function fetchData() {
      let responsedos = await getAll(initialUrlDos);
      setFeatured(responsedos.data);
      setLoading(false);
      console.log(responsedos)
  }
  fetchData();
  }, []);



   const changePage = index => {
    setPage(index);
  };


   const updateFilters = e => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "todos" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({ ...filters, [filter]: filterValue });
    console.log(filter);
  };





  const changePrice = (number) => {
    setPrice(price + number);
  };


  const handleCheck = (e) => {
    //  let vv = [...products].map(({title}) => title)
    // console.log( vv)
    const checked = e.target.checked;

    if (checked) {
      let vv = [...products].map(({title}) => title)
      console.log( vv)
    } else {
      let vv = [...products].map(({price}) => price)
      console.log( vv)
    }
  };






 


  React.useLayoutEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    
    const { search, name, shipping, price } = filters;
    //
    if (name !== "todos") {
      newProducts = newProducts.filter(item => item.name === name);
    }
    if (shipping !== false) {
      newProducts = newProducts.filter(item => item.free_shipping === shipping);
    }
    if (price !== "todos") {
      newProducts = newProducts.filter(item => {
        if (price === 0) {
          return item.price < 2000;
        } else if (price === 2000) {
          return item.price > 2000 && item.price < 5000;
        } else {
          return item.price > 5000;
        }
        
      });
    }
    if (search !== "") {
      newProducts = newProducts.filter(item => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }

    setPage(0);

    setSorted(paginate(newProducts));
       // console.log( newProducts)
  }, [filters, products]);
  


  






    return (
      <ProductContext.Provider
      value={{
        products,
        featured,
        loading,
        filters,
        sorted,
        page,
        changePage,
        updateFilters,
        handleCheck,
        changePrice
      }}
    >
      {children}
    </ProductContext.Provider>

    )
}
