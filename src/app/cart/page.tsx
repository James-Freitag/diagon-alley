"use client";
import { useState, useContext, createContext, ReactNode } from "react";

type Product = {
  id: string;
  name: string;
  img: string;
  description: string;
  category: string;
  price: number;
};

type CartItem = Product & { quantity: number };

type CartType = {
  cart: CartItem[];
  handleAddProuct: (product: Product) => void;
  handleRemoveProduct: (id: string) => void;
  handleClearCart: () => void;
};

type CartContextType = {
  cart: Product[];
  handleAddProduct: (product: Product) => void;
};
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddProuct = (product: Product) => {
    setCart((prevCart) => {
      const existItem = prevCart.find((item) => item.id === product.id);
      if (existItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveProduct = (id: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleClearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, handleAddProduct(product) {} }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
