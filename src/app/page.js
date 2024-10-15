import Image from "next/image";
import coffeeShopImg from "./coffeeShopImg.jpg";
export default function Home() {
  const title = {
    fontSize: "40px",
  };
  return (
    <>
      <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <title>app/coffeeShop.js</title>
        <h1>My Coffee Shop</h1>
        <p>Where Coffee Meets Comfort</p>
        <Image src={coffeeShopImg} />
        <link rel="icon" href="/logo.jpg" sizes="any" />
      </div>
    </>
  );
}
