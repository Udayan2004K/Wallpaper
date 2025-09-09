import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';

export const CartButton = () => {
  const { getTotalItems, toggleCart } = useCart();
  const totalItems = getTotalItems();

  return (
    <Button
      onClick={toggleCart}
      variant="outline"
      size="sm"
      className="relative border-primary/20 bg-card hover:bg-card-hover transition-colors"
    >
      <ShoppingCart className="h-4 w-4 text-primary" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
      <span className="ml-2 text-foreground">Cart</span>
    </Button>
  );
};

export const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart, getTotalPrice, closeCart } = useCart();
  const { items, isOpen } = state;
  const total = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-l border-border flex flex-col h-full">
        <SheetHeader className="space-y-4">
          <SheetTitle className="text-xl font-semibold text-foreground">Your Order</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex-1 overflow-y-auto max-h-[calc(100vh-200px)] no-scrollbar">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button
                className="w-full bg-gradient-royal hover:opacity-90 transition-opacity mt-4"
                size="lg"
                onClick={closeCart}
              >
                Click here to choose your item
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 bg-card rounded-lg shadow-soft">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                      <p className="text-sm text-gold font-semibold">₹{item.price.toFixed(2)}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 border-primary/20"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 border-primary/20"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive/80 ml-2"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span className="text-foreground">Total:</span>
                  <span className="text-primary text-xl">₹{total.toFixed(2)}</span>
                </div>
                
                <div className="space-y-2">
                  <Button
                    className="w-full bg-gradient-royal hover:opacity-90 transition-opacity"
                    onClick={clearCart}
                    size="lg"
                  >
                    Clear Cart
                  </Button>
                  {/* <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full border-border text-muted-foreground hover:text-foreground"
                  >
                    Clear Cart
                  </Button> */}
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};