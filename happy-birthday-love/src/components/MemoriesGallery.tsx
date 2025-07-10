import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
};

const MemoriesGallery: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white/80">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-10 drop-shadow">Memories Gallery</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl shadow-md bg-white"
            variants={itemVariants}
            whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(190,24,93,0.18)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MemoriesGallery;