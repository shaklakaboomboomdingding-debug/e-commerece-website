import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';

export const Home = () => {
  const featuredProducts = products.filter(p => p.isNew || p.originalPrice).slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#f5f5f5]">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Hero Shoe" 
            className="w-full h-full object-cover object-center opacity-90 mix-blend-multiply" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-[var(--color-accent)] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              New Collection 2026
            </p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-black leading-[0.9] mb-8 tracking-tight">
              Step Into<br />
              <span className="italic font-light">Greatness.</span>
            </h1>
            <p className="text-xl text-gray-800 mb-10 max-w-md">
              Premium footwear designed for the modern trailblazer. Discover your next favorite pair.
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] transition-colors duration-300 group"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <CategoryCard title="Men" image="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
            <CategoryCard title="Women" image="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
            <CategoryCard title="Sports" image="https://images.unsplash.com/photo-1553158021-953e5dc79d23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
            <CategoryCard title="Casual" image="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4">Featured Additions</h2>
              <p className="text-gray-500 max-w-md">Our latest and greatest hits, curated specifically for you.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors group">
              View All 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link to="/shop" className="flex items-center justify-center w-full py-4 border border-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[var(--color-accent)] font-bold tracking-[0.2em] uppercase text-sm mb-4">Limited Time Offer</p>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">Up to 40% Off<br /><span className="font-light italic">Summer Sale.</span></h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                Upgrade your shoe game without breaking the bank. Discover our exclusive summer deals on selected items across all categories.
              </p>
              <Link 
                to="/shop" 
                className="inline-block px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
              >
                Shop Sale
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-[#1a1a1a] flex items-center justify-center overflow-hidden mix-blend-screen"
            >
              <img 
                src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Sale Shoe" 
                className="object-cover w-full h-full opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-16">What Our Walkers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Rahul Sharma" 
              role="Sneakerhead"
              text="The Urban Glide is honestly exactly what I needed for my daily commute. Premium look and crazy comfortable. Highly recommend Shoes Bazar."
              rating={5}
            />
            <TestimonialCard 
              name="Priya Patel" 
              role="Fitness Coach"
              text="I practically live in the Aero Boosts. The support and responsiveness is top tier. Shipping was incredibly fast too."
              rating={5}
            />
            <TestimonialCard 
              name="Amit Kumar" 
              role="Casual Wearer"
              text="Been looking for vintage style with modern comfort and Heritage High delivered perfectly. The quality definitely justifies the price."
              rating={4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ title, image }: { title: string, image: string }) => (
  <Link to={`/shop?category=${title}`} className="group relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] block">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-multiply"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
    <div className="absolute inset-0 flex items-center justify-center">
      <h3 className="text-white text-3xl font-serif tracking-wide border border-white/30 px-8 py-3 backdrop-blur-sm group-hover:border-white transition-colors duration-300">
        {title}
      </h3>
    </div>
  </Link>
);

const TestimonialCard = ({ name, role, text, rating }: { name: string, role: string, text: string, rating: number }) => (
  <div className="bg-white p-8 border border-gray-100 shadow-sm">
    <div className="flex space-x-1 mb-6 text-[var(--color-accent)]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="text-gray-600 mb-8 italic">"{text}"</p>
    <div>
      <p className="font-bold text-sm uppercase tracking-wider">{name}</p>
      <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{role}</p>
    </div>
  </div>
);
