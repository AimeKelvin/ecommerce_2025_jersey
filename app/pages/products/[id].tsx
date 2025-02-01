"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProductById } from "../../../lib/api"; // Import your API method

export default function ProductInfo() {
  const router = useRouter();
  const { id } = router.query; // Capture the product ID from the URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
am halfway to giving up h=th