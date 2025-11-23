import { useRef } from 'react';
import { useForm } from 'react-hook-form';
// import emailjs from '@emailjs/browser'; // TODO: Configure EmailJS

const ContactForm = () => {
  const form = useRef();
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // EmailJS configuration - placeholder values
      // const serviceId = 'YOUR_SERVICE_ID';
      // const templateId = 'YOUR_TEMPLATE_ID';
      // const publicKey = 'YOUR_PUBLIC_KEY';

      // For now, we'll simulate the email sending
      // In the next step, we'll replace this with actual EmailJS integration
      console.log('Form data to be sent:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      window.alert('Thank you for your inquiry! We will get back to you within 24 hours.');
      
      // Reset form
      reset();
      
    } catch (error) {
      console.error('Error sending email:', error);
      window.alert('Sorry, there was an error sending your message. Please try calling us directly at +231-775600100.');
    }
  };

  const subjectOptions = [
    'Product Inquiry',
    'Service Request', 
    'General Question',
    'Installation Support',
    'Warranty Information'
  ];

  return (
    <div className="bg-white rounded-lg p-5 md:p-8">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-primary-black mb-2">Send us a Message</h2>
        <p className="text-dark-gray text-sm md:text-base">
          Have a question about our products or services? We'd love to hear from you.
        </p>
      </div>

      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-black mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { 
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition-colors duration-200 ${
              errors.name ? 'border-error' : 'border-medium-gray focus:border-primary-blue'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-error">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-black mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition-colors duration-200 ${
              errors.email ? 'border-error' : 'border-medium-gray focus:border-primary-blue'
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-black mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              pattern: {
                value: /^[+]?[0-9\s-()]{10,}$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition-colors duration-200 ${
              errors.phone ? 'border-error' : 'border-medium-gray focus:border-primary-blue'
            }`}
            placeholder="Enter your phone number (optional)"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-primary-black mb-2">
            Subject *
          </label>
          <select
            id="subject"
            {...register('subject', { required: 'Please select a subject' })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition-colors duration-200 ${
              errors.subject ? 'border-error' : 'border-medium-gray focus:border-primary-blue'
            }`}
          >
            <option value="">Select a subject</option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-error">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary-black mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { 
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters'
              }
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue transition-colors duration-200 resize-vertical ${
              errors.message ? 'border-error' : 'border-medium-gray focus:border-primary-blue'
            }`}
            placeholder="Tell us about your inquiry or requirements..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 flex items-center justify-center ${
            isSubmitting 
              ? 'bg-accent-gray cursor-not-allowed' 
              : 'bg-primary-blue hover:bg-dark-blue'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      {/* Alternative Contact Methods */}
      {/* <div className="mt-6 pt-6 border-t border-light-gray">
        <p className="text-sm text-dark-gray text-center mb-4">
          Prefer to contact us directly?
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+231775600100"
            className="flex-1 bg-primary-blue text-primary-white text-center py-2 px-4 rounded-lg font-medium hover:bg-dark-blue transition-colors duration-200"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/231775600100"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
          >
            WhatsApp
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default ContactForm;
