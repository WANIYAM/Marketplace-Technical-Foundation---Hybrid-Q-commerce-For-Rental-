'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { simplifiedProduct } from '../interface';

const AllProducts = () => {
  const [data, setData] = useState<simplifiedProduct[]>([]);
  const [filteredData, setFilteredData] = useState<simplifiedProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch data on the client side
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        price,
        "imageUrl": images[0].asset->url,
        "slug": slug.current,
        "category": category->name
      }`;
      const result: simplifiedProduct[] = await client.fetch(query);
      setData(result);
      setFilteredData(result);

      // Extract unique categories
      const uniqueCategories = Array.from(new Set(result.map((item) => item.category)));
      setCategories(uniqueCategories);
    };

    fetchData();
  }, []);

  // Handle filtering
  const handleFilter = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      setFilteredData(data.filter((product) => product.category === category));
    } else {
      setFilteredData(data); // Show all products if no category is selected
    }
  };

  return (
    <div className="my-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Filter Section */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl text-gray-800 tracking-tight">Our All Products</h2>
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory || ''}
              onChange={(e) => handleFilter(e.target.value || null)}
              className="border-gray-300 rounded-md p-2"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 xl:gap-x-8">
          {filteredData.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={`product/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt="product image"
                    height={2000}
                    width={2000}
                    className="w-full h-full lg:w-full lg:h-full object-cover object-center cursor-pointer scale-105 transition duration-300"
                  />
                </Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm text-gray-500 font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
