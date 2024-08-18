import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex flex-col md:flex-row bg-white h-auto md:h-[82px] items-center px-4 md:px-[38px] justify-between">
      <figure className="flex mb-4 md:mb-0">
        {/* Display the logo with Next.js optimized Image component */}
        <Image
          src="images/adidas_logo.svg"
          alt="Logo"
          width={60}
          height={60}
        />
      </figure>
      <div className="flex flex-col items-center flex-grow text-center space-y-4 md:space-y-0">
        <ul className="flex w-full justify-between md:justify-end space-x-5 text-xs h-9">
          <li>
            <a className="align-top" href="">
              blog
            </a>
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
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-7 uppercase tracking-wide text-sm md:text-base">
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
          <div className="flex absolute right-0 -bottom-4 md:bottom-[-10px] space-x-3 items-center">
            <input
              type="text"
              placeholder="Buscar"
              className="border-2 border-gray-400 rounded-md p-1 text-xs md:text-sm"
            />
            <ul className="flex space-x-2">
              <li>
                <a href="">
                  <Image
                    src="images/user.svg"
                    width={20}
                    height={20}
                    alt="User Icon"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    src="images/heart.svg"
                    width={20}
                    height={20}
                    alt="Favorites Icon"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    src="images/cart.svg"
                    width={20}
                    height={20}
                    alt="Cart Icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
