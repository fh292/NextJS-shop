import Image from "next/image";
import coffeeShopImg from "./coffeeShopImg.jpg";
import americano from "./americano.jpg";
import latte from "./latte.jpg";
import products from "./products";

export default function Home() {
  const coffeeList = products.map((coffee) => (
    <div key={coffeeShopImg.id} className="coffee-item">
      <p>{coffee.name}</p>
      <Image src={coffee.image} className="w-[200px] h-[250px]" />
      <p>{coffee.price}</p>
    </div>
  ));
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

      <div className="coffee-list2 flex justify-center items-center text-center gap-4">
        {coffeeList}
      </div>
    </>
  );
}
