import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";
import About from "./routes/About/about";
import Product from "./routes/Product/product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./routes/Product/singleProduct";
import CreateProduct from "./routes/Product/createProduct";


function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/product" element={ <Product/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/products/:slug" element={ <SingleProduct/> } />
          <Route path="/createProduct" element={ <CreateProduct/> } />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
