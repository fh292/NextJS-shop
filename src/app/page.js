import Image from "next/image";
import coffeeShopImg from "./coffeeShopImg.jpg";
import americano from "./americano.jpg";
import latte from "./latte.jpg";
import products from "./products";
import ProductItem from "./components/ProductItem";

export default function Home() {
  return (
    <>
      <div className="grid items-center justify-items-center ">
        <div className="nameDescription">
          <h1 className="font-bold">My Coffee Shop</h1>
          <p>Where Coffee Meets Comfort</p>
        </div>
        <div
          style={{
            width: "400px",
          }}
        >
          <Image src={coffeeShopImg} />
        </div>
      </div>
      <ProductItem />
    </>
  );
}
