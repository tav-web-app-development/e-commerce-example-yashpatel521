import React from "react";
import Card from "../components/Card";
import { productList } from "../Data/productList";
const ProductList = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-4 gap-4">
        {productList.map((product) => (
          <Card key={product.id} card={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
