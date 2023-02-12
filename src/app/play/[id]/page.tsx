"use client";

import Title from "@/components/Title";
import { useState } from 'react';

export default function Game({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [showOverlay, setShowOverlay] = useState(true)

  return (
    <div>
        <div className="w-full h-screen flex flex-col items-center bg-gradient-to-r from-red-600 via-red-300 to-orange-500 background-animate">
        <Title className="bg-black mt-5 text-xl">{`[[${params.id}]]`}</Title>
        <div style={{display: showOverlay ? 'initial' : 'none'}} id="menu" className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 text-center">
          <div className="flex flex-col text-white text-center text-xl font-light space-y-3">
              <a className="opacity-0" href="#">-</a>
              <a className="opacity-0" href="#">-</a>
              <a className="opacity-0" href="#">-</a>
              <a className="opacity-0" href="#">-</a>
              <a className="opacity-0" href="#">-</a>
              <a className="opacity-0" href="#">-</a>
              <a className="opacity-0" href="#">-</a>
            
              <a className="hover:text-amber-500 duration-300" href="#">About Us</a>
              <a className="hover:text-amber-500 duration-300" href="#">Get In Touch</a>
              <a className="hover:text-amber-500 duration-300" href="#">Privacy Policy</a>
              <a className="hover:text-amber-500 duration-300" href="#">Terms of Use</a>
            <button 
                className="text-white hover:text-amber-500 text-7xl font-semibold duration-300"
                onClick={() => setShowOverlay(false)}>X
            </button>
              </div>
          </div>
      </div>
    </div>
  );
}
