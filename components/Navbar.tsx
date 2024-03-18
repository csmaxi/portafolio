import { ModeToggle } from "./mode";
import Link from "next/link";



function Navtop() {
    return (
        <div className="flex justify-between my-12 items-center mx-12">
            <Link href="/">
                <span className="italic text-3xl">
                    csmaxi
                </span>
            </Link>
            <div className="flex gap-6">
                <ul className="flex gap-4 items-center">
                    <Link href="">
                        <li className="hover:underline cursor-pointer hover:text-orange-500 hover:font-bold">UX</li>
                    </Link>
                    <Link href="">
                        <li className="hover:underline cursor-pointer hover:text-orange-500 hover:font-bold">DEV</li>
                    </Link>
                </ul>
                <ModeToggle />
            </div>
        </div>
    );
}

export default Navtop;