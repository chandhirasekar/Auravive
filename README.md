# Auravive E-Commerce Application

A modern Next.js e-commerce application for Auravive - Natural Health Products.

## 🌿 Features

### Product Catalog
- **Product Listing Page** with filtering and sorting
- Category-based filtering (All Products, Nutritional Supplements, Superfoods, Herbal Blends)
- Sort by: Featured, Price (Low to High, High to Low), Highest Rated
- Responsive grid layout
- Product cards with ratings, pricing, and key benefits

### Product Detail Pages
- Comprehensive product information
- Image gallery with thumbnails
- Quantity selector
- Product tabs: Description, Ingredients, Usage Instructions, Nutritional Information
- Related products section
- Add to cart functionality
- Stock status indicator
- Trust badges

### Shopping Cart
- Sliding sidebar cart
- Add/remove items
- Update quantities
- Real-time cart total calculation
- Persistent cart (localStorage)
- Cart counter badge in navbar
- Free shipping notification

### Navigation
- Sticky navbar with cart icon
- Responsive mobile menu
- Search functionality (ready to implement)
- User account link

## 📁 Project Structure

```
auravive-nextjs/
├── app/
│   ├── layout.js                 # Root layout with CartProvider
│   ├── page.js                   # Home page (existing)
│   └── products/
│       ├── page.js               # Product catalog page
│       └── [slug]/
│           └── page.js           # Individual product detail page
├── components/
│   ├── Navbar.js                 # Main navigation component
│   └── CartSidebar.js            # Shopping cart sidebar
├── context/
│   └── CartContext.js            # Global cart state management
└── data/
    └── products.js               # Product data and helper functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to your project directory:
```bash
cd auravive-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Product Data

The application includes 3 products by default:

1. **ABC Malt** - Nutritional Supplement
   - ₹449 (25% off from ₹599)
   - 150g net weight
   - Ingredients: Apple, Beetroot, Carrot, Almond, Cashew, Dates

2. **Premium Moringa Powder** - Superfood
   - ₹349 (30% off from ₹499)
   - 100g net weight
   - 100% Pure Moringa Leaf Powder

3. **Premium Curry Leaves Mix** - Herbal Blend
   - ₹299 (25% off from ₹399)
   - 200g net weight
   - Traditional South Indian blend

### Adding New Products

Edit `/data/products.js` and add new product objects following this structure:

```javascript
{
  id: 4,                              // Unique ID
  slug: "product-url-slug",           // URL-friendly identifier
  name: "Product Name",
  category: "Category Name",          // Must match categories array
  tagline: "Product tagline",
  price: 399,
  originalPrice: 499,
  discount: 20,
  netWeight: "100g",
  inStock: true,
  rating: 4.5,
  reviews: 50,
  images: [/* image paths */],
  description: "Product description",
  benefits: [/* array of benefits */],
  ingredients: [/* array of {name, benefits} */],
  usage: "Usage instructions",
  features: [/* array of features */],
  nutritionalInfo: { /* nutritional data */ }
}
```

## 🎨 Customization

### Colors
The application uses a green color scheme. To change:
- Primary green: `green-700` (#15803d)
- Light green: `green-50` (#f0fdf4)
- Accent: `green-600`, `green-800`

Update Tailwind classes in components to change the theme.

### Product Images
Currently using placeholder images. To add real images:

1. Add images to `/public/images/products/`
2. Update image paths in `/data/products.js`
3. Images should be optimized (WebP format recommended)

## 🛠️ Next Steps to Develop

### Essential Features
1. **Checkout Process**
   - Shipping information form
   - Payment integration (Razorpay/Stripe)
   - Order confirmation

2. **User Authentication**
   - Login/Register pages
   - User profile management
   - Order history

3. **Backend Integration**
   - API routes for products
   - Database integration (MongoDB/PostgreSQL)
   - Admin panel for product management

4. **Search Functionality**
   - Search bar implementation
   - Search results page
   - Filters by ingredients, benefits

5. **Reviews & Ratings**
   - User reviews system
   - Star ratings
   - Review moderation

### Enhanced Features
- Wishlist functionality
- Product comparison
- Email notifications
- Discount codes/coupons
- Blog/articles section
- Recipe suggestions using products
- Subscription box option
- Multi-language support

## 📱 Responsive Design

The application is fully responsive:
- Mobile: Single column layout
- Tablet: 2 column grid
- Desktop: 3 column grid
- Sticky navigation on all devices

## 🔧 Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first styling
- **Context API** - State management for cart
- **localStorage** - Cart persistence

## 📄 Pages Overview

### `/products`
Main product catalog with:
- Category filters
- Sort options
- Product grid
- Trust badges section

### `/products/[slug]`
Individual product pages with:
- Image gallery
- Product details
- Tabbed content
- Related products
- Add to cart

## 💡 Tips

1. **Product Images**: Use consistent aspect ratios (1:1 recommended)
2. **SEO**: Add metadata for each product page
3. **Performance**: Implement image lazy loading
4. **Analytics**: Add Google Analytics or similar
5. **Testing**: Test cart persistence across sessions

## 🐛 Known Limitations

- Product images are placeholders
- Payment integration not implemented
- Backend/database not connected
- Search functionality placeholder
- No user authentication yet

## 📞 Support

For questions about Auravive products, visit:
- Instagram: [@auravive_official](https://www.instagram.com/auravive_official/)
- Website: https://auravive-project.vercel.app/

## 📝 License

Private project for Auravive brand.

---

Built with ❤️ for natural wellness
"# Auravive" 
