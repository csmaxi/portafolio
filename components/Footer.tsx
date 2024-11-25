import { CiInstagram } from "react-icons/ci";
import Link from "next/link";

function Footer() {
    return ( 
        <div>
            <Link href="https://www.instagram.com/csmaxi/">
            <small className="flex justify-center font-light  mb-6 text-lg">csmaxi 2024 - Contacto :  <CiInstagram className="h-8 w-8"/></small>
            
            </Link>
        </div>
    
     );
}

export default Footer;