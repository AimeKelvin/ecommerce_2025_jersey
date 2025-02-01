"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../../lib/api";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-8">Our Jerseys</h1>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-300 h-72 rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold truncate">{product.name}</h2>
                <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                <p className="text-lg text-gray-800 font-bold mt-2">${Number(product.price).toFixed(2)}</p>
                <p
                  className={`text-sm font-medium mt-2 ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
                </p>
                <button
                  className={`mt-4 w-full py-2 rounded-lg text-white transition-all ${product.stock > 0 ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"}`}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? "Buy Now" : "Sold Out"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
