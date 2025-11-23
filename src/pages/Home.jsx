import { getAllProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import HeroCarousel from '../components/HeroCarousel';
import PromotionalBanner from '../components/PromotionalBanner';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Get first 8 products for featured section
  const featuredProducts = getAllProducts().slice(0, 8);
  // Get more products for additional showcase (products 9-16)
  const popularProducts = getAllProducts().slice(8, 16);
  // Get products for carousel (all products for auto-slideshow)
  const carouselProducts = getAllProducts();
  
  // Auto-slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const totalSlides = Math.ceil(carouselProducts.length / itemsPerSlide);

  // Auto-slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Responsive items per slide
  useEffect(() => {
    const calculateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width >= 1280) return 5; // xl
      if (width >= 1024) return 4; // lg
      if (width >= 768) return 3;  // md
      if (width >= 640) return 2;  // sm
      return 2;                    // base
    };

    const apply = () => setItemsPerSlide(calculateItemsPerSlide());
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  // Function to go to specific slide
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />


      {/* Featured Products Section */}
      <section className="py-16 bg-primary-white relative">
        {/* Banner Area */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-blue to-dark-blue"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-black mb-2 md:mb-4">
              Shop the Best Appliances at Unbeatable Prices
            </h2>
            <p className="text-dark-gray text-sm md:text-lg max-w-2xl mx-auto">
              Premium appliances from leading brands. Find exactly what you need for your home at unbeatable prices.
            </p>
          </div>

          {/* Two Column Layout: Filters + Products */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Filter Sidebar - moves below on mobile */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white rounded-lg p-6 lg:sticky lg:top-4">
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-black mb-3">Category</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-primary-blue" defaultChecked />
                      <span className="text-sm text-dark-gray">All Products</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-primary-blue" />
                      <span className="text-sm text-dark-gray">Kitchen Appliances</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-primary-blue" />
                      <span className="text-sm text-dark-gray">Laundry Equipment</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-primary-blue" />
                      <span className="text-sm text-dark-gray">Small Appliances</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-primary-blue" />
                      <span className="text-sm text-dark-gray">Food Processing</span>
                    </label>
                  </div>
                </div>

                {/* Clear Filters Link */}
                <button className="text-primary-blue text-sm font-medium hover:text-dark-blue hover:underline transition-colors duration-200">
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid - shown first on mobile */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center">
            <a
              href="/products"
              className="text-primary-blue text-md underline hover:text-dark-blue hover:underline transition-colors duration-200"
            >
              Shop All Appliances Now
            </a>
          </div>
        </div>
      </section>


      {/* Product Carousel Section - New Arrivals */}
      <section className="py-16 bg-white relative">
        {/* Banner Area */}
        {/* <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-dark-blue to-primary-blue"></div> */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-black">New Arrivals</h2>
          </div>
          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {carouselProducts
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((product) => (
                          <div key={product.id}>
                            <ProductCard product={product} />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-blue text-white p-2 rounded-full hover:bg-dark-blue transition-colors duration-200 z-10"
              onClick={prevSlide}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-blue text-white p-2 rounded-full hover:bg-dark-blue transition-colors duration-200 z-10"
              onClick={nextSlide}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-opacity duration-200 ${
                  currentSlide === index 
                    ? 'bg-primary-blue opacity-100' 
                    : 'bg-primary-blue opacity-50 hover:opacity-100'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-light-gray relative">
        {/* Banner Area */}
        {/* <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-dark-blue to-primary-blue"></div> */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-black mb-2 md:mb-4">
              Shop by Category - Find Your Perfect Appliances
            </h2>
            <p className="text-dark-gray text-sm md:text-lg max-w-3xl mx-auto">
              Browse our organized categories to quickly find the appliances you need. From kitchen essentials to laundry solutions - we have everything in stock and ready for immediate purchase or delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="/products?category=kitchen" className="bg-primary-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200 hover:scale-105 transform">
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary-black mb-1">Kitchen Appliances</h3>
              <p className="text-sm text-dark-gray">Shop refrigerators, ranges & more</p>
            </a>
            <a href="/products?category=laundry" className="bg-primary-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200 hover:scale-105 transform">
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary-black mb-1">Laundry Equipment</h3>
              <p className="text-sm text-dark-gray">Washers, dryers & combos</p>
            </a>
            <a href="/products?category=smallAppliances" className="bg-primary-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200 hover:scale-105 transform">
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary-black mb-1">Small Appliances</h3>
              <p className="text-sm text-dark-gray">Blenders, mixers & coffee makers</p>
            </a>
            <a href="/products?category=foodProcessing" className="bg-primary-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200 hover:scale-105 transform">
              <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold text-primary-black mb-1">Food Processing</h3>
              <p className="text-sm text-dark-gray">Grinders, processors & blenders</p>
            </a>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://scontent.fmlw2-1.fna.fbcdn.net/v/t39.30808-6/541076520_770848122199509_4860699805943466600_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF5b6t0Q8ADz3vwlppUE7lQXcR3egGRr-ddxHd6AZGv52KTDBubHUDsayHWmhLF8QaqoXZ79Quv3sJ-ApO_GjRz&_nc_ohc=ofYgTIZLvIIQ7kNvwHPYgfP&_nc_oc=AdluxTR5bhD87F5Pi6LBu7haf4ggZvbrG0WsOYazo2_HtKBTEV0VWPnkzKsylyy4LRg&_nc_zt=23&_nc_ht=scontent.fmlw2-1.fna&_nc_gid=RxxeAjO7cMKtouzFe9qopA&oh=00_AfbAW3nJDHCki1JZ63nK6tb2mH4Cg26j1p06wwjqRT9jWA&oe=68CBA559')`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 min-h-[260px] md:min-h-[300px]">
            {/* Content */}
            <div className="space-y-3 md:space-y-4 flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl !text-white font-bold leading-tight bg-primary-blue rounded-full px-4 py-2 inline-block">
                YOUR ALL-SEASON COMPANION
              </h2>
              <p className="text-base md:text-xl text-black">
                GREE Air Conditioner - Premium cooling solutions for every season
              </p>
               <a
                 href="/products"
                 className="inline-block bg-primary-blue text-white px-6 md:px-8 py-3 rounded-lg font-bold text-base md:text-lg hover:bg-dark-blue transition-colors duration-200"
               >
                 Get a Quote
               </a>
            </div>
            
            {/* Product Image */}
            <div className="relative flex-shrink-0">
              <img
                src="https://scontent.fmlw2-1.fna.fbcdn.net/v/t39.30808-6/541076520_770848122199509_4860699805943466600_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF5b6t0Q8ADz3vwlppUE7lQXcR3egGRr-ddxHd6AZGv52KTDBubHUDsayHWmhLF8QaqoXZ79Quv3sJ-ApO_GjRz&_nc_ohc=ofYgTIZLvIIQ7kNvwHPYgfP&_nc_oc=AdluxTR5bhD87F5Pi6LBu7haf4ggZvbrG0WsOYazo2_HtKBTEV0VWPnkzKsylyy4LRg&_nc_zt=23&_nc_ht=scontent.fmlw2-1.fna&_nc_gid=RxxeAjO7cMKtouzFe9qopA&oh=00_AfbAW3nJDHCki1JZ63nK6tb2mH4Cg26j1p06wwjqRT9jWA&oe=68CBA559"
                alt="GREE Air Conditioner - Your All-Season Companion"
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-primary-black">
            Ready to Shop? Get Your Appliances Today!
          </h2>
          <p className="text-base md:text-xl text-dark-gray mb-8 md:mb-12 max-w-3xl mx-auto">
            Browse our full inventory, get instant pricing, and have your new appliances delivered and installed by our expert team. Shop online or visit our store for the best selection and prices in town.
          </p>
          
          <div className="space-y-4">
            <div className="text-lg">
              <a
                href="/products"
                className="text-primary-blue hover:text-dark-blue transition-colors duration-200"
              >
                Browse All Products
              </a>
            </div>
            <div className="text-lg">
              <a
                href="tel:+231775600100"
                className="text-primary-blue hover:text-dark-blue transition-colors duration-200"
              >
                Call for Pricing & Availability
              </a>
            </div>
            <div className="text-lg">
              <a
                href="https://wa.me/231775600100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-dark-blue transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp for Quick Order</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;