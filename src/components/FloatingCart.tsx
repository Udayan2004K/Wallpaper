import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { useState, useEffect } from 'react';

export const FloatingCart = () => {
  const { getTotalItems, toggleCart } = useCart();
  const totalItems = getTotalItems();
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);

  // Update visibility based on scroll position
  useEffect(() => {
    const headerHeight = window.innerHeight; // Full viewport height since header is min-h-screen
    setIsVisible(scrollPosition > headerHeight * 0.5);
  }, [scrollPosition]);

  // Handle menu button click
  useEffect(() => {
    const handleMenuClick = () => {
      setIsVisible(true);
    };

    const menuButton = document.querySelector('a[href="#menu"]');
    menuButton?.addEventListener('click', handleMenuClick);

    return () => {
      menuButton?.removeEventListener('click', handleMenuClick);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Button
            onClick={toggleCart}
            size="lg"
            className="relative bg-gradient-to-r from-primary-dark via-primary to-primary-light hover:opacity-90 transition-all duration-200 rounded-full w-16 h-16 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center"
          >
            <ShoppingCart className="h-6 w-6 text-primary-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-primary-foreground text-sm font-semibold rounded-full h-6 w-6 flex items-center justify-center border-2 border-background shadow-lg">
                {totalItems}
              </span>
            )}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
