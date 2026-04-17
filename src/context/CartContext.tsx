import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, selectedSize: number, quantity: number) => void;
  removeFromCart: (productId: string, selectedSize: number) => void;
  updateQuantity: (productId: string, selectedSize: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, selectedSize: number, quantity: number) => {
    setItems(prev => {
      const existingItem = prev.find(
        item => item.product.id === product.id && item.selectedSize === selectedSize
      );

      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { product, selectedSize, quantity }];
    });
  };

  const removeFromCart = (productId: string, selectedSize: number) => {
    setItems(prev => prev.filter(
      item => !(item.product.id === productId && item.selectedSize === selectedSize)
    ));
  };

  const updateQuantity = (productId: string, selectedSize: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }
    
    setItems(prev => prev.map(item =>
      item.product.id === productId && item.selectedSize === selectedSize
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => setItems([]);

  const cartTotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
