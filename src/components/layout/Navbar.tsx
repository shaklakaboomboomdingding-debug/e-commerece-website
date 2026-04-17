import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Navbar = () => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-black">
              Shoes Bazar.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({isActive}) => `text-sm font-medium uppercase tracking-widest transition-colors ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({isActive}) => `text-sm font-medium uppercase tracking-widest transition-colors ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
              Shop
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `text-sm font-medium uppercase tracking-widest transition-colors ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
              Contact Us
            </NavLink>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-500 hover:text-black transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative text-gray-500 hover:text-black transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-accent)] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative text-gray-500 hover:text-black transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--color-accent)] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-black p-2 -mr-2">
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <NavLink to="/" onClick={toggleMobileMenu} className={({isActive}) => `block px-3 py-4 text-base font-medium tracking-wider uppercase border-b border-gray-50 ${isActive ? 'text-black' : 'text-gray-600'}`}>
              Home
            </NavLink>
            <NavLink to="/shop" onClick={toggleMobileMenu} className={({isActive}) => `block px-3 py-4 text-base font-medium tracking-wider uppercase border-b border-gray-50 ${isActive ? 'text-black' : 'text-gray-600'}`}>
              Shop
            </NavLink>
            <NavLink to="/contact" onClick={toggleMobileMenu} className={({isActive}) => `block px-3 py-4 text-base font-medium tracking-wider uppercase ${isActive ? 'text-black' : 'text-gray-600'}`}>
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
