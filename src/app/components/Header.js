import Image from "next/image";
import coffeeShopImg from "../coffeeShopImg.jpg";

function Header() {
  return (
    <div>
      <div className="grid items-center justify-items-center ">
        <div className="nameDescription">
          <h1 className="font-bold text-3xl">My Coffee Shop</h1>
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
    </div>
  );
}

export default Header;
