import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('online');
  const [isSuccess, setIsSuccess] = useState(false);

  const shipping = cartTotal > 2000 ? 0 : 150;
  const finalTotal = cartTotal + (items.length > 0 ? shipping : 0);

  if (items.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white p-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md w-full"
        >
          <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="font-serif text-4xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order number is <span className="font-bold text-black">#{Math.floor(Math.random() * 1000000)}</span>. 
            We've sent a confirmation email with order details.
          </p>
          <Link 
            to="/shop" 
            className="inline-block w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f5] min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-10">Checkout Request</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="bg-white p-8">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                    <input required type="text" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                    <input required type="text" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input required type="email" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Street Address</label>
                    <input required type="text" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black mb-3" placeholder="House number and street name" />
                    <input type="text" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black" placeholder="Apartment, suite, unit, etc. (optional)" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Town / City</label>
                    <input required type="text" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">State</label>
                    <input required type="text" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">PIN Code</label>
                    <input required type="text" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                    <input required type="tel" className="w-full border border-gray-200 p-3 focus:outline-none focus:border-black" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">Payment Method</h2>
                <div className="space-y-4">
                  <label className={`block border p-4 cursor-pointer transition-colors ${paymentMethod === 'online' ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="online"
                        checked={paymentMethod === 'online'}
                        onChange={() => setPaymentMethod('online')}
                        className="w-4 h-4 text-black accent-black focus:ring-black"
                      />
                      <span className="ml-3 font-bold uppercase tracking-widest text-sm">Online Payment (UPI / Card / Net Banking)</span>
                    </div>
                    {paymentMethod === 'online' && (
                      <p className="ml-7 mt-2 text-sm text-gray-500">You will be securely redirected to our payment gateway after clicking place order.</p>
                    )}
                  </label>
                  
                  <label className={`block border p-4 cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        name="payment" 
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="w-4 h-4 text-black accent-black focus:ring-black"
                      />
                      <span className="ml-3 font-bold uppercase tracking-widest text-sm">Cash on Delivery</span>
                    </div>
                    {paymentMethod === 'cod' && (
                      <p className="ml-7 mt-2 text-sm text-gray-500">Pay with cash upon delivery. An additional fee may apply.</p>
                    )}
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[var(--color-accent)] text-white text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-lg"
              >
                Place Order (₹{finalTotal})
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 sticky top-28 border border-gray-100">
              <h2 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex items-center space-x-3 text-sm">
                    <div className="w-16 h-16 bg-[#f5f5f5] flex-shrink-0">
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">{item.product.name}</p>
                      <p className="text-gray-500 text-xs">Size: {item.selectedSize} × {item.quantity}</p>
                    </div>
                    <div className="font-medium">
                      ₹{item.product.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm border-t border-b border-gray-100 py-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <span className="font-bold uppercase tracking-widest text-sm">Total</span>
                <span className="font-serif text-2xl font-bold text-[var(--color-accent)]">₹{finalTotal}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
