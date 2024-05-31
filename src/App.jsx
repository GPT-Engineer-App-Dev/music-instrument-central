import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Category from "./pages/Category.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/category/:categoryName" element={<Category />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
