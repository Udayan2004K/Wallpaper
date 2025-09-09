import { useState } from 'react';
import { MenuItem } from '@/context/CartContext';
import { MenuItemCard } from './MenuItemCard';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

// Sample menu data
import burgerImg from '@/assets/burger.jpg';
import saladImg from '@/assets/salad.jpg';
import pastaImg from '@/assets/pasta.jpg';
import pizzaImg from '@/assets/pizza.jpg';

const menuItems: MenuItem[] = [
  // Starters
  {
    id: 'st1',
    name: 'Crispy Onion Rings',
    description: 'Golden-fried onion rings served with honey mustard dip',
    price: 6.99,
    image: burgerImg,
    category: 'Starters',
  },
  {
    id: 'st2',
    name: 'Garlic Bread Supreme',
    description: 'Toasted bread with garlic butter, herbs, and melted mozzarella',
    price: 5.99,
    image: burgerImg,
    category: 'Starters',
  },
  {
    id: 'st3',
    name: 'Chicken Wings',
    description: 'Crispy wings tossed in your choice of sauce: BBQ, Buffalo, or Honey Garlic',
    price: 9.99,
    image: burgerImg,
    category: 'Starters',
  },

  // Deserts
  {
    id: 'd1',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 8.99,
    image: pizzaImg,
    category: 'Deserts',
  },
  {
    id: 'd2',
    name: 'New York Cheesecake',
    description: 'Classic creamy cheesecake with berry compote',
    price: 7.99,
    image: pizzaImg,
    category: 'Deserts',
  },
  {
    id: 'd3',
    name: 'Apple Pie à la Mode',
    description: 'Warm apple pie with cinnamon, served with vanilla ice cream',
    price: 8.99,
    image: pizzaImg,
    category: 'Deserts',
  },

  // Main Course
  {
    id: 'mc1',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with lemon herb butter, served with roasted vegetables',
    price: 24.99,
    image: saladImg,
    category: 'Main Course',
  },
  {
    id: 'mc2',
    name: 'Chicken Marsala',
    description: 'Pan-seared chicken in mushroom marsala sauce with mashed potatoes',
    price: 22.99,
    image: saladImg,
    category: 'Main Course',
  },
  {
    id: 'mc3',
    name: 'Ribeye Steak',
    description: '12oz ribeye steak cooked to perfection with garlic butter and sides',
    price: 29.99,
    image: saladImg,
    category: 'Main Course',
  },

  // Burgers
  {
    id: 'b1',
    name: 'Classic Beef Burger',
    description: 'Juicy beef patty with fresh lettuce, tomatoes, onions, and our special sauce',
    price: 12.99,
    image: burgerImg,
    category: 'Burgers',
  },
  {
    id: 'b2',
    name: 'Deluxe Cheeseburger',
    description: 'Double beef patties with cheese, bacon, lettuce, tomatoes and house sauce',
    price: 15.99,
    image: burgerImg,
    category: 'Burgers',
  },
  {
    id: 'b3',
    name: 'Mushroom Swiss Burger',
    description: 'Beef patty topped with sautéed mushrooms and melted Swiss cheese',
    price: 14.99,
    image: burgerImg,
    category: 'Burgers',
  },

  // Veg-Burgers
  {
    id: 'vb1',
    name: 'Classic Veggie Burger',
    description: 'House-made vegetable patty with lettuce, tomatoes, and vegan mayo',
    price: 11.99,
    image: burgerImg,
    category: 'Veg-Burgers',
  },
  {
    id: 'vb2',
    name: 'Beyond Meat Burger',
    description: 'Plant-based Beyond patty with vegan cheese and fresh vegetables',
    price: 13.99,
    image: burgerImg,
    category: 'Veg-Burgers',
  },
  {
    id: 'vb3',
    name: 'Spicy Bean Burger',
    description: 'Spiced black bean patty with avocado and chipotle sauce',
    price: 12.99,
    image: burgerImg,
    category: 'Veg-Burgers',
  },

  // Sandwiches
  {
    id: 's1',
    name: 'Club Sandwich',
    description: 'Triple-decker with turkey, bacon, lettuce, tomato, and mayo',
    price: 11.99,
    image: burgerImg,
    category: 'Sandwiches',
  },
  {
    id: 's2',
    name: 'Grilled Chicken Sandwich',
    description: 'Grilled chicken breast with avocado, bacon, and honey mustard',
    price: 12.99,
    image: burgerImg,
    category: 'Sandwiches',
  },
  {
    id: 's3',
    name: 'Veggie Supreme',
    description: 'Grilled vegetables with pesto and mozzarella on ciabatta',
    price: 10.99,
    image: burgerImg,
    category: 'Sandwiches',
  },

  // Homer Combos
  {
    id: 'hc1',
    name: 'Burger Feast',
    description: 'Signature burger with fries, drink, and dessert',
    price: 19.99,
    image: burgerImg,
    category: 'Homer Combos',
  },
  {
    id: 'hc2',
    name: 'Pizza Party',
    description: 'Medium pizza with wings, garlic bread, and drinks for two',
    price: 29.99,
    image: pizzaImg,
    category: 'Homer Combos',
  },
  {
    id: 'hc3',
    name: 'Family Bundle',
    description: 'Choose any 4 main courses with sides and desserts',
    price: 59.99,
    image: burgerImg,
    category: 'Homer Combos',
  },

  // Tea/Coffee
  {
    id: 'tc1',
    name: 'Classic Cappuccino',
    description: 'Espresso topped with foamy milk and cocoa powder',
    price: 4.99,
    image: pizzaImg,
    category: 'Tea/coffee',
  },
  {
    id: 'tc2',
    name: 'Earl Grey Tea',
    description: 'Premium earl grey tea served with honey and lemon',
    price: 3.99,
    image: pizzaImg,
    category: 'Tea/coffee',
  },
  {
    id: 'tc3',
    name: 'Iced Caramel Latte',
    description: 'Espresso with caramel syrup and cold milk over ice',
    price: 5.99,
    image: pizzaImg,
    category: 'Tea/coffee',
  },

  // Smoothies
  {
    id: 'sm1',
    name: 'Berry Blast',
    description: 'Mixed berries blended with yogurt and honey',
    price: 6.99,
    image: pizzaImg,
    category: 'Smoothie',
  },
  {
    id: 'sm2',
    name: 'Tropical Paradise',
    description: 'Mango, pineapple, and coconut milk smoothie',
    price: 6.99,
    image: pizzaImg,
    category: 'Smoothie',
  },
  {
    id: 'sm3',
    name: 'Green Goddess',
    description: 'Spinach, kale, apple, and banana health smoothie',
    price: 7.99,
    image: pizzaImg,
    category: 'Smoothie',
  },

  // Beverages
  {
    id: 'bv1',
    name: 'Fresh Lemonade',
    description: 'House-made lemonade with mint leaves',
    price: 4.99,
    image: pizzaImg,
    category: 'Beverages',
  },
  {
    id: 'bv2',
    name: 'Iced Tea',
    description: 'Fresh-brewed iced tea with optional lemon',
    price: 3.99,
    image: pizzaImg,
    category: 'Beverages',
  },
  {
    id: 'bv3',
    name: 'Sparkling Water',
    description: 'Chilled sparkling water with lime',
    price: 2.99,
    image: pizzaImg,
    category: 'Beverages',
  },

  // Salads
  {
    id: 'sl1',
    name: 'Caesar Salad',
    description: 'Romaine lettuce with parmesan, croutons, and caesar dressing',
    price: 9.99,
    image: saladImg,
    category: 'Salads',
  },
  {
    id: 'sl2',
    name: 'Mediterranean Salad',
    description: 'Mixed greens with olives, feta, cucumbers, and balsamic',
    price: 11.99,
    image: saladImg,
    category: 'Salads',
  },
  {
    id: 'sl3',
    name: 'Quinoa Bowl',
    description: 'Quinoa with roasted vegetables, avocado, and tahini dressing',
    price: 12.99,
    image: saladImg,
    category: 'Salads',
  },

  // Pasta
  {
    id: 'p1',
    name: 'Creamy Alfredo',
    description: 'Fettuccine in rich alfredo sauce with parmesan',
    price: 14.99,
    image: pastaImg,
    category: 'Pasta',
  },
  {
    id: 'p2',
    name: 'Spicy Arrabbiata',
    description: 'Penne with spicy tomato sauce and fresh basil',
    price: 13.99,
    image: pastaImg,
    category: 'Pasta',
  },
  {
    id: 'p3',
    name: 'Seafood Linguine',
    description: 'Linguine with mixed seafood in white wine sauce',
    price: 18.99,
    image: pastaImg,
    category: 'Pasta',
  },

  // Pizza
  {
    id: 'pz1',
    name: 'Margherita',
    description: 'Fresh tomatoes, mozzarella, basil, and olive oil',
    price: 16.99,
    image: pizzaImg,
    category: 'Pizza',
  },
  {
    id: 'pz2',
    name: 'Pepperoni Supreme',
    description: 'Pepperoni, mushrooms, bell peppers, and extra cheese',
    price: 18.99,
    image: pizzaImg,
    category: 'Pizza',
  },
  {
    id: 'pz3',
    name: 'BBQ Chicken',
    description: 'BBQ sauce, grilled chicken, red onions, and cilantro',
    price: 19.99,
    image: pizzaImg,
    category: 'Pizza',
  },
];

const categories = ['All', 'Starters', 'Deserts', 'Main Course', 'Burgers', 'Veg-Burgers', 'Sandwiches', 'Homer Combos', 'Tea/coffee', 'Smoothie', 'Beverages', 'Salads', 'Pasta', 'Pizza'];

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Menu</h2>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and served with love
          </p>
        </div>

        {/* Category Filter */}
        <div 
          className="w-screen left-1/2 right-1/2 -translate-x-1/2 relative flex overflow-x-auto gap-2 px-3 py-4 no-scrollbar mb-8"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`
          flex-shrink-0
          ${selectedCategory === category
            ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-primary-foreground before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#FFD700]/30 before:to-[#FFA500]/30 before:blur-sm before:rounded-full after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-r after:from-[#FFD700]/20 after:to-[#FFA500]/20 after:blur-2xl after:rounded-full scale-110 shadow-lg shadow-[#FFD700]/20"
            : "border-primary/20 text-foreground hover:bg-accent hover:scale-105 relative transition-all duration-200"
          }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid with Fade Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};