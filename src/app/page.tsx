"use client";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState } from "react";
import MainContent from "./components/MainContent";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCartToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header handleCartToggle={handleCartToggle} />
      <Cart isOpen={isOpen} handleCartToggle={handleCartToggle} />
      <MainContent />
    </>
  );
}
