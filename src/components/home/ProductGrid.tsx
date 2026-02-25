import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Core Systems</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive communication and monitoring solutions designed for 
            reliability and ease of use in professional environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-stone-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-randa-blue group-hover:text-white transition-colors">
                {React.createElement(cat.subcategories[0].icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{cat.name}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {cat.description}
              </p>
              <div className="space-y-3 mb-8">
                {cat.subcategories.slice(0, 3).map(sub => (
                  <div key={sub.id} className="flex items-center text-xs font-semibold text-zinc-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-randa-blue/40 mr-2" />
                    {sub.name}
                  </div>
                ))}
              </div>
              <Link 
                to={`/category/${cat.id}`} 
                className="inline-flex items-center text-sm font-bold text-randa-blue hover:underline"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
