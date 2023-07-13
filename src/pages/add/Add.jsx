
import React, { useState } from 'react';
import '../add/Add.scss';
// import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Add() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [priceInSale, setPriceInSale] = useState('');
  const [madeIn, setMadeIn] = useState('');
  const [bio, setBio] = useState("");
  const [brand, setBrand] = useState('');
  const [kilo, setKilo] = useState('');
  const [articul, setArticul] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  
  const handlePriceInSaleChange = (event) => {
    setPriceInSale(event.target.value);
  };
  
  const handleMadeInChange = (event) => {
    setMadeIn(event.target.value);
  };
  
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };
  
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  
  const handleKiloChange = (event) => {
    setKilo(event.target.value);
  };
  const handleArticulChange = (event) => {
    setArticul(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (editIndex === -1) {
      const newProduct = {
        name,
        price,
        priceInSale,
        madeIn,
        bio,
        brand,
        articul,
        kilo
      };
      setProducts([...products, newProduct]);
    } else {
      // Update existing product
      const updatedProducts = [...products];
      updatedProducts[editIndex] = {
        name,
        price,
        priceInSale,
        madeIn,
        bio,
        brand,
        articul,
        kilo
      };
      setProducts(updatedProducts);
      setEditIndex(-1);
    }
    
    setName('');
    setPrice('');
    setPriceInSale('');
    setMadeIn('');
    setBio(false);
    setBrand('');
    setArticul('');
    setKilo('');
  };
  
  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };
  
  const handleEdit = (index) => {
    const productToEdit = products[index];
    setName(productToEdit.name);
    setPrice(productToEdit.price);
    setPriceInSale(productToEdit.priceInSale);
    setMadeIn(productToEdit.madeIn);
    setBio(productToEdit.bio);
    setBrand(productToEdit.brand);
    setKilo(productToEdit.kilo);
    setArticul(productToEdit.articul);
    setEditIndex(index);
  };
  
  const handleCancel = () => {
    setName('');
    setPrice('');
    setPriceInSale('');
    setMadeIn('');
    setBio(false);
    setBrand('');
    setKilo('');
    setArticul('');
    setEditIndex(-1);
  };
  
  return (
    
    <div className="Add">
    
    <div className="add__container">
    <div className="add-block">
    
    
    
    
    <form onSubmit={handleSubmit}>
    <label >Name:</label> <br />
    <input
    className='input-name'
    type="text"
    value={name}
    onChange={handleNameChange}
    required
    /> <br />
    <div>
    <label >Brand :</label> <br />
    <input
    className='first-inp'
    type="text"
    value={brand}
    onChange={handleBrandChange}
    required
    /> 
    <label>Articul :</label> 
    <input
     className='first-inp'
    type="number"
    value={articul}
    onChange={handleArticulChange} 
    required
    />
    </div>
    <label>Made in ...</label> <br />
    <input
     className='first-inp'
    type="text"
    value={madeIn}
    onChange={handleMadeInChange}
    /> <br /> 
     <label>
    About :
    </label> <br />
    <input
    className='about'
    type="text"
    checked={bio}
    onChange={handleBioChange}
    />
   
    <br />
    <label >Weight</label> <br />
    <input
    className='weight'
    type="text"
    value={kilo}
    onChange={handleKiloChange}
    required
    />
    




<div className="add2">
  <div className="add__container2">
    <div className="add-block2">
    {/* <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Choose The Color
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Blue</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Black</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

    {/* <br />   */}
    <div className="lastt-inp">

   
    <div className="last-inp">
    <label >Price </label> <br />
    <input
    type="number"
    
    value={priceInSale}
    onChange={handlePriceInSaleChange}
    />
      </div>
      <div className="latest-inp">
      <label >Price on Sale</label>  <br />
    <input
    type="number"
    
    value={price}
    onChange={handlePriceChange}
    required
    />
      </div>
      </div>
  

    </div>
  </div>
</div>
   

    
    {editIndex === -1 ? (
      <button type="submit">Add Product</button>
      ) : (
        <>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
        </>
        )}
        </form>
        <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product">
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Price in Sale: {product.priceInSale}</p>
          <p>Made In: {product.madeIn}</p>
          <p>BIO: {product.bio}</p>
          <p>Brand: {product.brand}</p>
          <p>Kilo: {product.kilo}</p>
          <p>Articul: {product.articul}</p>

          <div className="button-group">
          <button onClick={() => handleEdit(index)}>Change</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
          </div>
          
          ))}
          
          </div>
          </div>
          </div>
          </div>
          );
        }
        
        export default Add;
        