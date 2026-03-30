'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/project-1.jpg',
  },
  {
    id: 2,
    title: 'Corporate Portfolio',
    category: 'portfolio',
    description: 'Stunning portfolio website for a creative agency',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    image: '/project-2.jpg',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'web',
    description: 'Advanced analytics dashboard with real-time data visualization',
    tags: ['React', 'Express', 'PostgreSQL'],
    image: '/project-3.jpg',
  },
  {
    id: 4,
    title: 'Online Store',
    category: 'ecommerce',
    description: 'Multi-vendor marketplace with payment integration',
    tags: ['Next.js', 'Stripe', 'Supabase'],
    image: '/project-4.jpg',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'portfolio',
    description: 'Interactive developer portfolio with blog functionality',
    tags: ['Next.js', 'MDX', 'Framer Motion'],
    image: '/project-5.jpg',
  },
  {
    id: 6,
    title: 'Mobile App Backend',
    category: 'web',
    description: 'Scalable API backend for iOS/Android applications',
    tags: ['Node.js', 'AWS', 'GraphQL'],
    image: '/project-6.jpg',
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'portfolio', 'ecommerce'];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                activeFilter === filter
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl animate-fade-in-up hover:scale-105"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Button */}
                <button className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all duration-200">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
