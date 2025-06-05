'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";

function Contact() {
    return (
        <div className="lg:mx-4 lg:my-4 lg:ml-20 lg:mt-20 p-2 lg:p-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">Hablemos de tu proyecto</h2>
                <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                    ¿Tienes una idea en mente? Cuéntame sobre tu proyecto y trabajemos juntos para hacerlo realidad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Card className="p-6">
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold">Contacto directo</h3>
                                <p className="text-gray-600">Estoy disponible para discutir tu proyecto y responder cualquier pregunta que tengas.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                    <a href="mailto:tu@email.com" className="text-gray-600 hover:text-blue-600">
                                        tu@email.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                    <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                                        +123 456 7890
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MessageSquare className="w-6 h-6 text-blue-600" />
                                    <span className="text-gray-600">
                                        Disponible para reuniones virtuales
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="p-6">
                        <CardContent>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Nombre
                                    </label>
                                    <Input id="name" placeholder="Tu nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="tu@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Mensaje
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                        className="min-h-[150px]"
                                    />
                                </div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Enviar mensaje
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Contact; 