'use client';

import { motion } from 'framer-motion';
import { BookOpen, Heart, Leaf } from 'lucide-react';

export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 to-green-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <BookOpen className="w-5 h-5 text-pink-600" />
              <span className="text-sm font-medium text-gray-700 font-body">Expert Insights</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-heading">
            Women's Health
            <span className="block text-pink-600">Blog</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed font-body">
            Discover evidence-based insights on hormonal balance, natural remedies, and holistic approaches 
            to women's wellness from Dr. Salma's expertise in naturopathic medicine.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="font-body">Hormonal Health</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="w-4 h-4 text-green-500" />
              <span className="font-body">Natural Remedies</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span className="font-body">Expert Guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
    </section>
  );
} 