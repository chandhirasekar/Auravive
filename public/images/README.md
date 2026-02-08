# Auravive Image Assets

## 📁 Folder Structure

```
public/images/
├── hero-bg.avif              # Home page hero background
├── product-bg.avif           # Products page header background
├── backgrounds/
│   └── nature-bg.avif        # Alternative nature background
└── products/
    ├── abc-malt-1.jpg
    ├── abc-malt-2.jpg
    ├── abc-malt-3.jpg
    ├── moringa-1.jpg
    ├── moringa-2.jpg
    ├── moringa-3.jpg
    ├── curry-leaves-1.jpg
    ├── curry-leaves-2.jpg
    ├── curry-leaves-3.jpg
    └── all-products.jpg
```

## 🎨 Background Images

### Hero Background (`hero-bg.avif`)
- **Used in:** Home page hero section
- **Effect:** Full-screen background with dark overlay
- **Dimensions:** Full viewport
- **Format:** AVIF (modern, optimized)

### Product Background (`product-bg.avif`)
- **Used in:** Products catalog page header
- **Effect:** Header background with green gradient overlay
- **Dimensions:** Header section
- **Format:** AVIF

### Nature Background (`backgrounds/nature-bg.avif`)
- **Used in:** Alternative/future sections
- **Purpose:** Reserve background for other pages

## 🖼️ Product Images

### Current Images
- ✅ **ABC Malt** - Real product photos
- ✅ **Moringa Powder** - Real product photos
- ⚠️ **Curry Leaves Mix** - Placeholder (ready to replace)

### Image Specifications
- **Format:** JPG (product photos), AVIF (backgrounds)
- **Size:** 800x800px minimum for products
- **Quality:** Optimized for web (<500KB)

## 🔄 How to Replace

### Product Images
1. Replace files in `public/images/products/`
2. Keep same filenames
3. Use `.jpg`, `.jpeg`, or `.png`

### Background Images
1. Replace `hero-bg.avif` for home page
2. Replace `product-bg.avif` for products page
3. Can use `.jpg`, `.png`, `.avif`, or `.webp`

## 💡 Usage in Code

### Home Page Hero
```jsx
style={{
  backgroundImage: 'url(/images/hero-bg.avif)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
```

### Products Page Header
```jsx
style={{
  backgroundImage: 'url(/images/product-bg.avif)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
```

### Product Images
```jsx
<img src="/images/products/abc-malt-1.jpg" alt="ABC Malt" />
```

## ✨ Features

- **AVIF Format:** Modern, highly compressed format
- **Responsive:** Works on all screen sizes
- **Fast Loading:** Optimized file sizes
- **Fallback Ready:** Can use JPG/PNG as alternatives

## 🎯 Tips

1. **Backgrounds:** Use high-res images (1920x1080 or larger)
2. **Products:** Square images work best (1:1 ratio)
3. **Format:** AVIF for backgrounds, JPG for products
4. **Optimize:** Use tools like Squoosh.app to compress

## 📝 Notes

- Background images have dark overlays for text readability
- Product images display on clean white backgrounds
- All images are optimized for web performance
- Replace anytime without changing code!
