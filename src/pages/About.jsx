const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary-blue to-light-blue text-primary-white py-14 md:py-20 relative overflow-hidden">
      <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://scontent.fmlw2-1.fna.fbcdn.net/v/t39.30808-6/481191587_632912765993046_2940470048284761646_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHytYvS0mZMDPPPKCZtrWNqVqzgwyRept9WrODDJF6m32bONpU1KW-Ggz2YxaKPWpCNDYCf7Rz43Ro9HIejl8Ae&_nc_ohc=KSyDF6PEf08Q7kNvwE2UDgZ&_nc_oc=Adl8wEzc_hUiFBYZZMa8LGUTX-WxWrHQ4xZ_7LuPjMCZMyF4Bq_63NcqdrG-M0-fE3U&_nc_zt=23&_nc_ht=scontent.fmlw2-1.fna&_nc_gid=DA6BRyWsg4-YtUemIfj0Yg&oh=00_AfamWzOpO5Oq-hL3Z7CO_uISIoaSQI2VQdHJKdxoVuvgPQ&oe=68CB6841')`,
            filter: 'blur(3px)',
            transform: 'scale(1.1)'
          }}
        ></div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="container  relative z-10 mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl !text-primary-white font-bold mb-4 md:mb-6">
            About The Cool Appliance Company
          </h1>
          <p className="text-base md:text-xl !text-light-white max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing premium European-standard appliances to Liberian homes, 
            combining world-class quality with exceptional local service.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 bg-primary-white max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="order-2 lg:order-1">
              {/* <div className="bg-light-gray rounded-2xl p-12 text-center">
                <svg className="w-32 h-32 text-primary-blue mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-2xl font-bold text-primary-black mb-2">Our Story</h3>
                <p className="text-dark-gray">Company history image coming soon</p>
              </div> */}
              <div className=" relative flex-shrink-0">
                <img
                  src="https://scontent.fmlw2-1.fna.fbcdn.net/v/t39.30808-6/480841113_630306729586983_3682610035530801039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF2m42eC2iiVBZqodClHYoCNSi4itOWIcQ1KLiK05YhxIfk0rS1vnVt1wFgTvL8crStOlBxuGjYTezBVkbACo0-&_nc_ohc=aRTd80FZK8AQ7kNvwFcshKs&_nc_oc=AdnMCH2ZEar93iv7p9VwvvdbMNWIkDrHpoE_CHcXPP0EK5Ll4b9F524B1y--G_LLQEs&_nc_zt=23&_nc_ht=scontent.fmlw2-1.fna&_nc_gid=pX84j-czyAmSHPTB0SpOVg&oh=00_Afbd9n-fDC8_iszWwFnsB6V6wW6ipNoSiQS-2-up6kLkVA&oe=68CB48A6"
                  alt="GREE Air Conditioner - Your All-Season Companion"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-4xl font-bold text-primary-black mb-4 md:mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-dark-gray leading-relaxed">
                <p className="text-base md:text-lg">
                  Founded with a vision to transform homes across Liberia, The Cool Appliance Company 
                  has established itself as the premier destination for premium home appliances. 
                  Our journey began with a simple yet powerful belief: every Liberian family deserves 
                  access to world-class appliances that enhance their daily lives.
                </p>
                <p className="text-base md:text-lg">
                  Since our inception, we have carefully curated a selection of award-winning appliances 
                  from Europe's most trusted manufacturers. Our strategic location on Capitol Bye-Pass 
                  in Monrovia positions us at the heart of Liberia's commercial activity, making 
                  premium appliances accessible to families throughout the region.
                </p>
                <p className="text-base md:text-lg">
                  What sets us apart is our unwavering commitment to quality and service. We don't just 
                  sell appliances – we provide complete solutions, from expert consultation and 
                  professional installation to ongoing maintenance and support. Our team of local 
                  experts understands the unique needs of Liberian households and is dedicated to 
                  ensuring your complete satisfaction.
                </p>
                <p className="text-base md:text-lg">
                  Today, we're proud to be opening our doors to serve the community, bringing 
                  European standards of quality and reliability to homes across Liberia. Our 
                  mission is to elevate your home in 2025 and beyond with appliances that 
                  combine cutting-edge technology with timeless design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
              <div className="text-center mb-6">
                <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-black mb-3 md:mb-4">Our Mission</h3>
              </div>
              <p className="text-dark-gray leading-relaxed text-center text-sm md:text-base">
                To provide Liberian families with access to premium European-standard appliances 
                that enhance their quality of life, backed by exceptional local service and 
                unwavering commitment to customer satisfaction. We believe every home deserves 
                the best in modern appliance technology.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
              <div className="text-center mb-6">
                <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-black mb-3 md:mb-4">Our Vision</h3>
              </div>
              <p className="text-dark-gray leading-relaxed text-center text-sm md:text-base">
                To become Liberia's most trusted and respected appliance retailer, known for 
                our commitment to quality, innovation, and customer care. We envision a future 
                where every Liberian home is equipped with reliable, efficient appliances that 
                make daily life more comfortable and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Our Values Section */}
      <section className="py-12 md:py-16 bg-primary-white max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-black mb-3 md:mb-4">
              Why Choose The Cool Appliance Company?
            </h2>
            <p className="text-dark-gray text-sm md:text-lg max-w-2xl mx-auto">
              We combine European quality standards with local expertise to deliver an unmatched 
              appliance shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Premium Quality */}
            <div className="text-center bg-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-black mb-2 md:mb-3">Premium Quality</h3>
              <p className="text-dark-gray text-sm leading-relaxed">
                European Standards, Local Service. Every appliance meets the highest European 
                quality standards while being supported by our local expertise.
              </p>
            </div>

            {/* Award-Winning Products */}
            <div className="text-center bg-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-black mb-2 md:mb-3">Award-Winning Products</h3>
              <p className="text-dark-gray text-sm leading-relaxed">
                Curated selection of trusted brands. We carefully select only the most 
                reliable and innovative appliances from Europe's leading manufacturers.
              </p>
            </div>

            {/* Expert Support */}
            <div className="text-center bg-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-black mb-2 md:mb-3">Expert Support</h3>
              <p className="text-dark-gray text-sm leading-relaxed">
                Installation, maintenance, and local customer care. Our trained technicians 
                provide professional installation and ongoing support services.
              </p>
            </div>

            {/* Customer Commitment */}
            <div className="text-center bg-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-black mb-2 md:mb-3">Customer Commitment</h3>
              <p className="text-dark-gray text-sm leading-relaxed">
                Your satisfaction is our priority. We stand behind every product with 
                comprehensive warranties and dedicated customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Showroom Section */}
      <section className="py-12 md:py-16 bg-light-gray">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Showroom Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-6">
                Visit Our Showroom
              </h2>
              <div className="space-y-6 text-dark-gray leading-relaxed">
                <p className="text-lg">
                  Experience our premium appliances firsthand at our showroom located on 
                  Capitol Bye-Pass in Monrovia. Our spacious display area allows you to 
                  see, touch, and experience the quality and features of our appliances 
                  before making your decision.
                </p>
                <p>
                  Our knowledgeable staff is on hand to provide personalized consultations, 
                  answer your questions, and help you find the perfect appliances for your 
                  home. Whether you're looking for kitchen appliances, laundry equipment, 
                  or small appliances, our showroom showcases the full range of our 
                  premium collection.
                </p>
                <div className="bg-primary-blue text-primary-white p-5 md:p-6 rounded-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 !text-primary-white">Showroom Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm md:text-base"><strong>Location:</strong> Capitol Bye-Pass, Monrovia, Liberia</p>
                    <p className="text-sm md:text-base"><strong>Hours:</strong> Monday - Friday: 8AM - 6PM, Saturday: 9AM - 4PM</p>
                    <p className="text-sm md:text-base"><strong>Services:</strong> Product demonstrations, expert consultations, installation planning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Showroom Image Placeholder */}
            <div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-6/481118014_635974342353555_8629440063101566686_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF1WHiFyvY92Yctzfh9ckCN7F5nupuOrVnsXme6m46tWbPWExsGNgseWCVxKPSTnqsugbgHO9mMk_9QgTptlZz3&_nc_ohc=G1_kEunufjAQ7kNvwFIEeZG&_nc_oc=Adm6rKCQ1np5XCew7x9a9p2_yr83bk_OD8nGog3n7WrYrzSc7U1kwG7ED7ZkMH6wBCY&_nc_zt=23&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=40ItBdSDo3rUW7bep0QzUQ&oh=00_AfbPaX7pUGvdioXEs_D9NKaMkNWpE5nRgGAY-6w2aXY46A&oe=68CDDAAE"
                  alt="GREE Air Conditioner - Your All-Season Companion"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
       className="py-14 md:py-20 bg-primary-blue relative overflow-hidden text-primary-white"
       >
       <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url('https://scontent.fmlw1-2.fna.fbcdn.net/v/t39.30808-6/481142792_635980142352975_4858132950639050660_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH8fU6NDdCnHblMyys8zMmLz6YE4YNjwPLPpgThg2PA8nydFbgGF9T8MM4PgA2v-mmTE6gv0XXQpXEI-wigJ-75&_nc_ohc=WBaPyQ_vBlQQ7kNvwHHb36n&_nc_oc=AdlerqLTP_5NvSChsI6pDdjIJ3cVmysYKxKf_eKmr-TKUt7sD3sjfRmEGz7A1BQeQLM&_nc_zt=23&_nc_ht=scontent.fmlw1-2.fna&_nc_gid=MHYHu7CavD2s2tqKvKNyNw&oh=00_AfZ2V-4nWDxVQrzA5x12hNnfeKKMmKQMH40QPXCnUdxecQ&oe=68CE158A')`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          }}
        ></div>

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="!text-2xl md:!text-3xl !text-primary-white w-full md:w-140 py-3 md:py-4 mx-auto bg-primary-blue font-bold mb-4 md:mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-base md:text-xl !text-white mb-6 md:mb-8 max-w-2xl mx-auto">
            Visit our showroom or contact us today to discover how we can help elevate your home 
            with premium European-standard appliances.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-white text-primary-blue px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-light-gray transition-colors duration-200"
            >
              Contact Us Today
            </a>
            <a
              href="/products"
              className="bg-primary-blue text-primary-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-dark-blue transition-colors duration-200"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
