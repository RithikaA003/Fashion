import header from "./header/header.jpg";

import tshirt1 from "./Tshirts/tshirt1.jpg";
import tshirt2 from "./Tshirts/tshirt2.jpg";
import tshirt3 from "./Tshirts/tshirt3.jpg";

import shirt1 from "./shirts/shirt1.jpg";
import shirt2 from "./shirts/shirt2.jpg";

export const assets = {
  header,
};

const products = [
  {
    id: 1,
    name: "Oversized Black T-Shirt",
    price: 799,
    image: tshirt2,
    category: "tshirt",
  },
  {
    id: 2,
    name: "Casual White Shirt",
    price: 1299,
    image: shirt1,
    category: "shirt",
  },
  {
    id: 3,
    name: "Graphic GenZ Shirt",
    price: 999,
    image: shirt2,
    category: "shirt",
  },
  {
    id: 4,
    name: "Blue Denim Shirt",
    price: 1499,
    image: shirt2,
    category: "shirt",
  },
  {
    id: 5,
    name: "Black Graphic T-Shirt",
    price: 1499,
    image: tshirt3,
    category: "tshirt",
  },
];

export default products;