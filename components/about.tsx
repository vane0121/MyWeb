'use client';

import { Code2, Smartphone, Zap, Shield } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Scalable code structure',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive by design',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized for speed',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level protection',
  },
];

const expertise = [
  { name: 'React & TypeScript', level: 95 },
  { name: 'Node.js & APIs', level: 90 },
  { name: 'Cloud Architecture', level: 85 },
  { name: 'DevOps & CI/CD', level: 80 },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About CodeNessa</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build enterprise-grade digital solutions that scale with your business
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Enterprise Digital Transformation</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              At CodeNessa, we specialize in building scalable web applications that drive business growth. Our team combines technical expertise with strategic thinking to deliver solutions that exceed expectations.
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed text-lg">
              From Fortune 500 companies to innovative startups, we partner with organizations to create digital experiences that engage users and deliver measurable ROI.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-gray-900" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{skill.title}</h4>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="animate-slide-in-right">
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Expertise</h3>
              <div className="space-y-8">
                {expertise.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-gray-900 font-semibold">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-gray-900 to-gray-800 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
