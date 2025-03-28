"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = (await params).id;

  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      };
      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
};

export default Product;
