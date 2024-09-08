import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/app/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/components/ui/avatar";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-background border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="md:hidden">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="#" className="flex items-center gap-4" prefetch={false}>
              <HomeIcon className="w-5 h-5" />
              Calçados
            </Link>
            <Link href="#" className="flex items-center gap-4" prefetch={false}>
              <PackageIcon className="w-5 h-5" />
              Mulher
            </Link>
            <Link href="#" className="flex items-center gap-4" prefetch={false}>
              <DollarSignIcon className="w-5 h-5" />
              Homem
            </Link>
            <Link href="#" className="flex items-center gap-4" prefetch={false}>
              <InfoIcon className="w-5 h-5" />
              Infantil
            </Link>
            <Link href="#" className="flex items-center gap-4" prefetch={false}>
              <MailIcon className="w-5 h-5" />
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <AdidasIcon className="w-16" />
      </Link>

      <nav className="hidden md:flex items-center gap-6 uppercase">
        <Link
          href="#"
          className="text-sm font-bold hover:underline"
          prefetch={false}
        >
          Calçados
        </Link>
        <Link
          href="#"
          className="text-sm font-bold hover:underline"
          prefetch={false}
        >
          Mulher
        </Link>
        <Link
          href="#"
          className="text-sm font-bold hover:underline"
          prefetch={false}
        >
          Homem
        </Link>
        <Link
          href="#"
          className="text-sm font-bold hover:underline"
          prefetch={false}
        >
          Infantil
        </Link>
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
          Esportes
        </Link>
        <Link href="#" className="text-sm hover:underline" prefetch={false}>
          Mundo Adidas
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline text-[#e32b2b]"
          prefetch={false}
        >
          Até 60% Off
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <div className="md:flex hidden relative">
          <Input
            type="search"
            placeholder="Procurar"
            className=" h-9 rounded-md bg-muted focus:ring-primary focus:border-primary"
          />
          <SearchIcon className="absolute right-2.5 top-2.5 h-4 text-muted-foreground" />
        </div>

        <div className="flex gap-6">
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
    </header>
  );
}

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function AdidasIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} src="images/adidas_logo.svg" alt="Logo" />;
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
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
