import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import { ArrowLeft, CheckCircle2, Shield, Zap, Settings } from 'lucide-react';

export default function ProductDetail() {
  const { categoryId, subcategoryId, productId } = useParams();
  const category = CATEGORIES.find(c => c.id === categoryId);
  const subcategory = category?.subcategories.find(s => s.id === subcategoryId);
  const product = subcategory?.products.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!category || !subcategory || !product) return <div className="pt-32 text-center">Product not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to={`/category/${category.id}/subcategory/${subcategory.id}`}
          className="inline-flex items-center text-sm font-bold text-zinc-500 hover:text-randa-blue mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {subcategory.name}
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <div className="rounded-[40px] overflow-hidden bg-white border-8 border-white shadow-2xl aspect-square">
            <img 
              src={product.image || `https://picsum.photos/seed/${product.id}/1000/1000`} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-randa-blue/10 border border-randa-blue/20 text-randa-blue text-xs font-bold uppercase tracking-wider mb-6">
              <Shield className="w-3 h-3" />
              <span>Digimat Professional Series</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">{product.name}</h1>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
              {product.description} Engineered for mission-critical reliability, 
              this unit provides the highest standard of performance in the industry.
            </p>

            <div className="space-y-8 mb-12">
              {product.features?.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-zinc-700 font-medium">{feature}</p>
                  </div>
                </div>
              )) || (
                <>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">High Efficiency</h4>
                      <p className="text-sm text-zinc-500">Optimized power consumption and rapid response times.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                      <Settings className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Easy Integration</h4>
                      <p className="text-sm text-zinc-500">Plug-and-play compatibility with all Digimat systems.</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="bg-stone-50 rounded-3xl p-8 mb-12 border border-zinc-100">
              <h3 className="font-bold text-zinc-900 mb-6 flex items-center">
                <Settings className="w-5 h-5 text-randa-blue mr-2" />
                Technical Specifications
              </h3>
              <div className="space-y-4">
                {product.specs ? (
                  Object.entries(product.specs).map(([label, value]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-zinc-200 text-sm">
                      <span className="text-zinc-500 font-medium">{label}</span>
                      <span className="text-zinc-900 font-bold">{value}</span>
                    </div>
                  ))
                ) : (
                  [
                    { label: "Operating Voltage", value: "12V - 24V DC" },
                    { label: "Communication", value: "Wireless / IP / Wired" },
                    { label: "Material", value: "Antimicrobial ABS Plastic" },
                    { label: "Mounting", value: "Surface or Flush Mount" },
                    { label: "Certification", value: "CE, ISO 9001" }
                  ].map(spec => (
                    <div key={spec.label} className="flex justify-between py-2 border-b border-zinc-200 text-sm">
                      <span className="text-zinc-500 font-medium">{spec.label}</span>
                      <span className="text-zinc-900 font-bold">{spec.value}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <Link 
              to="/contact" 
              state={{ product: product.name }}
              className="w-full py-5 bg-randa-blue text-white rounded-2xl font-bold hover:bg-randa-blue/90 transition-all shadow-xl shadow-randa-blue/25 inline-flex items-center justify-center"
            >
              Request Quotation
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
