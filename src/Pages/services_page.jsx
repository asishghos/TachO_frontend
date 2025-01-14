import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Users, Cloud, Code, Brain, Database, Mobile, Shield } from 'lucide-react';

// Service data
const services = [
  {
    title: "Web Development",
    icon: Code,
    description: "Custom web applications built with cutting-edge technologies",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "CMS Development"
    ]
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    description: "Scalable and secure cloud infrastructure services",
    features: [
      "Cloud Migration",
      "DevOps Automation",
      "24/7 Monitoring",
      "Disaster Recovery"
    ]
  },
  {
    title: "AI/ML Services",
    icon: Brain,
    description: "Intelligent solutions powered by machine learning",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Deep Learning Models"
    ]
  },
  {
    title: "Database Management",
    icon: Database,
    description: "Robust database solutions for enterprise needs",
    features: [
      "Database Design",
      "Performance Optimization",
      "Data Migration",
      "Backup Solutions"
    ]
  },
  {
    title: "Mobile Development",
    icon: Mobile,
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS Development",
      "Android Development",
      "React Native Apps",
      "Mobile UI/UX"
    ]
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    description: "Comprehensive security solutions for your business",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Support",
      "Security Training"
    ]
  }
];
// Services Page Component
const ServicesPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    {/* Services Hero */}
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Comprehensive technology solutions tailored to your business needs
        </p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <ArrowRight size={16} className="text-indigo-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);




export { ServicesPage};