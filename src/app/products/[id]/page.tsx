import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = (await params).id;

  const router = useRouter();
  const { id } = router.query; // Get the dynamic 'id' from the URL
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Fetch product data based on the ID
      const fetchProduct = async () => {
        // Assuming you have a static data source or an API to get product details
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
