import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function FrontSkills() {
  return (
    <Marquee className="font-bold">
      <ul className="flex gap-8 justify-center items-center">
        <li className="flex flex-col items-center">
          <FaReact className="w-10 h-10" />
          <h1 className="text-center mt-2">React</h1>
        </li>
        <li className="flex flex-col items-center">
          <RiNextjsFill className="w-10 h-10" />
          <h1 className="text-center mt-2">NEXT.JS</h1>
        </li>
		<li className="flex flex-col items-center">
          <IoLogoJavascript className="w-10 h-10" /> 
          <h1 className="text-center mt-2">Javascript</h1>
        </li>
        <li className="flex flex-col items-center">
          <SiTypescript className="w-10 h-10" />
          <h1 className="text-center mt-2">Typescript</h1>
        </li>
        <li className="flex flex-col items-center">
          <RiTailwindCssFill className="w-10 h-10" />
          <h1 className="text-center mt-2">tailwindcss</h1>
        </li>
        <li className="flex flex-col items-center">
          <SiShadcnui className="w-10 h-10" />
          <h1 className="text-center mt-2 mr-8">shadcn</h1>
        </li>
      </ul>
    </Marquee>
  );
}

export default FrontSkills;
