import { motion } from 'framer-motion';

const PromotionalBanner = ({ 
  image, 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  backgroundColor = "bg-gradient-to-r from-primary-blue to-dark-blue",
  textColor = "text-white"
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg ${backgroundColor}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className={`${textColor} space-y-4`}>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg md:text-xl opacity-90">
                  {subtitle}
                </p>
              )}
              {ctaText && ctaLink && (
                <motion.a
                  href={ctaLink}
                  className="inline-block bg-white text-primary-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {ctaText}
                </motion.a>
              )}
            </div>
            
            {/* Image */}
            {image && (
              <div className="relative">
                <motion.img
                  src={image}
                  alt={title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
    </motion.div>
  );
};

export default PromotionalBanner;
