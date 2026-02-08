export const products = [
  {
    id: 1,
    slug: "abc-malt",
    name: "ABC Malt",
    category: "Nutritional Supplements",
    tagline: "Natural Daily Boost for Body, Mind, and Spirit",
    price: 449,
    originalPrice: 599,
    discount: 25,
    netWeight: "150g",
    inStock: true,
    rating: 4.8,
    reviews: 127,
    images: [
      "/images/products/abc-malt-1.jpg",
      "/images/products/abc-malt-2.jpg",
      "/images/products/abc-malt-3.jpg"
    ],
    description: "ABC Malt is a premium nutritional supplement that combines the goodness of nature's finest ingredients. A perfect blend designed to provide your body with essential nutrients for overall wellness.",
    benefits: [
      "Boosts immunity and energy levels",
      "Supports digestive health",
      "Rich in antioxidants",
      "Promotes healthy metabolism",
      "100% natural ingredients"
    ],
    ingredients: [
      { name: "Apple", benefits: "Rich in fiber and vitamins" },
      { name: "Beetroot", benefits: "Boosts stamina and blood health" },
      { name: "Carrot", benefits: "Excellent source of beta-carotene" },
      { name: "Almond", benefits: "Packed with healthy fats and protein" },
      { name: "Cashew nuts", benefits: "Rich in minerals and antioxidants" },
      { name: "Dates", benefits: "Natural energy and fiber source" }
    ],
    usage: "Mix 2 tablespoons (20g) of ABC Malt with warm milk or water. Consume once or twice daily, preferably in the morning or before bedtime.",
    features: [
      "Non-GMO",
      "No artificial preservatives",
      "Suitable for all ages",
      "Lab tested for purity"
    ],
    nutritionalInfo: {
      servingSize: "20g (2 tbsp)",
      calories: 78,
      protein: "2.5g",
      carbohydrates: "14g",
      fat: "1.8g",
      fiber: "2.2g"
    }
  },
  {
    id: 2,
    slug: "moringa-powder",
    name: "Premium Moringa Powder",
    category: "Superfoods",
    tagline: "From Leaf to Life - Your Daily Power in a Scoop",
    price: 349,
    originalPrice: 499,
    discount: 30,
    netWeight: "100g",
    inStock: true,
    rating: 4.9,
    reviews: 203,
    images: [
      "/images/products/moringa-1.jpg",
      "/images/products/moringa-2.jpg",
      "/images/products/moringa-3.jpg"
    ],
    description: "Premium Moringa Powder is packed with antioxidants, vitamins, and minerals. Known as the 'miracle tree', moringa leaves offer exceptional nutritional benefits for holistic wellness.",
    benefits: [
      "Boosts immune system naturally",
      "Regulates blood sugar levels",
      "Promotes healthy skin and hair",
      "Power pack of Vitamin A, C, and B vitamins",
      "Rich in essential amino acids"
    ],
    ingredients: [
      { name: "100% Pure Moringa Leaf Powder", benefits: "Complete superfood with 90+ nutrients" }
    ],
    usage: "Add 1 teaspoon (5g) to smoothies, juices, or warm water. Can also be sprinkled on salads or mixed into yogurt. Best consumed on an empty stomach.",
    features: [
      "Antioxidants rich",
      "Vitamins A, B, C, E",
      "Minerals - Iron, Calcium, Potassium",
      "Dietary fiber",
      "Organic and pure"
    ],
    nutritionalInfo: {
      servingSize: "5g (1 tsp)",
      calories: 15,
      protein: "1.5g",
      carbohydrates: "2g",
      fat: "0.3g",
      fiber: "1.2g",
      iron: "15% DV",
      calcium: "8% DV",
      vitaminA: "25% DV"
    }
  },
  {
    id: 3,
    slug: "curry-leaves-mix",
    name: "Premium Curry Leaves Mix",
    category: "Herbal Blends",
    tagline: "Taste the Goodness of Nature",
    price: 299,
    originalPrice: 399,
    discount: 25,
    netWeight: "200g",
    inStock: true,
    rating: 4.7,
    reviews: 89,
    images: [
      "/images/products/curry-leaves-1.jpg",
      "/images/products/curry-leaves-2.jpg",
      "/images/products/curry-leaves-3.jpg"
    ],
    description: "High-quality curry leaves combined with nutrient-rich ingredients. Perfect for adding authentic South Indian flavor while boosting nutritional value of your meals.",
    benefits: [
      "Rich in antioxidants",
      "Promotes hair health",
      "Supports digestive wellness",
      "100% natural and organic",
      "Traditional Ayurvedic benefits"
    ],
    ingredients: [
      { name: "Dried Curry Leaves", benefits: "Rich in iron and antioxidants" },
      { name: "Urad Dal", benefits: "High in protein and fiber" },
      { name: "Bengal Gram", benefits: "Excellent protein source" },
      { name: "Tamarind", benefits: "Rich in vitamins and minerals" },
      { name: "Coriander Seeds", benefits: "Aids digestion" },
      { name: "Asafoetida", benefits: "Anti-inflammatory properties" },
      { name: "Sesame Seeds", benefits: "Calcium and healthy fats" },
      { name: "Red Chili", benefits: "Metabolism booster" },
      { name: "Salt", benefits: "Essential electrolytes" },
      { name: "Oil", benefits: "Preserves freshness" }
    ],
    usage: "Use as a seasoning for rice, dal, or South Indian dishes. Mix with hot rice and ghee for traditional curry leaves rice. Store in a cool, dry place.",
    features: [
      "Authentic South Indian blend",
      "No artificial colors",
      "Traditional recipe",
      "Hygienically prepared"
    ],
    nutritionalInfo: {
      servingSize: "10g",
      calories: 45,
      protein: "2g",
      carbohydrates: "6g",
      fat: "1.5g",
      fiber: "1.8g"
    }
  }
];

export const categories = [
  "All Products",
  "Nutritional Supplements",
  "Superfoods",
  "Herbal Blends"
];

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  if (category === "All Products") return products;
  return products.filter(product => product.category === category);
};
