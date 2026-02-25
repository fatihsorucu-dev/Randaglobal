import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProductCategory() {
  const { categoryId } = useParams();
  const location = useLocation();
  const category = CATEGORIES.find(c => c.id === categoryId);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, categoryId]);

  if (!category) return <div>Category not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">{category.name}</h1>
          <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="space-y-24">
          {category.subcategories.map((sub, idx) => (
            <div 
              key={sub.id} 
              id={sub.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-randa-blue/10 rounded-2xl flex items-center justify-center text-randa-blue mb-8">
                  <sub.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-6">{sub.name}</h2>
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                  {sub.description} Our {sub.name} solutions are engineered for maximum reliability 
                  and seamless integration into your existing infrastructure.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {sub.products.slice(0, 4).map(prod => (
                    <div key={prod.id} className="flex items-center space-x-2 text-zinc-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>{prod.name}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/category/${category.id}/subcategory/${sub.id}`}
                  className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all inline-flex items-center space-x-2"
                >
                  <span>View All Products</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white aspect-square">
                  <img 
                    src={sub.image || `https://picsum.photos/seed/${sub.id}/800/800`} 
                    alt={sub.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
