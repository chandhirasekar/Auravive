import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/hero-bg.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-20 text-center z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              Auravive
            </h1>
            <p className="text-2xl md:text-4xl text-white mb-8 drop-shadow-lg">
              Taste the Goodness of Nature
            </p>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-12 drop-shadow-lg">
              Pure. Natural. Power-packed. Experience wholesome health the Auravive way.
            </p>
            <Link href="/products">
              <button className="bg-green-700 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-green-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Auravive?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Natural</h3>
              <p className="text-gray-600">All our products are made from pure, natural ingredients with no artificial additives.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lab Tested</h3>
              <p className="text-gray-600">Every batch is rigorously tested for purity and quality assurance.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Health First</h3>
              <p className="text-gray-600">Formulated to support your body, mind, and spirit with essential nutrients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Our Popular Products
        </h2>
        <p className="text-center text-gray-600 mb-12">From Leaf to Life</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* ABC Malt */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-purple-400 text-6xl">🍎</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">ABC Malt</h3>
            <p className="text-gray-600 mb-4">Natural daily boost for body, mind, and spirit</p>
            <span className="text-2xl font-bold text-green-700">₹449</span>
          </div>

          {/* Moringa Powder */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-50 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-green-400 text-6xl">🌿</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Moringa Powder</h3>
            <p className="text-gray-600 mb-4">Your daily power in a scoop</p>
            <span className="text-2xl font-bold text-green-700">₹349</span>
          </div>

          {/* Curry Leaves Mix */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-50 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-green-500 text-6xl">🍃</div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Curry Leaves Mix</h3>
            <p className="text-gray-600 mb-4">Authentic South Indian blend</p>
            <span className="text-2xl font-bold text-green-700">₹299</span>
          </div>
        </div>

        <div className="text-center">
          <Link href="/products">
            <button className="bg-white border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg text-lg font-bold hover:bg-green-50 transition-colors">
              View All Products
            </button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Auravive — Because Wellness Starts Here
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of happy customers on their journey to natural wellness
          </p>
          <Link href="/products">
            <button className="bg-white text-green-700 px-10 py-4 rounded-lg text-xl font-bold hover:bg-green-50 transition-all shadow-lg">
              Start Your Journey
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Auravive. All rights reserved.
          </p>
          <div className="mt-4">
            <a 
              href="https://www.instagram.com/auravive_official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              @auravive_official
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
