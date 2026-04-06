import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

export default function Subcategory() {
  const { t } = useTranslation();
  const { categoryId, subcategoryId } = useParams();
  const category = CATEGORIES.find(c => c.id === categoryId);
  const subcategory = category?.subcategories.find(s => s.id === subcategoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subcategoryId]);

  if (!category || !subcategory) return <div className="pt-32 text-center">{t('common.subcategory_not_found')}</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to={`/category/${category.id}`}
          className="inline-flex items-center text-sm font-bold text-zinc-500 hover:text-randa-blue mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('common.back_to')} {t(`navbar.${category.id}`) !== `navbar.${category.id}` ? t(`navbar.${category.id}`) : category.name}
        </Link>

        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-randa-blue/10 rounded-xl flex items-center justify-center text-randa-blue">
              <subcategory.icon className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold text-zinc-900">
              {t(`subcategories.${subcategory.id}`) !== `subcategories.${subcategory.id}` ? t(`subcategories.${subcategory.id}`) : subcategory.name}
            </h1>
          </div>
          <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
            {t(`subcategories.${subcategory.id}-desc`) !== `subcategories.${subcategory.id}-desc` ? t(`subcategories.${subcategory.id}-desc`) : subcategory.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategory.products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group bg-white rounded-3xl border border-zinc-100 overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 transition-all"
            >
              <div className="aspect-square bg-stone-50 relative overflow-hidden">
                <img 
                  src={product.image || `https://picsum.photos/seed/${product.id}/600/600`} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  {t(`products.${product.id}.name`) !== `products.${product.id}.name` ? t(`products.${product.id}.name`) : product.name}
                </h3>
                <p className="text-sm text-zinc-500 mb-6 line-clamp-2">
                  {t(`products.${product.id}.description`) !== `products.${product.id}.description` ? t(`products.${product.id}.description`) : product.description}
                </p>
                <Link 
                  to={`/category/${category.id}/subcategory/${subcategory.id}/product/${product.id}`}
                  className="w-full py-3 bg-stone-50 text-zinc-900 rounded-xl font-bold hover:bg-randa-blue hover:text-white transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>{t('common.view_details')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
