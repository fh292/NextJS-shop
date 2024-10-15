import Image from "next/image";

function ProductItem({ id, name, image, price }) {
  return (
    <div>
      <p>{name}</p>
      <Image src={image} className="w-[200px] h-[250px]" alt="coffe_pic" />
      <p>{price}</p>
    </div>
  );
}

export default ProductItem;
