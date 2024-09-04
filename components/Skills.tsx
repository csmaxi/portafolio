"use client";
import Works from "./Works";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";

function Skills() {
  return (
    <div className="lg:mx-4 lg:my-4 lg:ml-20 lg:mt-20 p-2 lg:p-12 lg:w-4/5">
<Card className="p-4 shadow-lg">
  <div className="mx-4 text-center lg:text-start">
    <h1 className="text-3xl lg:text-4xl font-bold">Desarrollo web</h1>
    <p className="text-lg lg:text-xl mt-12 font-light">
      Nuestro enfoque de diseño responsivo garantiza que tu sitio web se
      adapte perfectamente a pantallas de cualquier tamaño, brindando una
      experiencia óptima tanto en computadoras de escritorio como en
      dispositivos móviles utilizando tecnologías para construir sitios web
      rápidos, seguros y escalables.
    </p>
    <h2 className="text-xl lg:text-2xl  font-light mt-6">
      React - Next.js - Typescript - shadcn/ui - TailwindCSS - Framer
      Motion...
    </h2>
  </div>
</Card>
    


      <Separator className="my-16" />
      <Card className="p-4 shadow-lg">
      <div className="mx-4 text-center lg:text-start">
        <h1 className="text-3xl lg:text-4xl font-bold">Backend</h1>
        <p className="text-lg lg:text-xl mt-12 font-light">
          Nos especializamos en el desarrollo backend para crear sistemas
          escalables y seguros. Nuestro enfoque se centra en garantizar un
          rendimiento óptimo y una sólida arquitectura para satisfacer las
          necesidades de tu aplicación web.
        </p>
        <h2 className="text-xl lg:text-2xl font-light  mt-6">
          Base de datos, Autenticación, E-commerce...
        </h2>
      </div>
      </Card>
    

      <Separator className="my-16 " />
      <Card className="p-4 shadow-lg">
      <div className="mx-4 text-center lg:text-start">
        <h1 className="text-3xl lg:text-4xl font-bold">Diseño</h1>
        <p className="text-lg lg:text-xl mt-12 font-light">
          Creamos sitios web atractivos y profesionales que reflejan la
          identidad única de tu marca. Nuestro enfoque centrado en el usuario
          garantiza una experiencia web cautivadora que genera una conexión
          duradera con tus clientes.
        </p>
      </div>
      </Card>
     

      <Separator className="my-16 " />
      <Card className="p-4 shadow-lg">
      <div className="mx-4 text-center lg:text-start">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Mantenimiento y soporte continuo
        </h1>
        <p className="text-lg lg:text-xl mt-12 font-light">
          Ofrecemos servicios de mantenimiento y soporte continuo para
          garantizar que tu sitio web funcione sin problemas y se mantenga
          actualizado en todo momento.
        </p>
      </div>
      </Card>
      {/* <Separator className="my-16" />

            <div>
                <h1 className="text-5xl font-semibold">Proyectos</h1>
                <Works />

            </div> */}
    </div>
  );
}

export default Skills;
