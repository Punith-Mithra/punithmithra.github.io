import React from 'react';
import { motion } from 'framer-motion';
import { Building2, UtensilsCrossed, Bed, GraduationCap, Stethoscope, Home } from 'lucide-react';

export default function ClientsSection() {
  const clients = [
    { icon: Building2, name: 'Hotels' },
    { icon: UtensilsCrossed, name: 'Restaurants' },
    { icon: Stethoscope, name: 'Hospitals' },
    { icon: GraduationCap, name: 'Schools' },
    { icon: Home, name: 'Villas' },
    { icon: Bed, name: 'Cafés' },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm font-medium mb-8"
        >
          TRUSTED BY LEADING BUSINESSES ACROSS INDUSTRIES
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors"
            >
              <client.icon className="w-8 h-8" />
              <span className="text-sm font-medium">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}