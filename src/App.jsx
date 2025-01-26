import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home.page";
import UpsertProduct from "./pages/upsert-product.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<UpsertProduct />} />
        <Route path="/add/:id" element={<UpsertProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
