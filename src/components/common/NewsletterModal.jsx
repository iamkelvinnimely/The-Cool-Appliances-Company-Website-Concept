import { useEffect, useState } from 'react';

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('Liberia');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem('newsletterSeen');
      if (!seen) {
        const timer = setTimeout(() => setIsOpen(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (_) {
      setIsOpen(true);
    }
  }, []);

  const close = () => {
    setIsOpen(false);
    try { localStorage.setItem('newsletterSeen', '1'); } catch (_) {}
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder submit - integrate with your email provider later
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setIsSubmitting(false);
    try { localStorage.setItem('newsletterSeen', '1'); } catch (_) {}
    setTimeout(() => setIsOpen(false), 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start md:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={close} />
      <div
        className="relative rounded-xl shadow-2xl max-w-xl w-full p-6 md:p-8 overflow-hidden"
        style={{
          backgroundImage: "url('https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-6/546154303_779134048037583_1699736868696877462_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGYXvFZCS8jDQG2QKmLO23LT3PmHO8ysphPc-Yc7zKymBqX4UevGXrE8MKGqsKAK-lgAB627Fzj7-jEWqgG_utD&_nc_ohc=h2mL5E0qIrMQ7kNvwHjiUKa&_nc_oc=AdlKmsJqG2WXpKD3-OYt_EmicAxMG2XuFaW5u36fasNkPfeBKZh4ifz5XCRntYwTPlw&_nc_zt=23&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=091LNA14GHz2yKRDFj2pFA&oh=00_AfbK0BvYsvXDV3eJ-C6jJSGIRa05jJ7DdtQs4B9mb4uMDw&oe=68CE0DFD')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Color overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative">
          {/* Close button at top-right */}
          <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); close(); }} aria-label="Close" className="absolute top-3 right-3 text-white/90 hover:text-white z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        {/* Top Logo */}
        <div className="flex justify-start mb-4 relative">
          <img src="/images/logo/logo.png" alt="The Cool Appliance Company" className="h-30 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
        </div>
        <div className="flex items-start justify-between mb-4 relative">
          <div>
            <h3 className="text-xl font-bold !text-white">Subscribe to our Newsletter</h3>
            <p className="text-sm text-white/90 mt-1">Get product updates, deals, and new arrivals.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 relative">
          {submitted && (
            <div className="bg-white/15 text-white text-sm rounded-lg p-3 border border-white/20">
              Thanks for subscribing!
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nlFirstName" className="block text-sm font-medium text-white mb-1">First Name</label>
              <input
                id="nlFirstName"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-primary-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="nlLastName" className="block text-sm font-medium text-white mb-1">Last Name</label>
              <input
                id="nlLastName"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-primary-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="nlCountry" className="block text-sm font-medium text-white mb-1">Country</label>
            <select
              id="nlCountry"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-primary-black focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-transparent"
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
            <label htmlFor="nlEmail" className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              id="nlEmail"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-white text-primary-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-transparent"
            />
          </div>

          <div className="pt-2">
            <button type="submit" disabled={isSubmitting} className={`w-full bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-dark-blue'}`}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          <p className="mt-3 text-xs text-white/90 leading-relaxed">
            By subscribing, you agree to receive occasional product updates, promotions, and news from The Cool Appliance Company. We respect your privacy and will only use your information for these purposes. Your details will not be sold or shared with third parties, and you can unsubscribe at any time.
          </p>
        </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;


