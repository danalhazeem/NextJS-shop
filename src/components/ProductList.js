import React from "react";
import Image from "next/image";
import products from "@/app/products";
import ProductItem from "./ProductItem";

function ProductList() {
  const product = products.map((product) => (
    <div key={product.id} className="product-item">
      <Image src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  ));
  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list flex justfy-center items-center">
        {products.map((product) => (
          <ProductItem
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
