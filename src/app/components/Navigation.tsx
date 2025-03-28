"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();
  return (
    <nav className="sticky top-0 z-[9999] h-16 flex justify-between items-center px-4 lg:px-12 bg-[#272727] text-[#f5f5e6] ">
      <Image
        src="/favicon.png"
        alt="diagon alley logo"
        width={60}
        height={60}
      />
      <ul className="flex space-x-4 font-lg font-semibold capitalize justify-center items-center ">
        <li
          className={
            pathName === "/" ? "text-lg text-[#D4AF37]" : "text-[#f5f5e6]"
          }
        >
          <Link href="/">home</Link>
        </li>
        <li
          className={
            pathName === "/products"
              ? "text-lg text-[#D4AF37]"
              : "text-[#f5f5e6]"
          }
        >
          <Link href="/products">products</Link>
        </li>
        <li
          className={
            pathName === "/weasleys"
              ? "text-lg text-[#D4AF37]"
              : "text-[#f5f5e6]"
          }
        >
          <Link href="/weasleys">weasleys</Link>
        </li>
        <li
          className={
            pathName === "/contact"
              ? "text-lg text-[#D4AF37]"
              : "text-[#f5f5e6]"
          }
        >
          <Link href="/contact">contact</Link>
        </li>
        <li
          className={
            pathName === "/account"
              ? "text-lg text-[#D4AF37]"
              : "text-[#f5f5e6]"
          }
        >
          <Link href="/account">account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
