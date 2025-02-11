"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/forgot-password", label: "Forgot Password" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <section className="flex min-h-screen">
      <aside className="w-64 p-4 border-r-2 border-[#D4AF37] bg-[#272727] text-[#f5f5e6]">
        <nav className=" flex flex-col pt-12 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ? "text-lg text-[#D4AF37]" : "text-md "
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main>
        <div>{children}</div>
      </main>
    </section>
  );
}
