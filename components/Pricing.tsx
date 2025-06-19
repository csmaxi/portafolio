import { Check } from "lucide-react";
import { Button } from "./ui/button";

const pricingPlans = [
  {
    name: "Básico",
    price: "Desde $150.000",
    description: "Perfecto para pequeñas empresas y proyectos personales",
    features: [
      "Sitio web responsive",
      "Hasta 5 páginas",
      "Formulario de contacto",
      "Optimización básica SEO",
      "Integración con redes sociales",
      "Soporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Profesional",
    price: "Desde $250.000",
    description: "Ideal para negocios en crecimiento",
    features: [
      "Todo lo del plan Básico",
      "Hasta 10 páginas",
      "Blog integrado",
      "Optimización SEO avanzada",
      "Integración con Google Analytics",
      "Soporte prioritario",
      "Actualizaciones mensuales",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    description: "Para empresas que buscan una solución completa",
    features: [
      "Todo lo del plan Profesional",
      "Páginas ilimitadas",
      "E-commerce completo",
      "Panel de administración personalizado",
      "Integración con APIs",
      "Soporte 24/7",
      "Actualizaciones semanales",
      "Capacitación del equipo",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Planes y Precios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones adaptadas a cada necesidad y presupuesto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border bg-card text-card-foreground shadow-sm ${
                plan.highlighted
                  ? "ring-2 ring-primary relative transform scale-105"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">{plan.price}</div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="solid"
                  className="w-full"
                >
                  Consultar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 