import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartSidebar from "@/components/CartSidebar";
import AOSWrapper from "@/components/AOSWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://auravive-project.vercel.app"),
  title: {
    default: "Auravive - Taste the Goodness of Nature",
    template: "%s | Auravive",
  },
  description:
    "Pure, Natural, Power-packed health products from Auravive",

  icons: {
    icon: "/auravive_icon.jpg",
  },

  openGraph: {
    title: "Auravive ...Nourish Naturally. 🌱",
    description:
      "Elevate your dishes with organic goodness and authentic flavors.",
    url: "https://auravive-project.vercel.app",
    siteName: "Auravive",
    images: ["/auravive_icon.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <AOSWrapper>
          <Navbar />
          <main>{children}</main>
          <CartSidebar />
          </AOSWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
