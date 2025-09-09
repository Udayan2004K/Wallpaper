import heroImage from '@/assets/restaurant-hero.jpg';

export const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Homor Resto Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-foreground">
            Homor Resto Cafe
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-gold bg-clip-text text-transparent">
            Homor Resto Cafe
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cream font-light max-w-2xl mx-auto leading-relaxed">
          Experience exceptional flavors in a warm and inviting atmosphere. 
          Every dish is crafted with passion and the finest ingredients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-large"
          >
            View Our Menu
          </a>
          {/* <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Learn More
          </a> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </header>
  );
};