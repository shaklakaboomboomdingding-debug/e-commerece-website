import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Cart = () => {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const shipping = cartTotal > 2000 ? 0 : 150;
  const finalTotal = cartTotal + (items.length > 0 ? shipping : 0);

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#f5f5f5]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-16 text-center max-w-lg w-full mx-4 shadow-sm"
        >
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-xs mx-auto">Looks like you haven't added any premium footwear to your cart yet.</p>
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors w-full"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-12">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="hidden md:grid grid-cols-12 gap-4 border-b border-gray-100 pb-4 mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  key={`${item.product.id}-${item.selectedSize}`} 
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border border-gray-100 md:border-none p-4 md:p-0"
                >
                  <div className="col-span-1 md:col-span-6 flex items-center space-x-4">
                    <div className="w-24 h-24 bg-[#f5f5f5] flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover mix-blend-multiply" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        <Link to={`/product/${item.product.id}`} className="hover:underline">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Size: {item.selectedSize}</p>
                      <button 
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-xs text-red-500 uppercase tracking-widest font-bold flex items-center hover:text-red-700 mt-2"
                      >
                        <Trash2 className="w-3 h-3 mr-1" /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 md:text-center text-lg font-medium">
                    <span className="md:hidden text-sm text-gray-500 uppercase mr-2 tracking-widest">Price:</span>
                    ₹{item.product.price}
                  </div>

                  <div className="col-span-1 md:col-span-2 flex md:justify-center">
                    <div className="flex border border-gray-200">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100"
                      >-</button>
                      <span className="w-10 text-center py-1 text-sm font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100"
                      >+</button>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 md:text-right text-lg font-bold">
                    <span className="md:hidden text-sm text-gray-500 uppercase mr-2 tracking-widest">Total:</span>
                    ₹{item.product.price * item.quantity}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-[#f5f5f5] p-8 sticky top-28">
              <h2 className="font-serif text-2xl font-bold mb-8">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-8 border-b border-gray-200 pb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  {cartTotal > 2000 ? (
                    <>
                      <span className="text-green-600">Shipping (Orders over ₹2000)</span>
                      <span className="font-medium text-green-600">Free</span>
                    </>
                  ) : (
                    <>
                      <span className="text-gray-600">Standard Shipping</span>
                      <span className="font-medium">₹{shipping}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="font-bold uppercase tracking-widest text-sm">Total</span>
                <span className="font-serif text-3xl font-bold text-[var(--color-accent)]">₹{finalTotal}</span>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full flex items-center justify-center py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors group"
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-6 text-center">
                <Link to="/shop" className="text-xs uppercase tracking-widest text-gray-500 hover:text-black border-b border-transparent hover:border-black transition-all">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
