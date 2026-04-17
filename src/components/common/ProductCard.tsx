import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col"
    >
      <Link to={`/product/${product.id}`} className="relative bg-[#f5f5f5] overflow-hidden aspect-[4/5] mb-6">
        {product.isNew && (
          <div className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
            New
          </div>
        )}
        {product.originalPrice && (
          <div className="absolute top-4 right-4 z-10 bg-[var(--color-accent)] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
            Sale
          </div>
        )}
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-black mb-1">
              <Link to={`/product/${product.id}`} className="hover:underline underline-offset-4">
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium">₹{product.price}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">₹{product.originalPrice}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
