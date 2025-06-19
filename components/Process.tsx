"use client";

import { motion } from "framer-motion";
import { ClipboardList, MessageSquare, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Análisis y Planificación",
    description: "Entendemos tus necesidades y objetivos para crear una estrategia personalizada.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Diseño y Prototipado",
    description: "Creamos diseños atractivos y funcionales que reflejan tu marca.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Desarrollo",
    description: "Implementamos tu proyecto con las mejores tecnologías y prácticas.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Lanzamiento y Soporte",
    description: "Desplegamos tu proyecto y ofrecemos soporte continuo.",
    color: "from-yellow-500 to-yellow-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Process() {
  return (
    <section id="proceso" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Nuestro Proceso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un enfoque sistemático y transparente para garantizar el éxito de tu proyecto
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Línea de conexión */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-500 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Círculo en la línea */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 hidden md:block" />

                <div className="w-full md:w-1/2">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 