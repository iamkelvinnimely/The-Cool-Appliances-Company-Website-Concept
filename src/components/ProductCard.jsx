// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';

// Helper function to get category display name
const getCategoryName = (categorySlug) => {
  const categoryMap = {
    kitchen: 'Kitchen Appliances',
    laundry: 'Laundry Equipment',
    foodProcessing: 'Food Processing',
    smallAppliances: 'Small Appliances'
  };
  return categoryMap[categorySlug] || 'Appliances';
};

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = useMemo(() => {
    const list = Array.isArray(product?.images)
      ? product.images
      : (product?.image ? [product.image] : []);
    return list.filter(Boolean);
  }, [product]);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover="hover"
      onClick={() => { window.location.href = `/products/${product.id}`; }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = `/products/${product.id}`;
        }
      }}
    >
      {/* Product Image */}
      <div className="h-48 bg-light-gray flex items-center justify-center relative overflow-hidden group">
        {product.image ? (
          <motion.img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
            variants={{
              hover: {
                scale: 1.15,
                filter: "brightness(1.1)"
              }
            }}
            transition={{ duration: 0.3 }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="text-center" style={{ display: product.image ? 'none' : 'flex' }}>
          <svg className="w-16 h-16 text-accent-gray mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-accent-gray text-sm font-medium">Image Coming Soon</p>
        </div>

        {/* Vertical Action Menu - Appears on Hover */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-2">
            {/* Share Button */}
            <motion.button
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Share Product"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </motion.button>

            {/* View Button */}
            <motion.button
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Quick View"
              onClick={(e) => { e.stopPropagation(); openModal(); }}
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </motion.button>

            {/* Wishlist Button */}
            <motion.button
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Add to Wishlist"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="!text-sm font-semibold text-primary-black mb-1 line-clamp-2 h-8 flex items-center group-hover:underline">
          {product.name}
        </h3>

        {/* Product Category */}
        <p className="text-primary-blue text-xs font-medium mb-3">
          {getCategoryName(product.category)}
        </p>

        {/* Read More Link */}
        <motion.a
          href={`/products/${product.id}`}
          onClick={(e) => e.stopPropagation()}
          className="text-primary-blue text-sm font-medium hover:text-dark-blue hover:underline group-hover:underline transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
        </motion.a>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row h-full relative">
                {/* Close Button - Inside Modal */}
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  title="Close"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Product Images - Left Side with carousel */}
                <div className="lg:w-1/2 bg-light-gray flex flex-col">
                  <div className="relative h-64 lg:h-96 overflow-hidden flex items-center justify-center">
                    {images.length > 0 ? (
                      <img
                        key={images[activeIndex]}
                        src={images[activeIndex]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="text-center py-16">
                        <svg className="w-20 h-20 text-accent-gray mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-accent-gray text-lg font-medium">Image Coming Soon</p>
                      </div>
                    )}

                    {images.length > 1 && (
                      <>
                        <button
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                          onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => (i - 1 + images.length) % images.length); }}
                          aria-label="Previous image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                          onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => (i + 1) % images.length); }}
                          aria-label="Next image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {images.length > 1 && (
                    <div className="p-2 flex gap-2 overflow-x-auto">
                      {images.map((src, idx) => (
                        <button
                          key={src + idx}
                          className={`relative w-16 h-12 rounded-md overflow-hidden border ${idx === activeIndex ? 'border-primary-blue' : 'border-gray-200'} flex-shrink-0`}
                          onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                          aria-label={`View image ${idx + 1}`}
                        >
                          <img src={src} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Information - Right Side */}
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">

                  {/* Product Details */}
                  <div className="space-y-4">
                    {/* Category */}
                    <div className="text-primary-blue text-sm font-medium">
                      {getCategoryName(product.category)}
                    </div>

                    {/* Product Name */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary-black leading-tight">
                      {product.name}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed">
                      {product.description || "Premium quality appliance designed to meet your household needs. Built with durability and efficiency in mind."}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-primary-black">Key Features:</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <svg className="w-4 h-4 text-primary-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          High-quality materials
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 text-primary-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Energy efficient
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 text-primary-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Easy to use
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 text-primary-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Warranty included
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <motion.a
                      href={`/products/${product.id}`}
                      className="flex-1 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-dark-blue transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read More
                    </motion.a>
                    <motion.button
                      className="flex-1 border-2 border-primary-blue text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Wishlist
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductCard;
