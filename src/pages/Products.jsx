import { useEffect, useState } from 'react';
import { getAllCategories, getAllProducts, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  // Trending carousel state
  const [trendingCurrentSlide, setTrendingCurrentSlide] = useState(0);
  const [trendingItemsPerSlide, setTrendingItemsPerSlide] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Get all categories for the filter buttons
  const categories = getAllCategories();
  const trendingProducts = getAllProducts();

  // Filter products based on selected category and search query
  const filteredProducts = () => {
    let products = [];
    
    // Get products based on selected category
    if (selectedCategory === 'all') {
      products = getAllProducts();
    } else {
      products = getProductsByCategory(selectedCategory);
    }

    // Filter by search query if provided
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.features.some(feature => feature.toLowerCase().includes(query))
      );
    }

    return products;
  };

  const products = filteredProducts();
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProducts = products.slice(startIndex, startIndex + pageSize);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Trending: responsive items per slide
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1280) return 4; // xl
      if (w >= 1024) return 4; // lg
      if (w >= 768) return 3;  // md
      if (w >= 640) return 2;  // sm
      return 2;                // base
    };
    const apply = () => setTrendingItemsPerSlide(calc());
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  // Trending: auto advance
  const trendingTotalSlides = Math.max(1, Math.ceil(trendingProducts.slice(0, 12).length / trendingItemsPerSlide));
  useEffect(() => {
    const id = setInterval(() => {
      setTrendingCurrentSlide((s) => (s + 1) % trendingTotalSlides);
    }, 5000);
    return () => clearInterval(id);
  }, [trendingTotalSlides]);

  return (
    <div className="min-h-screen"> {/* pt-20 offsets the sticky header */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Promo Banner */}
        <section className="relative overflow-hidden mb-6 md:mb-8 rounded-xl border border-gray-200">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2070&auto=format&fit=crop')`,
              filter: 'blur(6px)',
              transform: 'scale(1.05)'
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 px-4 py-8 md:px-10 md:py-14 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-1">
              <h2 className="text-xl md:text-3xl font-bold !text-white mb-2">Seasonal Appliance Deals</h2>
              <p className="text-white/90 max-w-2xl text-sm md:text-base">Upgrade your home with premium, energy‑efficient appliances. Fast delivery and professional installation available.</p>
            </div>
            <div className="flex-shrink-0">
              <a href="/contact" className="inline-block bg-primary-blue text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-dark-blue transition-colors duration-200">
                Get a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="mb-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center text-sm text-dark-gray">
              <li>
                <a href="/" className="text-primary-blue hover:underline">Home</a>
              </li>
              <li className="px-2 text-accent-gray">/</li>
              <li className="text-primary-black font-medium">Products</li>
            </ol>
          </nav>
        </section>
        

        {/* Filters toggle - mobile */}
        <div className="mb-4 lg:hidden">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm text-primary-black hover:bg-light-gray"
            aria-expanded={showFilters}
            aria-controls="mobile-filters"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M4 8h16M5 12h14M6 16h12M7 20h10" />
            </svg>
            Filters
          </button>
        </div>

        {/* Two Column Layout: Filters + Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Filter Sidebar - Left Column */}
          <div className={`lg:col-span-1 ${showFilters ? '' : 'hidden'} lg:block`} id="mobile-filters">
            <div className="bg-white rounded-lg p-4 md:p-6 md:sticky lg:top-24">
              {/* Search */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary-black mb-3">Search</h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search appliances..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-10 pr-4 border border-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-accent-gray"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary-black mb-3">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      className="mr-2 text-primary-blue"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                    />
                    <span className="text-sm text-dark-gray">All Products</span>
                  </label>
                  {categories.map((category) => (
                    <label key={category.slug} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        className="mr-2 text-primary-blue"
                        checked={selectedCategory === category.slug}
                        onChange={() => setSelectedCategory(category.slug)}
                      />
                      <span className="text-sm text-dark-gray">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                className="text-primary-blue text-sm font-medium hover:text-dark-blue hover:underline transition-colors duration-200"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Content - Right Column */}
          <div className="lg:col-span-3">
            {/* Results Summary */}
            <div className="mb-6">
              <p className="text-dark-gray text-sm md:text-base">
                {products.length} product{products.length !== 1 ? 's' : ''} found
                {selectedCategory !== 'all' && (
                  <span> in {categories.find(cat => cat.slug === selectedCategory)?.name}</span>
                )}
                {searchQuery && (
                  <span> for "{searchQuery}"</span>
                )}
              </p>
            </div>

            {/* Product Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-accent-gray mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
                </svg>
                <h3 className="text-xl font-semibold text-primary-black mb-2">No products found</h3>
                <p className="text-dark-gray mb-4">Please try a different search or browse all categories.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="bg-primary-blue text-primary-white px-6 py-2 rounded-lg font-medium hover:bg-dark-blue transition-colors duration-200"
                >
                  View All Products
                </button>
              </div>
            )}

            {/* Pagination */}
            {products.length > 0 && totalPages > 1 && (
              <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-md border text-sm ${currentPage === 1 ? 'text-accent-gray border-gray-200 cursor-not-allowed' : 'text-primary-blue border-gray-300 hover:bg-light-gray'}`}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    aria-current={currentPage === page ? 'page' : undefined}
                    className={`min-w-9 px-3 py-2 rounded-md border text-sm ${
                      currentPage === page
                        ? 'bg-primary-blue text-white border-primary-blue'
                        : 'text-primary-black border-gray-300 hover:bg-light-gray'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-md border text-sm ${currentPage === totalPages ? 'text-accent-gray border-gray-200 cursor-not-allowed' : 'text-primary-blue border-gray-300 hover:bg-light-gray'}`}
                >
                  Next
                </button>
              </nav>
            )}

            {/* Call to Action Section */}
            {products.length > 0 && (
              <div className="mt-12 text-center bg-light-gray rounded-lg p-8">
                <h2 className="text-2xl font-bold text-primary-black mb-4">
                  Can't find what you're looking for?
                </h2>
                <p className="text-dark-gray mb-6 max-w-2xl mx-auto">
                  We have access to a wide range of premium appliances. Contact us directly to discuss your specific needs and get personalized recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+231775600100"
                    className="bg-primary-blue text-primary-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-blue transition-colors duration-200"
                  >
                    Call +231-775600100
                  </a>
                  <a
                    href="/contact"
                    className="bg-primary-blue text-primary-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-blue transition-colors duration-200"
                  >
                    Send Inquiry
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trending Now - Horizontal Scroll */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-primary-black">Trending Now</h3>
            <a href="#" className="text-primary-blue text-sm hover:underline">View more</a>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${trendingCurrentSlide * 100}%)` }}
              >
                {Array.from({ length: trendingTotalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                      {trendingProducts
                        .slice(0, 12)
                        .slice(slideIndex * trendingItemsPerSlide, (slideIndex + 1) * trendingItemsPerSlide)
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
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary-blue text-white p-2 rounded-full hover:bg-dark-blue transition-colors duration-200"
              onClick={() => setTrendingCurrentSlide((s) => (s - 1 + trendingTotalSlides) % trendingTotalSlides)}
              aria-label="Previous trending slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary-blue text-white p-2 rounded-full hover:bg-dark-blue transition-colors duration-200"
              onClick={() => setTrendingCurrentSlide((s) => (s + 1) % trendingTotalSlides)}
              aria-label="Next trending slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: trendingTotalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => setTrendingCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full ${trendingCurrentSlide === i ? 'bg-primary-blue' : 'bg-primary-blue/50 hover:bg-primary-blue'} transition-colors`}
                aria-label={`Go to trending slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Shop by Category */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-primary-black mb-4">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="bg-primary-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-primary-black">{category.name}</h4>
                    <p className="text-xs text-dark-gray">{category.productCount} item{category.productCount !== 1 ? 's' : ''}</p>
                  </div>
                  <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
