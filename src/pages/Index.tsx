import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import { Cart } from '@/components/Cart';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="menu">
        <Menu />
      </main>
      <Cart />
    </div>
  );
};

export default Index;
