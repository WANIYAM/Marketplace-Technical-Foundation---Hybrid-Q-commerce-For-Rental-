/* eslint-disable @typescript-eslint/no-unused-vars */
import Brand from "./components/brand";
// import Ceramics from "./components/ceramics";
// import Product from "./components/popular"
import Benefit from "./components/benefit";
import Touch from "./components/touch";
import Navbar from "./components/navbar";
import { client } from "@/sanity/lib/client";
import NewHero from "./components/newHero";
import Popular from "./components/popular";
const getProducts = async () => {
  const products = await client.fetch(
    `*[_type == "product"][0...4]{
      _id,
      name,
      price,
      tags,
      "imageUrl": image.asset->url
    }`
  );
  return products;
};

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Navbar />
      <NewHero/>
      <Brand />
      <Popular/>
      <Benefit />
      <Touch/>
    </>
  );
}
