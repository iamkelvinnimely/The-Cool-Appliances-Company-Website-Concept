import { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      backgroundImage: 'https://scontent.fmlw2-1.fna.fbcdn.net/v/t39.30808-6/481191587_632912765993046_2940470048284761646_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHytYvS0mZMDPPPKCZtrWNqVqzgwyRept9WrODDJF6m32bONpU1KW-Ggz2YxaKPWpCNDYCf7Rz43Ro9HIejl8Ae&_nc_ohc=KSyDF6PEf08Q7kNvwE2UDgZ&_nc_oc=Adl8wEzc_hUiFBYZZMa8LGUTX-WxWrHQ4xZ_7LuPjMCZMyF4Bq_63NcqdrG-M0-fE3U&_nc_zt=23&_nc_ht=scontent.fmlw2-1.fna&_nc_gid=DA6BRyWsg4-YtUemIfj0Yg&oh=00_AfamWzOpO5Oq-hL3Z7CO_uISIoaSQI2VQdHJKdxoVuvgPQ&oe=68CB6841',
      headline: 'Premium Kitchen Appliances',
      subheadline: 'Transform your cooking experience with European-standard appliances designed for modern homes',
      ctaText: 'Shop Kitchen Appliances',
      ctaLink: '/products?category=kitchen'
    },
    {
      id: 2,
      backgroundImage: 'https://scontent.fmlw2-1.fna.fbcdn.net/v/t39.30808-6/471853136_614399727827814_8795967696649653569_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEXl2LbuDDXJ2WkhHj6aNq4bfCtAAWDzX5t8K0ABYPNfoblzL2AqceW0j1eJuJ2UyNTMspgbRznAIEpt0-E-U5K&_nc_ohc=XY51adDY_EwQ7kNvwGveHfm&_nc_oc=AdlXOSvRu5miDboyN2zW2Y3R5nPv-8I4eI5OIAxTj_fxQz53nlUYiSMvpDmxcHoLP00&_nc_zt=23&_nc_ht=scontent.fmlw2-1.fna&_nc_gid=BAy9xtyoZLXxA96BPeoXLg&oh=00_AfZLnGqyXKKuenHEyUrKgnAY76oxZHhWYrJBpO5J9L_HDw&oe=68CB4937',
      headline: 'Smart Laundry Solutions',
      subheadline: 'Experience the future of laundry with our award-winning washing machines and dryers',
      ctaText: 'Explore Laundry Equipment',
      ctaLink: '/products?category=laundry'
    },
    {
      id: 3,
      backgroundImage: 'https://scontent.fmlw2-1.fna.fbcdn.net/v/t39.30808-6/480841113_630306729586983_3682610035530801039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF2m42eC2iiVBZqodClHYoCNSi4itOWIcQ1KLiK05YhxIfk0rS1vnVt1wFgTvL8crStOlBxuGjYTezBVkbACo0-&_nc_ohc=aRTd80FZK8AQ7kNvwFcshKs&_nc_oc=AdnMCH2ZEar93iv7p9VwvvdbMNWIkDrHpoE_CHcXPP0EK5Ll4b9F524B1y--G_LLQEs&_nc_zt=23&_nc_ht=scontent.fmlw2-1.fna&_nc_gid=pX84j-czyAmSHPTB0SpOVg&oh=00_Afbd9n-fDC8_iszWwFnsB6V6wW6ipNoSiQS-2-up6kLkVA&oe=68CB48A6',
      headline: 'Professional Installation',
      subheadline: 'Expert technicians ensure your appliances are installed correctly and safely',
      ctaText: 'Learn About Our Services',
      ctaLink: '/services'
    },
    {
      id: 4,
      backgroundImage: 'https://scontent.fmlw2-1.fna.fbcdn.net/v/t39.30808-6/481119922_635827685701554_5478387820783649042_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFhZ2opqZROaENpnJvtmI2Rci9Gl6P00qRyL0aXo_TSpHJxoJ9Ctw9ngO9jd4sXepdph_GlOfHWAxjJJYEOfqzF&_nc_ohc=ML9tewdftCIQ7kNvwGSnmf4&_nc_oc=AdnHGUPAuApoPS3WHKsYVHO2I0_mYKcO0D6b_XuDOHJntlxfusbrlEIoDLKSBSV8BUw&_nc_zt=23&_nc_ht=scontent.fmlw2-1.fna&_nc_gid=Le8K5VzcDNP9MQb9pJpCJQ&oh=00_AfaXEZpqnSxBaBLfUvZelOPIEjnSlRQHCm5mqVD-LtrsOQ&oe=68CB7987',
      headline: 'Elevate Your Home in 2025',
      subheadline: 'Discover our complete range of premium appliances for the modern Liberian home',
      ctaText: 'View All Products',
      ctaLink: '/products'
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative max-w-7xl w-full mx-auto h-90 sm:h-96 md:h-[520px] lg:h-[560px] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <img 
              src={slide.backgroundImage}
              alt={slide.headline}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Light Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-4xl">
                  <h1
                    className={`text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold !text-white mb-4 leading-tight transform transition-all duration-1000 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: index === currentSlide ? '300ms' : '0ms' }}
                  >
                    {slide.headline}
                  </h1>
                  
                  <p
                    className={`text-base md:text-xl lg:text-2xl text-white mb-6 leading-relaxed max-w-3xl transform transition-all duration-1000 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: index === currentSlide ? '500ms' : '0ms' }}
                  >
                    {slide.subheadline}
                  </p>

                  <div
                    className={`flex flex-col sm:flex-row gap-3 transform transition-all duration-1000 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: index === currentSlide ? '700ms' : '0ms' }}
                  >
                    <a
                      href={slide.ctaLink}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-blue-700 transition-colors duration-200 text-center inline-block"
                    >
                      {slide.ctaText}
                    </a>
                    <a
                      href="/contact"
                      className="bg-white backdrop-blur-sm text-black px-6 py-3 rounded-lg font-bold text-base hover:bg-opacity-30 transition-colors duration-200 text-center inline-block border border-white border-opacity-30"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div
          className="h-full bg-blue-600 transition-all duration-100 ease-linear"
          style={{
            width: `${((Date.now() % 5000) / 5000) * 100}%`,
            animation: `progressBar 5s linear infinite`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;