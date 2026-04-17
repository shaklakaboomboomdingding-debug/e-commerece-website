import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-bold tracking-tight mb-6 inline-block">
              Shoes Bazar.
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Step into style with our premium collection of footwear. Quality, comfort, and trend-setting designs for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=Men" className="text-gray-400 hover:text-white text-sm transition-colors">Men's Shoes</Link></li>
              <li><Link to="/shop?category=Women" className="text-gray-400 hover:text-white text-sm transition-colors">Women's Shoes</Link></li>
              <li><Link to="/shop?category=Sports" className="text-gray-400 hover:text-white text-sm transition-colors">Sports & Running</Link></li>
              <li><Link to="/shop?category=Casual" className="text-gray-400 hover:text-white text-sm transition-colors">Casual Sneakers</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white text-sm transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mb-1" />
                <span>123 Fashion Street, Cyber City, Phase 1, New Delhi 110001</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>support@shoesbazar.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Shoes Bazar. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
