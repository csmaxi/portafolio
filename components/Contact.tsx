'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contacto" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Hablemos de tu Proyecto</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Nombre</label>
                                        <Input placeholder="Tu nombre" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <Input type="email" placeholder="tu@email.com" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                                    <Input type="tel" placeholder="+34 XXX XXX XXX" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Tipo de Proyecto</label>
                                    <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                                        <option value="">Selecciona una opción</option>
                                        <option value="website">Sitio Web</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="app">Aplicación Web</option>
                                        <option value="other">Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                                    <Textarea
                                        placeholder="Cuéntanos sobre tu proyecto..."
                                        className="min-h-[150px]"
                                    />
                                </div>

                                <Button size="lg" variant="solid" className="w-full">
                                    Enviar Mensaje
                                </Button>
                            </form>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                                        <div>
                                            <h4 className="font-medium">Email</h4>
                                            <p className="text-muted-foreground">csmaxidev@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                                        <div>
                                            <h4 className="font-medium">Teléfono</h4>
                                            <p className="text-muted-foreground">2966241623</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                                        <div>
                                            <h4 className="font-medium">Ubicación</h4>
                                            <p className="text-muted-foreground">Río Gallegos, Argentina</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Horario de Atención</h3>
                                <div className="space-y-2">
                                    <p className="text-muted-foreground">Lunes - Viernes: 9:00 - 18:00</p>
                                    <p className="text-muted-foreground">Sábado: 10:00 - 14:00</p>
                                    <p className="text-muted-foreground">Domingo: Cerrado</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Síguenos</h3>
                                <div className="flex space-x-4">
                                    <Button variant="outline" size="icon" className="hover:bg-blue-50 dark:hover:bg-blue-950">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </Button>
                                    <Button variant="outline" size="icon" className="hover:bg-gray-50 dark:hover:bg-gray-900">
                                        <span className="sr-only">GitHub</span>
                                        <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </Button>
                                    <Button variant="outline" size="icon" className="hover:bg-sky-50 dark:hover:bg-sky-950">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 