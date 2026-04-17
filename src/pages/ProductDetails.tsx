import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-sm uppercase tracking-widest font-bold border-b border-black pb-1">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }
    addToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-10 uppercase tracking-widest text-[10px]">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">{product.category}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Product Gallery */}
          <div className="lg:w-1/2">
            <div className="aspect-[4/5] bg-[#f5f5f5] mb-4 relative overflow-hidden">
               {product.isNew && (
                  <div className="absolute top-6 left-6 z-10 bg-black text-white text-[10px] uppercase font-bold tracking-widest px-4 py-2">
                    New
                  </div>
                )}
                {product.originalPrice && (
                  <div className="absolute top-6 right-6 z-10 bg-[var(--color-accent)] text-white text-[10px] uppercase font-bold tracking-widest px-4 py-2">
                    Sale
                  </div>
                )}
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 bg-[#f5f5f5] border-2 transition-colors ${activeImage === idx ? 'border-black' : 'border-transparent hover:border-gray-200'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-end space-x-4 mb-8">
                <p className="text-2xl font-bold">₹{product.price}</p>
                {product.originalPrice && (
                  <p className="text-lg text-gray-400 line-through mb-0.5">₹{product.originalPrice}</p>
                )}
              </div>

              <div className="prose prose-sm text-gray-600 mb-10 leading-relaxed font-light">
                <p>{product.description}</p>
              </div>

              <div className="mb-8 border-t border-gray-100 pt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest">Size <span className="text-gray-400 font-normal ml-2">(UK)</span></h3>
                  <button className="text-xs text-gray-500 underline uppercase tracking-wider">Size Guide</button>
                </div>
                
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border text-sm transition-colors ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white font-bold' 
                          : 'border-gray-200 text-gray-600 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mb-12">
                <div className="w-32 border border-gray-200 flex items-center justify-between px-4">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="text-gray-500 hover:text-black py-4 w-1/3 text-left"
                  >-</button>
                  <span className="font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="text-gray-500 hover:text-black py-4 w-1/3 text-right"
                  >+</button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-1 flex items-center justify-center py-4 text-sm font-bold uppercase tracking-widest transition-all ${
                    isAdded 
                      ? 'bg-green-600 text-white' 
                      : 'bg-black text-white hover:bg-[var(--color-accent)]'
                  }`}
                >
                  {isAdded ? (
                    <><Check className="w-5 h-5 mr-2" /> Added to Cart</>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>

              <div className="space-y-4 text-sm text-gray-500 border-t border-gray-100 pt-8">
                <p className="flex items-center"><Check className="w-4 h-4 mr-3 text-green-500" /> Free shipping on orders over ₹2000</p>
                <p className="flex items-center"><Check className="w-4 h-4 mr-3 text-green-500" /> 30-day return policy</p>
                <p className="flex items-center"><Check className="w-4 h-4 mr-3 text-green-500" /> 100% authentic products</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};
