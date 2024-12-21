"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="text-center bg-white">
      <Link
        href="/"
        className={
          pathname === "/" ? "mr-4  font-bold text-black" : "mr-4 text-blue-500"
        }
      >
        Home
      </Link>

      <Link
        href="/about"
        className={
          pathname === "/about"
            ? "mr-4  font-bold text-black"
            : "mr-4 text-blue-500"
        }
      >
        About
      </Link>

      <Link
        href="/products/1"
        className={
          pathname === "/products/1"
            ? "mr-4  font-bold text-black"
            : "mr-4 text-blue-500"
        }
      >
        Product 1
      </Link>
    </nav>
  );
};
