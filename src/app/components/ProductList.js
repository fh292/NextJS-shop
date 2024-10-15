import ProductItem from "../components/ProductItem";
import products from "../products";

function ProductList() {
  return (
    <div className="flex justify-center items-center text-center gap-4">
      {products.map((product) => (
        <ProductItem
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );

  //   return (
  //     <div>
  //       const coffeeList = ()  products.map((coffee) (
  //       <div key={coffee.id} className="coffee-item">
  //         <p>{coffee.name}</p>
  //         <Image
  //           src={coffee.image}
  //           className="w-[200px] h-[250px]"
  //           alt="coffe_pic"
  //         />
  //         <p>{coffee.price}</p>
  //       </div>
  //       ));
  //     </div>
  //   );
}

export default ProductList;
