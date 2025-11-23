import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import BusinessHeader from './BusinessHeader';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Business Header - hidden on small screens */}
      <div className="hidden md:block">
        <BusinessHeader />
      </div>
      
      {/* Main Header - Modern Centered Style */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-20">
            {/* Logo - Image Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center group">
                <img
                  src="/images/logo/logo.png"
                  alt="The Cool Appliance Company"
                  className="h-20 lg:h-24 w-auto group-hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            </div>

            {/* Center - Search Bar */}
            <div className="hidden lg:block flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for appliances..."
                  className="w-full px-6 py-3 pl-12 pr-6 text-sm border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Right Side - Navigation & Actions */}
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation - Vertical Style */}
              <nav className="hidden lg:flex space-x-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="relative text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-200 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                {/* Search Icon - Mobile */}
                <button className="lg:hidden text-gray-600 hover:text-primary-blue transition-colors duration-200 p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

              </div>
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-primary-blue focus:outline-none focus:text-primary-blue p-2"
                  aria-label="Toggle menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span
                      className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                      }`}
                    />
                    <span
                      className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <span
                      className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
    </header>

    {/* Mobile Navigation Menu */}
    {isOpen && (
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl z-50"
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="text-gray-600 hover:text-primary-blue focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 px-4">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={closeMenu}
                  className="block text-lg text-gray-700 hover:text-primary-blue transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Search */}
          <div className="p-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
              <svg className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    )}

    {/* Mobile Menu Overlay */}
    {isOpen && (
      <div
        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeMenu}
      />
    )}
    </>
  );
};

export default Header;
