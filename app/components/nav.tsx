import React from "react";
import Image from "next/image"; // Import Image component from Next.js for optimized image handling

export default function Nav() {
  return (
    <nav className="flex bg-white h-[82px] items-center px-[38px] justify-between">
      <figure className="flex">
        {/* Display the logo with Next.js optimized Image component */}
        <Image src="images/adidas_logo.svg" alt="Logo" width={60} height={60} />
      </figure>
      <div className="flex flex-col items-center flex-grow text-center">
        <ul className="flex w-full justify-end space-x-5 text-xs h-9">
          <li>
            <a className="align-top" href="">blog</a>
          </li>
          <li>
            <a href="">ajuda</a>
          </li>
          <li>
            <a href="">histórico de pedidos</a>
          </li>
          <li>
            <a href="">entre para o clube</a>
          </li>
        </ul>
        <div className="flex w-full justify-center relative">
          <ul className="flex space-x-7 uppercase tracking-wide">
            <li className="font-medium">
              <a href="">calçados</a>
            </li>
            <li className="font-medium">
              <a href="">mulher</a>
            </li>
            <li className="font-medium">
              <a href="">homem</a>
            </li>
            <li className="font-medium">
              <a href="">infantil</a>
            </li>
            <li>
              <a href="">esportes</a>
            </li>
            <li>
              <a href="">mundo adidas</a>
            </li>
          </ul>
          <div className=" flex absolute right-0 bottom-[-10px]">
          <input
              type="text"
              placeholder="Buscar"
              className="border-2 border-gray-400 rounded-md p-1"
            />
            <div className="flex items-center">
              <ul>
                <li><a href=""><span><Image src="images/user.svg" width={15} height={15} alt='Arrow Down'/></span></a></li>
              </ul>
              <ul>
                <li><a href=""><span><Image src="images/heart.svg" width={15} height={15} alt='Arrow Down'/></span></a></li>
              </ul>
              <ul>
                <li><a href=""><span><Image src="images/cart.svg" width={15} height={15} alt='Arrow Down'/></span></a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
