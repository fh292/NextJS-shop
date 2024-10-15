import Image from "next/image";

function ProductItem({ name, image, price }) {
  return (
    <div key={name} className="coffee-item">
      <p>{name}</p>
      <Image src={image} className="w-[200px] h-[250px]" alt="coffe_pic" />
      <p>{price}</p>
    </div>
  );
}

export default ProductItem;
