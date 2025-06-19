"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Zap, Smartphone, Palette, BarChart } from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Diseño Responsivo",
    description: "Diseños que se adaptan perfectamente a cualquier dispositivo.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "SEO Optimizado",
    description: "Mejoramos tu visibilidad en los motores de búsqueda.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Alto Rendimiento",
    description: "Sitios web rápidos y eficientes para una mejor experiencia de usuario.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que cautivan a tus usuarios.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Analítica Web",
    description: "Seguimiento y análisis del comportamiento de tus usuarios.",
    color: "from-red-500 to-red-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones digitales completas para impulsar tu presencia online
            y alcanzar tus objetivos de negocio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover-lift"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 