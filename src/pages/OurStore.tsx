import { SelectedPage, StoreType } from "@/shared/types"
import image1 from "@/assets/img/image1.png";
import image2 from "@/assets/img/image2.jpg";
import image3 from "@/assets/img/image3.jpg";
import image4 from "@/assets/img/image4.jpg";
import image5 from "@/assets/img/image5.jpg";
import image6 from "@/assets/img/image6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import StoreItem from "./StoreItem";



const ourstores: Array<StoreType> = [
    {
      name: "Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image1,
    },
    {
      name: "AC Classes",
      image: image2,
    },
    {
      name: "Engine Work",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image3,
    },
    {
      name: "Electrical Work",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image4,
    },
    {
      name: "AC Repairing",
      image: image5,
    },
    {
      name: "Account System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: image6,
    },
  ];
  
  type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

 
const OurStore = ({ setSelectedPage } : Props ) => {

  return (
    <section id="ourstore" className="w-full bg-primary-100 py-40">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurStore)}
    >
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
      
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <HText>OUR WORKS</HText>
          <p className="py-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
            enim mattis odio in risus nunc.
          </p>
         
       
        </div>
      </motion.div>
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        
        <ul className="w-[2800px] whitespace-nowrap">
          {ourstores.map((item: StoreType, index) => (
            <StoreItem
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  </section>
  )
}

export default OurStore
