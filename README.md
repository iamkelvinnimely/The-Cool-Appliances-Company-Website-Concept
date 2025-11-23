# The Cool Appliance Company - Business Website

A modern, responsive website for The Cool Appliance Company (LLC), a premium home appliance retailer in Monrovia, Liberia. Built with React, Vite, and Tailwind CSS.

> **Note**: This website is/was a concept project being pitched to The Cool Appliances Company to demonstrate potential web presence and design solutions.

## 🏢 About The Cool Appliance Company

The Cool Appliance Company is a premium home appliance retailer specializing in European-standard appliances for Liberian consumers. Located on Capitol Bye-Pass in Monrovia, we offer:

- **Premium Quality**: European-sourced appliances with award-winning designs
- **Local Service**: Professional installation, maintenance, and customer support
- **Expert Consultation**: Personalized recommendations for your home needs
- **Comprehensive Support**: From purchase to installation and beyond

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Product Catalog**: Comprehensive showcase of premium appliances
- **Contact Integration**: Multiple contact methods (phone, email, WhatsApp)
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Loading**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.9.1
- **Animations**: Framer Motion 12.23.12
- **Forms**: React Hook Form 7.62.0
- **Email**: EmailJS 4.4.1

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cool-appliance-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

## 🏗️ Build for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

3. **Deploy**
   The `dist/` folder contains the production-ready files that can be deployed to any static hosting service.

## 📁 Project Structure

```
cool-appliance-demo/
├── public/
│   ├── images/          # Product and company images
│   ├── favicon.svg      # Custom favicon
│   └── vite.svg         # Default Vite logo
├── src/
│   ├── components/      # Reusable React components
│   │   ├── common/      # Shared components
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   ├── data/           # Static data and content
│   │   └── products.js
│   ├── pages/          # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   └── Services.jsx
│   ├── styles/         # Additional stylesheets
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md          # This file
```

## 🎨 Brand Guidelines

### Colors
- **Primary Blue**: #2E5BBA
- **Primary White**: #FFFFFF
- **Primary Black**: #000000

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 900

### Design Principles
- Clean, modern aesthetic
- Professional and trustworthy
- Mobile-first responsive design
- Accessibility-focused

## 📱 Pages Overview

### Home Page
- Hero section with company tagline
- Value propositions
- Featured products showcase
- Call-to-action sections

### Products Page
- Complete product catalog
- Category filtering
- Search functionality
- Product cards with details

### About Page
- Company story and mission
- Why choose us section
- Showroom information
- Team and values

### Services Page
- Professional installation
- Warranty and protection
- Maintenance and repair
- Customer support process

### Contact Page
- Contact information
- Interactive contact form
- Business hours
- Location map

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Setup
The contact form uses EmailJS for email functionality. Configure your EmailJS service in the ContactForm component.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure redirects for SPA routing

### Other Static Hosts
Upload the contents of the `dist/` folder to any static hosting service.

## 📊 Performance

- **Bundle Size**: ~423KB (131KB gzipped)
- **Build Time**: ~7.5 seconds
- **Lighthouse Score**: Optimized for performance, accessibility, and SEO

## 📄 License

This project is proprietary to The Cool Appliance Company (LLC). All rights reserved.

## 📞 Contact

**The Cool Appliance Company (LLC)**
- **Phone**: +231-775600100
- **Email**: sales@thecoolappliancelib.com
- **Address**: Capitol Bye-Pass, Monrovia, Liberia
- **Facebook**: [The Cool Appliance Company](https://www.facebook.com/Thecaclib)

---

*Elevate your home in 2025 with modern appliances!*