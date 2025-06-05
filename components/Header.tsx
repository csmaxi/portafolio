import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function Header() {
    return ( 
        <div className="relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950 -z-10" />
            
            <div className="mx-4 my-4 lg:ml-20 lg:mt-20 lg:p-20">
                <div className="max-w-4xl">
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm font-outfit font-medium text-blue-800 dark:text-blue-100">
                                Desarrollador Web Full Stack
                            </span>
                        </div>
                        
                        <h1 className="text-center lg:text-left text-5xl lg:text-7xl font-outfit font-extrabold antialiased bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 dark:from-blue-300 dark:via-blue-400 dark:to-purple-300 bg-clip-text text-transparent leading-[1.3] pb-2">
                            Transformando ideas<br/> en experiencias digitales
                        </h1>
                        
                        <p className="text-center lg:text-left text-xl lg:text-2xl antialiased font-light text-gray-600 dark:text-gray-300 max-w-2xl">
                            Desarrollo web moderno y profesional, creando soluciones digitales que impulsan tu visión hacia el futuro.
                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-6 text-lg group">
                                Contáctame
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                                Ver servicios
                            </Button>
                        </div>

                        <div className="flex items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500 dark:bg-green-400" />
                                Disponible para proyectos
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                                Tiempo de respuesta: 24h
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Header;