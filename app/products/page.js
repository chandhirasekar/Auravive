"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All Products' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header Section with Background */}
      <div 
        className="relative py-24"
        style={{
          backgroundImage: 'url(/images/product-bg.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/80"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">
            Our Products
          </h1>
          <p className="text-xl text-center text-green-50 drop-shadow-lg">
            Taste the Goodness of Nature
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-green-700 text-white shadow-lg'
                    : 'bg-white text-green-700 border border-green-700 hover:bg-green-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                {/* Product Image */}
                <div className="relative h-72 bg-white overflow-hidden flex items-center justify-center p-8">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      {product.discount}% OFF
                    </div>
                  )}

                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">Out of Stock</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Category */}
                  <div className="text-green-600 text-sm font-medium mb-2">
                    {product.category}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    {product.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.tagline}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Net Weight */}
                  <div className="text-gray-600 text-sm mb-4">
                    Net Weight: {product.netWeight}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-green-700">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Benefits Preview */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors group-hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Products Found */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* Trust Badges */}
      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-green-700 text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-700">Natural & Organic</div>
            </div>
            <div>
              <div className="text-green-700 text-3xl font-bold mb-2">Non-GMO</div>
              <div className="text-gray-700">Certified Products</div>
            </div>
            <div>
              <div className="text-green-700 text-3xl font-bold mb-2">Lab</div>
              <div className="text-gray-700">Tested Quality</div>
            </div>
            <div>
              <div className="text-green-700 text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-700">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
