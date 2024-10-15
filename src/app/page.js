import Image from "next/image";
import cookieShop from "./pics/cookieShop.jpeg";
//import cookie from "./pics/cookie.jpeg";
//import coffee from "./pics/coffee.jpeg";
import products from "./products.js";

export default function Home() {
  const product = products.map((product) => (
    <div key={product.id} className="product-item">
      <Image src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  ));

  return (
    <div className="grid items-center justify-items-center min ">
      <h1>Cookies and Beyond</h1>
      <h1>Where cookie maniacs gather</h1>

      <Image src={cookieShop} width={500} height={500} />
      <h1>Our Products</h1>
      <div className="flex justfy-center items-center gap-20 ">
        {/* <div>
          <Image src={cookie} width={200} height={200} />
          <p>Chocolate Cookies</p>
          <p>2.500</p>
        </div>
        <div>
          <Image src={coffee} width={200} height={200} />
          <p>Coffee </p>
          <p>1.500</p>
        </div>
      */}
      </div>
      <div>
        <div className="product-list flex justfy-center items-center">
          {product}
        </div>
      </div>
    </div>
  );
}
