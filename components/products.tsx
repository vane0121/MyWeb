'use client';

import { Package, PenTool, Zap } from 'lucide-react';

const products = [
  {
    icon: Zap,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices. Scalable, performant, and user-centric design.',
    price: 'Custom',
    features: ['React/Next.js', 'Full Stack', 'Responsive Design', 'SEO Optimized'],
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that engage users and drive conversions. Design systems and component libraries included.',
    price: 'Custom',
    features: ['Figma Designs', 'Prototypes', 'Design Systems', 'User Research'],
  },
  {
    icon: Package,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs built for scale. Secure, documented, and production-ready solutions.',
    price: 'Custom',
    features: ['REST/GraphQL', 'Authentication', 'Database Design', 'API Documentation'],
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. Choose from our core services or create a custom package.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl animate-fade-in-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                  <IconComponent className="text-gray-900 group-hover:text-white transition-colors duration-300" size={28} />
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Custom Solutions</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Need something specific? We offer custom development services tailored to your unique business requirements. Let&apos;s discuss your project.
          </p>
          <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
