import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Inspiration from "@/components/Inspiration";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Category />
      <Products />
      <Inspiration />
      <Footer />
    </div>
  );
}
