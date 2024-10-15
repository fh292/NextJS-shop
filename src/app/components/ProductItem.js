import React from "react";
import products from "../products";
import Image from "next/image";

function ProductItem() {
  const coffeeList = products.map((coffee) => (
    <div key={coffee.id} className="coffee-item">
      <p>{coffee.name}</p>
      <Image
        src={coffee.image}
        className="w-[200px] h-[250px]"
        alt="coffe_pic"
      />
      <p>{coffee.price}</p>
    </div>
  ));
  return (
    <div className="coffee-list flex justify-center items-center text-center gap-4">
      {coffeeList}
    </div>
  );
}

export default ProductItem;
