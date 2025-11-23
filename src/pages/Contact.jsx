import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20"> {/* pt-20 offsets the sticky header */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-black mb-3 md:mb-4">Contact Us</h1>
          <p className="text-dark-gray text-sm md:text-lg max-w-2xl mx-auto">
            Ready to elevate your home with premium appliances? Get in touch with our team for personalized service and expert recommendations.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="space-y-6 md:space-y-8">
            {/* Contact Details */}
            <div className="bg-light-gray rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-primary-black mb-4 md:mb-6">Get in Touch</h2>
              
              <div className="space-y-5 md:space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className=" p-2 md:p-3 rounded-lg">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary-black mb-1">Phone</h3>
                    <a 
                      href="tel:+231775600100" 
                      className="text-primary-blue hover:text-dark-blue transition-colors duration-200 text-base md:text-lg font-medium"
                    >
                      +231-775600100
                    </a>
                    <p className="text-dark-gray text-sm mt-1">Available Monday - Friday, 8AM - 6PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className=" p-2 md:p-3 rounded-lg">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary-black mb-1">Email</h3>
                    <a 
                      href="mailto:sales@thecoolappliancelib.com" 
                      className="text-primary-blue hover:text-dark-blue transition-colors duration-200"
                    >
                      sales@thecoolappliancelib.com
                    </a>
                    <p className="text-dark-gray text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className=" p-2 md:p-3 rounded-lg">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary-black mb-1">Address</h3>
                    <p className="text-dark-gray text-sm md:text-base">
                      Capitol Bye-Pass<br />
                      Monrovia, Liberia
                    </p>
                    <p className="text-dark-gray text-sm mt-1">Major commercial corridor in Monrovia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3 md:space-y-4">
              <a
                href="tel:+231775600100"
                className="block w-full bg-primary-blue text-primary-white text-center py-3 md:py-4 px-5 md:px-6 rounded-lg font-bold text-base md:text-lg hover:bg-dark-blue transition-colors duration-200"
              >
                📞 Call Now: +231-775600100
              </a>
              
              <a
                href="https://wa.me/231775600100"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-green-500 text-center py-3 md:py-4 px-5 md:px-6 rounded-lg font-medium text-base md:text-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-light-gray rounded-lg p-4">
              <h3 className="text-lg font-semibold text-primary-black mb-4">Find Us</h3>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.5!2d-10.8!3d6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJOIDEwwrA0OCcwMC4wIlc!5e0!3m2!1sen!2slr!4v1234567890123!5m2!1sen!2slr"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Cool Appliance Company Location"
                ></iframe>
              </div>
              <p className="text-sm text-dark-gray mt-2 text-center">
                Located on Capitol Bye-Pass, Monrovia's major commercial corridor
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-10 md:mt-12 bg-gray-100 text-primary-black rounded-lg p-6 md:p-10 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Business Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div>
                <h3 className="font-semibold mb-2">Monday - Friday</h3>
                <p className='text-light-blue'>8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Saturday</h3>
                <p className='text-light-blue'>9:00 AM - 4:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sunday</h3>
                <p className='text-light-blue'>Closed</p>
              </div>
            </div>
            <p className="mt-6 md:mt-8 text-light-blue">
              Emergency service calls available outside business hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
