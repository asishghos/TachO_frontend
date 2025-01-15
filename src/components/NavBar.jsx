import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const menuItems = [
        {
            title: 'Services',
            submenu: [
                { title: 'Services', items: ['AI & Analytics', 'Cloud Solutions', 'Consulting', 'Digital Transformation'] },
            ]
        },
        {
            title: 'About Us',
            submenu: [
                { title: 'Company', items: ['About Us', 'Leadership', 'Innovation', 'Sustainability'] },
            ]
        },
        {
            title: 'BLog',
            submenu: [
                { title: 'Thought Leadership', items: ['Research', 'Case Studies', 'White Papers', 'Blog'] }
            ]
        }
    ];

    return (
        <nav className="bg-gray-900 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-white">TechNova</span>
                    </Link>

                    {/* Main Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative group"
                                onMouseEnter={() => setActiveMenu(item.title)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <button className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2">
                                    <span>{item.title}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {activeMenu === item.title && (
                                    <div className="absolute top-full left-0 w-screen bg-gray-800 border-t border-gray-700 shadow-xl">
                                        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-8">
                                            {item.submenu.map((section) => (
                                                <div key={section.title}>
                                                    <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                                                    <ul className="space-y-2">
                                                        {section.items.map((subitem) => (
                                                            <li key={subitem}>
                                                                <Link to="#" className="text-gray-400 hover:text-blue-400 block">
                                                                    {subitem}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side Items */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-300 hover:text-white">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export { NavBar };