import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MenuItem, useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
    // toast({
    //   title: "Added to cart",
    //   description: `${item.name} has been added to your cart.`,
    //   duration: 700,
    // });
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
      <CardFooter className="absolute bottom-0 left-0 right-0 p-0">
        <Button
          onClick={handleAddToCart}
          className="w-full rounded-none bg-gradient-royal hover:opacity-90 transition-opacity"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};