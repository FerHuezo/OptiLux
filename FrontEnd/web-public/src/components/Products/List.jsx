import Card from "./Card.jsx";
import React from "react";

const ListProducts = ({ products }) => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {products?.map((product) => (
          <Card
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
