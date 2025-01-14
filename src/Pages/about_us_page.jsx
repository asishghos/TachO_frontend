import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Users, Cloud, Code, Brain, Database, Mobile, Shield } from 'lucide-react';

// Team members data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "20+ years of technology leadership experience",
    image: "/api/placeholder/300/300"
  },
  {
    name: "David Chen",
    role: "CTO",
    bio: "Former Google engineer, AI/ML expert",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Maria Rodriguez",
    role: "Head of Design",
    bio: "Award-winning UX designer",
    image: "/api/placeholder/300/300"
  },
  {
    name: "James Wilson",
    role: "Lead Developer",
    bio: "Full-stack developer with 10+ years experience",
    image: "/api/placeholder/300/300"
  }
];

// About Us Page Component
const AboutUsPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    {/* About Hero */}
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechNova</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Building the future of technology since 2015
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              To empower businesses with innovative technology solutions that drive growth and success in the digital age.
            </p>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              To be the global leader in delivering transformative technology solutions that shape the future of industries worldwide.
            </p>
          </div>
          <div className="relative">
            <img
              src="/api/placeholder/600/400"
              alt="TechNova Office"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);


export {AboutUsPage };