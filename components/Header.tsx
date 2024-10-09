"use client";

import Link from 'next/link';
import { Palette, Menu, X } from 'lucide-react';
import { useState } from 'react';

const popularColors = [
  { name: 'Red', slug: 'red-screen' },
  { name: 'Blue', slug: 'blue-screen' },
  { name: 'Green', slug: 'green-screen' },
  { name: 'Yellow', slug: 'yellow-screen' },
  { name: 'Black', slug: 'black-screen' },
  { name: 'White', slug: 'white-screen' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
            <Palette size={28} />
            <span className="text-2xl font-bold">Color Tool</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li><Link href="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link></li>
              <li className="relative">
                <button
                  className="hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
                >
                  Color Screens
                </button>
                {isColorMenuOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                    {popularColors.map((color) => (
                      <li key={color.slug}>
                        <Link
                          href={`/${color.slug}`}
                          className="block px-4 py-2 text-sm hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsColorMenuOpen(false)}
                        >
                          {color.name} Screen
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><Link href="/about" className="hover:text-gray-300 transition-colors duration-300">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li><Link href="/" className="block py-2 hover:text-gray-300 transition-colors duration-300">Home</Link></li>
            <li>
              <button
                className="w-full text-left py-2 hover:text-gray-300 transition-colors duration-300"
                onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
              >
                Color Screens
              </button>
              {isColorMenuOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {popularColors.map((color) => (
                    <li key={color.slug}>
                      <Link
                        href={`/${color.slug}`}
                        className="block py-1 hover:text-gray-300 transition-colors duration-300"
                        onClick={() => {
                          setIsColorMenuOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        {color.name} Screen
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link href="/about" className="block py-2 hover:text-gray-300 transition-colors duration-300">About</Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-gray-300 transition-colors duration-300">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}