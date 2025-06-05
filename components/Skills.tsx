'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Code2, Server, Palette, Wrench } from "lucide-react";

function Skills() {
    const services = [
        {
            title: "Desarrollo Frontend",
            description: "Creación de interfaces modernas y responsivas utilizando las últimas tecnologías web. Me especializo en construir experiencias de usuario fluidas y atractivas que cautivan a tus visitantes.",
            // tech: "React - Next.js - TypeScript - TailwindCSS - Framer Motion",
            icon: <Code2 className="w-12 h-12 text-blue-600" />
        },
        {
            title: "Desarrollo Backend",
            description: "Implementación de soluciones robustas y escalables para el backend de tu aplicación. Me enfoco en crear arquitecturas limpias y mantenibles que crecen con tu negocio.",
            // tech: "Node.js - APIs RESTful - Bases de datos - Autenticación",
            icon: <Server className="w-12 h-12 text-purple-600" />
        },
        {
            title: "Diseño UI/UX",
            description: "Diseño de interfaces intuitivas y atractivas que priorizan la experiencia del usuario. Cada elemento está cuidadosamente pensado para maximizar la efectividad de tu sitio web.",
            // tech: "Diseño responsivo - Accesibilidad - Optimización UX",
            icon: <Palette className="w-12 h-12 text-pink-600" />
        },
        {
            title: "Optimización y Rendimiento",
            description: "Implementación de las mejores prácticas para asegurar que tu sitio web sea rápido, seguro y eficiente. Me comprometo a entregar soluciones optimizadas que destacan en el mercado.",
            // tech: "SEO - Rendimiento - Seguridad - Optimización",
            icon: <Wrench className="w-12 h-12 text-green-600" />
        }
    ];

    return (
        <div className="lg:mx-4 lg:my-4 lg:ml-20 lg:mt-20 p-2 lg:p-12">
            <h2 className="text-4xl font-bold text-center mb-4">¿Qué puedo hacer por vos?</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Me especializo en crear soluciones web completas que combinan diseño atractivo con funcionalidad robusta
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                {service.icon}
                                <CardTitle className="text-3xl">{service.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-gray-600 mb-4">{service.description}</p>
                            {/* <p className="text-sm text-gray-500">{service.tech}</p> */}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Skills;