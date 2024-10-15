import ProductItem from "../components/ProductItem";
import products from "../products";

function ProductList() {
  return (
    <div className="flex justify-center items-center text-center gap-4">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
