import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navtop from "@/components/Navbar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <div className="min-h-screen">
      <Navtop />
      <Header />
      
      <Services />
      <Separator className="my-12 w-4/5 mx-auto"/>
      
      <Process />
      <Separator className="my-12 w-4/5 mx-auto"/>
      
      <Pricing />
      <Separator className="my-12 w-4/5 mx-auto"/>
      
      <FAQ />
      <Separator className="my-12 w-4/5 mx-auto"/>
      
      <Contact />
      <Separator className="my-12 w-4/5 mx-auto"/>
      
      <Footer />
    </div>
  );
}

export default App;