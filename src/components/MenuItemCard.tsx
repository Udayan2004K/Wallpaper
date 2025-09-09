import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MenuItem, useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { state: { items }, addItem, updateQuantity } = useCart();

  const cartItem = items.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleIncrease = () => {
    addItem({ ...item, quantity: 1 });
    toast({
      title: "Added to cart",
      description: `${quantity + 1} x ${item.name}`,
    });
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(item.id, quantity - 1);
    }
  };

  return (
    <Card className="group overflow-hidden bg-card hover:bg-card-hover transition-colors shadow-soft hover:shadow-medium relative pb-14">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-1 pt-2 px-3">
        <CardTitle className="text-md font-semibold text-foreground">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-1 px-3">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
            ₹{item.price.toFixed(2)}
          </p>
        </div>
        <span className="text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded-full">
            {item.category}
        </span>
      </CardContent>
      <CardFooter className="absolute bottom-0 left-0 right-0 p-0 flex">
        {quantity === 0 ? (
          <Button
            onClick={handleIncrease}
            className="w-full rounded-none bg-gradient-royal hover:opacity-90 transition-opacity"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center w-full">
            <Button onClick={handleDecrease} variant="outline" size="icon" className="rounded-none rounded-bl-lg border-r-0">
              <Minus className="h-4 w-4" />
            </Button>
            <div className="flex-1 text-center bg-gradient-royal text-white py-2">{quantity}</div>
            <Button onClick={handleIncrease} variant="outline" size="icon" className="rounded-none rounded-br-lg border-l-0">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};