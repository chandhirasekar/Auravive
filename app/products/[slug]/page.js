import Link from "next/link";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link href="/products" className="text-green-700 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.description,
    icons: {
      icon: "/auravive_icon.jpg",
    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
      url: `https://auravive-project.vercel.app/products/${product.slug}`,
      type: "website",
    },
  };
}
