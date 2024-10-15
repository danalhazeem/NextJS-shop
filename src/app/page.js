import Image from "next/image";
import cookieShop from "./cookieShop.jpeg";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min ">
      <h1>Cookies and Beyond</h1>
      <h1>Where cookie maniacs gather</h1>
      <Image src={cookieShop} width={500} height={500} />
    </div>
  );
}
