import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Sprint X',
    price: 2499,
    originalPrice: 2999,
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Engineered for speed, the Air Sprint X features an ultra-lightweight mesh upper and responsive cushioning. Perfect for your daily run or intense workout sessions.',
    sizes: [7, 8, 9, 10, 11],
    color: 'Red/Black',
    isNew: true
  },
  {
    id: '2',
    name: 'Urban Glide',
    price: 1899,
    category: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'A minimalist masterpiece for the modern urbanite. Premium synthetic leather meets unmatched comfort in a silhouette that goes with everything.',
    sizes: [6, 7, 8, 9, 10],
    color: 'White/Volt'
  },
  {
    id: '3',
    name: 'Velocity Pro',
    price: 2899,
    originalPrice: 3499,
    category: 'Men',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Bold aesthetics and pro-level performance. Features our proprietary energy-return foam and an aggressive traction pattern.',
    sizes: [8, 9, 10, 11, 12],
    color: 'Neon Green',
    isNew: true
  },
  {
    id: '4',
    name: 'Cloud Walker',
    price: 1499,
    category: 'Women',
    images: [
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Step into comfort. The Cloud Walker uses memory foam insoles and a breathable knit upper to keep your feet happy all day long.',
    sizes: [4, 5, 6, 7, 8],
    color: 'Navy Blue'
  },
  {
    id: '5',
    name: 'Street Elite',
    price: 2199,
    category: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Elevate your streetwear game. High-top silhouette with premium suede overlays and classic rubber sole.',
    sizes: [7, 8, 9, 10, 11],
    color: 'Multicolor'
  },
  {
    id: '6',
    name: 'Court Classic',
    price: 1299,
    originalPrice: 1599,
    category: 'Women',
    images: [
      'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Timeless tennis-inspired style. Uncluttered lines and reliable comfort make this a daily essential.',
    sizes: [5, 6, 7, 8],
    color: 'White'
  },
  {
    id: '7',
    name: 'Aero Boost',
    price: 2999,
    category: 'Sports',
    images: [
      'https://images.unsplash.com/photo-1553158021-953e5dc79d23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Maximum breathability, maximum speed. Designed for high-intensity training with strategic ventilation zones.',
    sizes: [8, 9, 10],
    color: 'Lime/Black'
  },
  {
    id: '8',
    name: 'Heritage High',
    price: 1999,
    category: 'Men',
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Retro vibes with modern construction. Durable leather upper and plush collar for all-day ankle support.',
    sizes: [8, 9, 10, 11],
    color: 'Tan/Brown'
  }
];
