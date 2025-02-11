import ProductList from "../api/products/ProductList";

const ProductShop = () => {
  return (
    <div className="min-h-screen text-white mx-auto flex justify-center flex-col items-center max-w-[90%]">
      <h1 className="text-2xl py-6 font-semibold text-[#D4AF37]">
        Magical Products
      </h1>
      <ProductList />
    </div>
  );
};

export default ProductShop;
