import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative  w-full overflow-hidden rounded-lg border bg-background mb-12 md:shadow-xl">
         <div className="mx-4 my-4 lg:ml-20 lg:mt-20 lg:p-20">
            <h1 className="text-center lg:text-left text-4xl lg:text-7xl font-extrabold antialiased">Soluciones digitales<br/> a tu alcance</h1>
            <p className="text-center lg:text-left mt-12 text-lg lg:text-2xl antialiased t font-light">Impulsa tu presencia online abriendo puertas al mundo digital, llevando tu marca a nuevos <br/> horizontes en la web.</p>
        </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
export default AnimatedGridPatternDemo