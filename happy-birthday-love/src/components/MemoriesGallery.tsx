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

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } },
};

const MemoriesGallery: React.FC = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 px-4 bg-white/90 backdrop-blur-sm"
    >
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-center text-romantic-700 mb-12 drop-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Memories Gallery
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px 0 rgba(190,24,93,0.15)',
              transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 hover:scale-110"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MemoriesGallery;