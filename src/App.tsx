import  Home  from '@/pages/Home'
import OurStore from '@/pages/OurStore';
import About  from '@/pages/About'
import ContactUs from '@/pages/ContactUs';
import Footer from '@/pages/Footer';
import { useEffect, useState } from 'react';
import  Navbar  from './components/Navbar';

import { SelectedPage } from "@/shared/types";

function App(){
    const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY === 0){
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if(window.scrollY !== 0) setIsTopOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
    },[]);
    
    
    return (
        
    <div className="app bg-gray-20">
        
            <Navbar 
                isTopOfPage = { isTopOfPage }
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
            <Home  setSelectedPage={setSelectedPage}/>
            <About  setSelectedPage={setSelectedPage}/>
            <OurStore setSelectedPage={setSelectedPage}/>
            <ContactUs setSelectedPage={setSelectedPage}/> 
            <Footer />
        
    </div>
    
    )
    
}
export default App