'use client'
import Works from "./Works";
import { Separator } from "./ui/separator";

function Skills() {
    return (
        <div className="lg:mx-4 lg:my-4 lg:ml-20 lg:mt-20 p-2 lg:p-12">
            <div>
                <h1 className="text-5xl font-semibold">Desarrollo web</h1>
                <p className="text-2xl mt-12 font-light">Nuestro enfoque de diseño responsivo garantiza que tu sitio web se adapte perfectamente a pantallas de cualquier tamaño, brindando una experiencia óptima tanto en computadoras de escritorio como en dispositivos móviles utilizando tecnologías para construir sitios web rápidos, seguros y escalables.</p>
                <h2 className="text-3xl font-thin mt-6">React, Next.js, Typescript, Shadcn, Tailwind, Motion...</h2>
            </div>
            <Separator className="my-12 border-2" />
            <div>
                <h1 className="text-5xl font-semibold">Backend</h1>
                <p className="text-2xl mt-12 font-light">Nos especializamos en el desarrollo backend para crear sistemas escalables y seguros. Nuestro enfoque se centra en garantizar un rendimiento óptimo y una sólida arquitectura para satisfacer las necesidades de tu aplicación web.</p>
                <h2 className="text-3xl font-thin mt-6">Base de datos, Autenticación con Google, E-commerce...</h2>
            </div>

            <Separator className="my-12 border-2" />

            <div>
                <h1 className="text-5xl font-semibold">Diseño</h1>
                <p className="text-2xl mt-12 font-light">Creamos sitios web atractivos y profesionales que reflejan la identidad única de tu marca. Nuestro enfoque centrado en el usuario garantiza una experiencia web cautivadora que genera una conexión duradera con tus clientes.</p>
            </div>

            <Separator className="my-12 border-2" />

            <div>
                <h1 className="text-5xl font-semibold">Mantenimiento y soporte continuo</h1>
                <p className="text-2xl mt-12 font-light">Ofrecemos servicios de mantenimiento y soporte continuo para garantizar que tu sitio web funcione sin problemas y se mantenga actualizado en todo momento.</p>
            </div>

            {/* <Separator className="my-12 border-2" /> */}

            {/* <div>
                <h1 className="text-5xl font-semibold">Trabajos</h1>
                <p className="text-2xl mt-12 font-light mb-12">Demo</p>
                <Works />

            </div> */}




        </div>
    );
}

export default Skills;