import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navtop from "@/components/Navbar";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <div>
      <Navtop />
      <Header />
     
      <Skills />     
     
      <Contact />
      <Separator className="my-12 w-4/5 mx-auto"/>
      <Footer />
    </div>
  );
}

export default App;