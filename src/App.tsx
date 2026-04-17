import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
// Using lazy loading or direct imports, let's just use direct imports. Since they don't exist yet we will create them.
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
