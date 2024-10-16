import { data } from "autoprefixer"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Users from "./components/Users"

function App() {
  const onChangeHandelar = (e) => {
    console.log(e.target.value); // Log the input value
  };

  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <Home></Home>
      <Users></Users>
      <Cart></Cart>
      <div>
      <h1 className="text-center text-4xl m-2 text-amber-500 font-bold">Our Products</h1>
      <Products></Products>
      </div>

      <div className="mt-5">
        <input
          onChange={(e) => onChangeHandelar(e)}
          type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
      </div>
      <div className="min-h-screen"></div>
      <Footer></Footer>
    </>
  );
}

export default App