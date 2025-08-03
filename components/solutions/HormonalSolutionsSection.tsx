'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const HormonalSolutionsSection = () => {
  const router = useRouter()
  
  const solutions = [
    {
      id: 1,
      title: "PCOS Management",
      image: "/images/banner-6.png",
      description: "Finally understand your body's signals and break free from the weight struggle",
      features: [
        "Comprehensive assessment and natural protocols",
        "Medical expertise for complex lab interpretation"
      ],
      cta: "PCOS Solutions"
    },
    {
      id: 2,
      title: "Hashimoto's Thyroiditis Management",
      image: "/images/banner-7.png",
      description: "End the exhaustion and brain fog - feel in control of your body again",
      features: [
        "In-depth thyroid function analysis",
        "Integrative approach beyond medication"
      ],
      cta: "Discover Thyroid Solutions"
    },
    {
      id: 3,
      title: "Hormonal Acne Treatment",
      image: "/images/banner-8.png",
      description: "See your true beauty shine through - feel comfortable in your own skin",
      features: [
        "Root cause hormonal trigger identification",
        "Personalized skin and hormonal health protocols"
      ],
      cta: "Clear Skin Solutions"
    }
  ]

  return (
    <section id="hormonal-solutions" className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-green mb-6">
            Hormonal Health Solutions
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed">
            Dr. Salma provides comprehensive hormonal health solutions that address the root causes of your symptoms, not just the surface issues.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-500">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col h-full min-h-[300px]">
                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-primary-green mb-4">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-gray leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                        <span className="text-text-gray text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                                     {/* CTA - Pushed to bottom */}
                   <div className="mt-auto">
                     <button 
                       onClick={() => {
                         if (solution.title === "PCOS Management") {
                           window.location.href = '/pcos-management'
                         } else if (solution.title === "Hashimoto's Thyroiditis Management") {
                           window.location.href = '/hashimotos-thyroiditis'
                         } else if (solution.title === "Hormonal Acne Treatment") {
                           window.location.href = '/hormonal-acne-treatment'
                         }
                       }}
                       className="w-full bg-primary-green text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-green/90 transition-colors duration-300 flex items-center justify-center space-x-2 group/btn cursor-pointer"
                     >
                       <span>{solution.cta}</span>
                       <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                     </button>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
                     <button 
             onClick={() => window.location.href = '/contact'}
             className="btn-primary group cursor-pointer"
           >
             <span className="flex items-center">
               Book Your Hormonal Health Consultation
               <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
             </span>
           </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HormonalSolutionsSection 