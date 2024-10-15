import Americano from "./americano.jpg";
import Latte from "./latte.jpg";
import TurkishCoffee from "./turkishCoffee.jpeg";
import ProductItem from "./components/ProductItem";

const products = [
  {
    id: 1,
    name: "Iced Americano",
    price: "1 KD",
    image: Americano,
  },
  {
    id: 2,
    name: "Iced Latte",
    price: "1.5 KD",
    image: Latte,
  },
  {
    id: 3,
    name: "Turkish Coffee",
    price: "1.75 KD",
    image: TurkishCoffee,
  },
];

export default products;
