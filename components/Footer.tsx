'use client'
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Desarrollador Web Full Stack
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Creando experiencias digitales únicas
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/tu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/tu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="mailto:tu@email.com"
                            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;