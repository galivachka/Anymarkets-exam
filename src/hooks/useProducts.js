import React, {useState, useEffect} from "react";
export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () =>{
    
    fetch( "https://64a6fca7096b3f0fcc80ef97.mockapi.io/products")
  .then(response  => response.json())
  .then(response => this.setState({ products: response.data() }))
  .catch(err => console.error(err));
  }

  useEffect(()=>{ //equivalent to componentDidMount
    getProducts();
  }, [])

  return {products, setProducts}
}