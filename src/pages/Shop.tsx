import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { Category } from '../types';
import { ProductCard } from '../components/common/ProductCard';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as Category | null;
  
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>(categoryParam || 'All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categories: (Category | 'All')[] = ['All', 'Men', 'Women', 'Sports', 'Casual'];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // featured could just be default order or newest first
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const toggleMobileFilters = () => setIsMobileFiltersOpen(!isMobileFiltersOpen);

  return (
    <div className="bg-white min-h-screen pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Shop Collection</h1>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Showing {filteredAndSortedProducts.length} Results</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <div className="hidden md:flex items-center space-x-2">
              <label htmlFor="sort" className="text-sm font-medium uppercase tracking-wider text-gray-500">Sort By:</label>
              <select 
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="border-b border-gray-300 py-1 pl-2 pr-8 text-sm focus:outline-none focus:border-black bg-transparent uppercase tracking-wider"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            
            <button 
              onClick={toggleMobileFilters}
              className="md:hidden flex items-center space-x-2 border border-black px-4 py-2 uppercase text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Desktop Filters Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-10">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b border-gray-100">Category</h3>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-sm tracking-wider uppercase transition-colors ${selectedCategory === cat ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b border-gray-100">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="4000" 
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <h3 className="text-xl font-serif mb-4">No products found</h3>
                <p className="text-gray-500 mb-8">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange([0, 3000]);
                  }}
                  className="px-6 py-3 border border-black uppercase text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 md:hidden"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                <h2 className="text-lg font-serif font-bold">Filters</h2>
                <button onClick={toggleMobileFilters} className="text-gray-500 hover:text-black">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-8 overflow-y-auto max-h-[calc(100vh-200px)]">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Sort By</h3>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black bg-transparent uppercase tracking-wider"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Category</h3>
                  <ul className="space-y-4 border border-gray-100 p-4">
                    {categories.map(cat => (
                      <li key={cat}>
                        <button 
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-sm tracking-wider uppercase w-full text-left transition-colors ${selectedCategory === cat ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Price up to: ₹{priceRange[1]}</h3>
                  <input 
                    type="range" 
                    min="500" 
                    max="4000" 
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                  />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <button 
                  onClick={toggleMobileFilters}
                  className="w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
