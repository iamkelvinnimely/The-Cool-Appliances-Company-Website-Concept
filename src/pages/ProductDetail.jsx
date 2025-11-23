import { useParams, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { getProductById } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const images = useMemo(() => {
    const list = Array.isArray(product?.images)
      ? product.images
      : (product?.image ? [product.image] : []);
    return list.filter(Boolean);
  }, [product]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [country, setCountry] = useState('Liberia');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('50% 50%');

  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [sendSuccess, setSendSuccess] = useState(false);

  const submitQuote = async (e) => {
    e.preventDefault();
    setSendError('');
    setSendSuccess(false);
    setIsSending(true);

    try {
      const templateParams = {
        product_name: product.name,
        quantity: String(quantity),
        country: country || 'N/A',
        user_name: fullName,
        user_email: email,
        user_phone: phone || 'N/A',
        message: message || '',
        to_email: 'moviewatch00231@gmail.com'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSendSuccess(true);
      // optionally close modal after short delay
      setTimeout(() => {
        setIsQuoteOpen(false);
        setFullName('');
        setEmail('');
        setPhone('');
        setQuantity(1);
        setCountry('Liberia');
        setMessage('');
      }, 1200);
    } catch (err) {
      setSendError('Failed to send your request. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-primary-black mb-2">Product not found</h1>
          <p className="text-dark-gray mb-6">The item you are looking for may have been moved or removed.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-blue transition-colors duration-200"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center text-sm text-dark-gray">
            <li>
              <a href="/" className="text-primary-blue hover:underline">Home</a>
            </li>
            <li className="px-2 text-accent-gray">/</li>
            <li>
              <a href="/products" className="text-primary-blue hover:underline">Products</a>
            </li>
            <li className="px-2 text-accent-gray">/</li>
            <li className="text-primary-black font-medium line-clamp-1">{product.name}</li>
          </ol>
        </nav>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Images Gallery */}
          <div>
            <div
              className="bg-light-gray rounded-lg overflow-hidden h-80 md:h-[420px] lg:h-[500px] flex items-center justify-center relative"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setZoomOrigin(`${x}% ${y}%`);
              }}
              onClick={() => setIsZoomed((z) => !z)}
            >
              {images.length > 0 ? (
                // Main image
                <img
                  key={images[activeIndex]}
                  src={images[activeIndex]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-200 ease-out ${isZoomed ? 'scale-150' : 'scale-100'}`}
                  style={{ transformOrigin: zoomOrigin }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="text-center py-16">
                  <svg className="w-20 h-20 text-accent-gray mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-accent-gray">Image Coming Soon</p>
                </div>
              )}

              {/* Prev/Next controls */}
              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                    onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                    onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto">
                {images.map((src, idx) => (
                  <button
                    key={src + idx}
                    className={`relative w-16 h-12 md:w-20 md:h-16 rounded-md overflow-hidden border ${idx === activeIndex ? 'border-primary-blue' : 'border-gray-200'} flex-shrink-0`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img src={src} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-primary-black mb-2">{product.name}</h1>
            <p className="text-primary-blue text-sm md:text-base font-medium mb-3 md:mb-4 capitalize">{product.category}</p>
            <p className="text-dark-gray text-sm md:text-base mb-5 md:mb-6">
              {product.description || 'Premium quality appliance designed to meet your household needs. Built with durability and efficiency in mind.'}
            </p>

            {/* Features */}
            {Array.isArray(product.features) && product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-base md:text-lg font-semibold text-primary-black mb-2">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm md:text-base">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-4 h-4 text-primary-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={openQuote}
                className="bg-primary-blue text-white px-5 md:px-6 py-3 rounded-lg font-semibold text-center hover:bg-dark-blue transition-colors duration-200"
              >
                Get a Quote
              </button>
              <button
                onClick={() => navigate(-1)}
                className="border-2 border-primary-blue text-primary-blue px-5 md:px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-200"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Quote Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeQuote} />
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 md:p-8 max-h-[95vh] overflow-y-auto">
            {/* Watermark Logo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage: "url('/images/logo/logo.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '300px 300px'
              }}
            />
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-primary-black">Request a Quote</h3>
              <button onClick={closeQuote} aria-label="Close" className="text-gray-500 hover:text-primary-black">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={submitQuote} className="space-y-4">
              {/* Attached Product Name (hidden but shown read-only above) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                <input type="text" readOnly value={product.name} className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700" />
                <input type="hidden" name="productName" value={product.name} />
              </div>
              {sendSuccess && (
                <div className="bg-green-50 text-green-700 text-sm rounded-lg p-3 border border-green-200">
                  Your request has been sent successfully.
                </div>
              )}
              {sendError && (
                <div className="bg-red-50 text-red-700 text-sm rounded-lg p-3 border border-red-200">
                  {sendError}
                </div>
              )}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="e.g. +231-775600100"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                >
                  <option value="Liberia">🇱🇷 Liberia</option>
                  <option value="Sierra Leone">🇸🇱 Sierra Leone</option>
                  <option value="Ghana">🇬🇭 Ghana</option>
                  <option value="Nigeria">🇳🇬 Nigeria</option>
                  <option value="Ivory Coast">🇨🇮 Ivory Coast</option>
                  <option value="Other">🌍 Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input
                  id="quantity"
                  type="number"
                  min={1}
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value || '1', 10))}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Add any extra details or questions here..."
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={isSending} className={`flex-1 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-dark-blue'}`}>
                  {isSending ? 'Sending...' : 'Send Request'}
                </button>
                <button type="button" onClick={closeQuote} className="flex-1 border-2 border-primary-blue text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-200">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;


