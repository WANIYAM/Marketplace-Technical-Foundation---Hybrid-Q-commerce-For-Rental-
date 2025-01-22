"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  tags: string[];
}

const CollectionPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(
        `*[_type == "product"]{
          _id,
          name,
          price,
          tags,
          "imageUrl": image.asset->url
        }`
      );
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-[#2A254B]">
      {/* Hero Section */}
      <section className="relative bg-gray-100 h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Exclusive Collection</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Explore the finest range of products, handcrafted for perfection.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 md:px-12 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Discover Our Products</h2>
          <p className="text-gray-600 mt-2">
            Browse through our exclusive range of ceramics, accessories, and more.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="w-full h-64 relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                <p className="text-gray-500 mt-1">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-200">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Love What You See?</h2>
          <p className="text-gray-600 mt-4">
            Browse our full collection to find your perfect fit.
          </p>
          <button className="mt-6 px-8 py-4 bg-[#2A254B] text-white rounded-md text-lg hover:bg-[#3B3476] transition-all">
            View Full Collection
          </button>
        </div>
      </section>
    </main>
  );
};

export default CollectionPage;
