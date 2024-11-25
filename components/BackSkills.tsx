import { RiSupabaseFill } from "react-icons/ri";
import { SiMercadopago } from "react-icons/si";
import { SiResend } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function FrontSkills() {
  return (
    <ul className="flex gap-8 justify-center items-center font-bold">
      <li className="flex flex-col items-center">
        <IoLogoVercel className="w-10 h-10" />
        <h1 className="text-center mt-2">Vercel</h1>
      </li>
      <li className="flex flex-col items-center">
        <RiSupabaseFill className="w-10 h-10" />
        <h1 className="text-center mt-2">supabase</h1>
      </li>
      <li className="flex flex-col items-center">
        <SiMercadopago className="w-10 h-10" />
        <h1 className="text-center mt-2">mercado pago</h1>
      </li>
      {/* <li className="flex flex-col items-center">
        <SiResend className="w-10 h-10" />
        <h1 className="text-center mt-2">Resend</h1>
      </li> */}
    </ul>
  );
}

export default FrontSkills;
