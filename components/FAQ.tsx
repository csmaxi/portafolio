import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-3 semanas, mientras que proyectos más complejos pueden tomar 2-3 meses. Te proporcionaremos un timeline detallado durante la consulta inicial.",
  },
  {
    question: "¿Qué incluye el mantenimiento del sitio web?",
    answer:
      "El mantenimiento incluye actualizaciones de seguridad, copias de seguridad regulares, monitoreo de rendimiento, actualizaciones de contenido y soporte técnico. Ofrecemos diferentes planes de mantenimiento según tus necesidades.",
  },
  {
    question: "¿Cómo funciona el proceso de pago?",
    answer:
      "Trabajamos con un sistema de pagos por etapas. Normalmente, se requiere un depósito inicial del 30-50% para comenzar el proyecto, pagos parciales durante el desarrollo, y el pago final al completar el proyecto.",
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Sí, ofrecemos diferentes niveles de soporte post-lanzamiento. Desde soporte básico por email hasta soporte 24/7 con tiempo de respuesta garantizado, dependiendo del plan que elijas.",
  },
  {
    question: "¿Puedo actualizar el contenido de mi sitio web?",
    answer:
      "Sí, todos nuestros sitios web incluyen un panel de administración fácil de usar que te permite actualizar contenido, imágenes y textos sin necesidad de conocimientos técnicos.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Utilizamos las tecnologías más modernas y seguras del mercado, incluyendo React, Next.js, Node.js, y bases de datos como PostgreSQL o MongoDB. Elegimos la tecnología más adecuada según los requerimientos de tu proyecto.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios y proceso de trabajo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 