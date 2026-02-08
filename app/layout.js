import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import CartSidebar from '@/components/CartSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Auravive - Taste the Goodness of Nature',
  description: 'Pure, Natural, Power-packed health products from Auravive',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <title>Auravive ...Nourish Naturally. 🌱</title>
        <meta
          name="description"
          content="Introducing Auravive Organic Curry Leaves Mix! 🌿✨ Elevate your
              dishes with the pure, organic goodness of nature. Discover the
              authentic flavors and health benefits of this culinary gem."
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/auravive_icon.jpg" />

        <meta property="og:title" content="Auravive ...Nourish Naturally. 🌱" />
        <meta
          property="og:description"
          content="Introducing Auravive Organic Curry Leaves Mix! 🌿✨ Elevate your
              dishes with the pure, organic goodness of nature. Discover the
              authentic flavors and health benefits of this culinary gem"
        />
        <meta property="og:image" content="/auravive_icon.jpg" />
        <meta property="og:url" content="https://auravive-project.vercel.app" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
