"use client";

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartSidebar() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="bg-green-700 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <p className="text-green-100">{getCartCount()} items</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-green-100 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some products to get started!</p>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4 flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">₹{item.price} each</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-white border border-gray-300 rounded hover:bg-gray-100 font-bold"
                      >
                        −
                      </button>
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-white border border-gray-300 rounded hover:bg-gray-100 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price and Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    <p className="font-bold text-green-700">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-gray-900">Subtotal</span>
              <span className="text-2xl font-bold text-green-700">
                ₹{getCartTotal().toFixed(2)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link href="/checkout" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-green-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors">
                  Proceed to Checkout
                </button>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-white text-green-700 border-2 border-green-700 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>

            {/* Shipping Note */}
            <p className="text-sm text-gray-600 text-center mt-4">
              Free shipping on orders above ₹500
            </p>
          </div>
        )}
      </div>
    </>
  );
}
