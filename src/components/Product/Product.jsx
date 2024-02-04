import axios from '../../api/axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  const getProducts = async () => {
    try {
      const response = await axios.get(`products/`);
      console.log("resoponse", response);
      setProducts(response.data.results);
      setLoad(true);
    } catch (error) {
      console.error('상품 가져오기 실패', error.response.data);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      { load ?
        products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt="Product" />
            <p>{product.store_name}</p>
            <p>{product.product_name}</p>
            <p>{product.shipping_fee}</p>
          </div>
        ))
        // console.log("products", products)
        : <p>로딩중</p>
      }
    </>
  )
}

export default Product