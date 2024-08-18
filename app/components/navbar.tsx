import Link from "next/link";
import { Input } from "./ui/input";
import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b bg-background">
      <div className="flex justify-between items-center h-16 px-4">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="w-16" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden items-center justify-center p-2"
        >
          <MenuIcon className="w-6 h-6" />
        </button>

        {/* Search and Icons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <SearchIcon className="absolute right-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Procurar"
              className="pr-10 py-2 bg-muted"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link href="#">
              <Image
                src="/images/iconamoon--profile.svg"
                width={25}
                height={15}
                alt="Profile Icon"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/ph--heart-straight-bold.svg"
                width={25}
                height={15}
                alt="Favorites Icon"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/uil--cart.svg"
                width={25}
                height={15}
                alt="Cart Icon"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row md:items-center md:justify-center py-4 md:py-0 px-4 md:px-0 bg-background border-t md:border-t-0`}
      >
        <Link
          href="#"
          className="text-sm font-medium uppercase tracking-widest py-2 md:py-0"
          prefetch={false}
        >
          Calçados
        </Link>
        <Link
          href="#"
          className="text-sm font-medium uppercase tracking-widest py-2 md:py-0"
          prefetch={false}
        >
          Mulher
        </Link>
        <Link
          href="#"
          className="text-sm font-medium uppercase tracking-widest py-2 md:py-0"
          prefetch={false}
        >
          Homem
        </Link>
        <Link
          href="#"
          className="text-sm font-medium uppercase tracking-widest py-2 md:py-0"
          prefetch={false}
        >
          Infantil
        </Link>
        <Link
          href="#"
          className="text-sm font-medium uppercase tracking-widest py-2 md:py-0"
          prefetch={false}
        >
          Esportes
        </Link>
        <Link
          href="#"
          className="text-sm font-medium uppercase tracking-widest py-2 md:py-0"
          prefetch={false}
        >
          Mundo Adidas
        </Link>
        <Link
          href="#"
          className="text-sm font-medium uppercase tracking-widest py-2 md:py-0"
          prefetch={false}
        >
          Outlet
        </Link>
      </nav>
    </header>
  );
}

type NavbarProps = React.ComponentProps<typeof Navbar>;

function MountainIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} src="images/adidas_logo.svg" alt="Logo" />;
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
      />
    </svg>
  );
}
