"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsOpen, getCartCount } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-[70px] h-[70px] bg-green-700 rounded-full flex items-center justify-center">
             
              <Image src={"/auravive_icon.jpg"}  width={60}
              height={60}
              className="border-[3px] border-[#fff] rounded-[50%] object-cover"
              alt="auravive_logo"/>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-700">Auravive</h1>
              <p className="text-xs text-gray-600">Taste the Goodness of Nature</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-700 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="hidden md:block text-gray-700 hover:text-green-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* User Icon */}
            <Link href="/account" className="hidden md:block text-gray-700 hover:text-green-700 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Cart Icon */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative text-gray-700 hover:text-green-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-green-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                Products
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/account"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                My Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
