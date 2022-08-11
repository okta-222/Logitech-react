import Header from "./app/components/header/header";
import About from "./app/components/about/about";
import "./app/scss/main.scss";
import Footer from "./app/components/footer/footer";
import Specifications from "./app/components/specifications/specifications";
import Slider from "./app/components/slider/slider";
import Product from "./app/components/product/product"

export default function App() {
  return (
    <div>
       <Header />
       <About />
       <Specifications />
       <Product />
       <Slider />
       <Footer />
    </div>
  );
}
