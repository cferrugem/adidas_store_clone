"use client"; // Mark this file as a Client Component to enable hooks like useState and useEffect

import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import Image from 'next/image'; // Import Image component from Next.js for optimized image handling
import Nav from "./nav";

export default function Header() {
  // State to hold the current text value
  const [text, setText] = useState('Acessórios que te acompanham a cada passo!');
  
  // Array of texts to display randomly
  const texts = ['🚛 Compre agora com frete grátis 🚛', 'Volta às aulas 🎒'];

  useEffect(() => {
    // Function to update the text state with a random text from the array
    const intervalId = setInterval(() => {
      // Generate a random index to select a text
      const randomIndex = Math.floor(Math.random() * texts.length);
      // Update the text state with the selected text
      setText(texts[randomIndex]);
    }, 2500); // Update text every 3 seconds (3000 milliseconds)

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <header className='font-adihausdin'>
      {/* Div to display the changing text */}
      <div className='bg-black flex h-[39px] text-white justify-center items-center uppercase text-xs font-medium '>
        <p>{text}</p> {/* Render the current text */}
        <span className='ml-4'><Image src="images/down-arrow-svgrepo-com.svg" width={15} height={15} alt='Arrow Down'/></span>
      </div>
        <Nav />
    </header>
  );
}
