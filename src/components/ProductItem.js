import Image from "next/image";
import products from "@/app/products";

function ProductItem({ id, name, image, price }) {
  return (
    <div key={id} className="product-item">
      <Image src={image} alt={name} />
      <p>{name}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default ProductItem;
