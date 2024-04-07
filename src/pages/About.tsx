import HText from "@/shared/HText";
import { SelectedPage, AboutType } from "@/shared/types"
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/16/solid";
//import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/16/solid"}
import { motion } from "framer-motion";
import AboutList from "./AboutList";
import ActionButton from "@/shared/ActionButton";
import BenifitsPageGraphic from "@/assets/img/BenefitsPageGraphic.png" 
const container = {
  hidden:{},
  visible:{
    transition: { staggerChildren:0.2 },
  },
}


type propTypes = {
setSelectedPage:(value: SelectedPage) => void;
};

const abouts: Array<AboutType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "state of the art Facilities",
    description : "Neque adipiscing dfdf.dfdgdgdrer.wrtrytfd"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "state of the art Facilities",
    description : "Neque adipiscing dfdf.dfdgdgdrer.wrtrytfd"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "state of the art Facilities",
    description : "Neque adipiscing dfdf.dfdgdgdrer.wrtrytfd"
  },
];



const About = ({ setSelectedPage }: propTypes) => {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.About)}>
        {/* header */}
        <motion.div 
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{  once:true,amount: 0.5 }}
          transition={{ duration:0.5 }}
          variants={{ 
            hidden:{opacity:0, x:-50},
            visible:{opacity:1,x:0},
           }}
        >
           <HText>More Than Customer Service</HText>
           <p className="my-5 text-sm">
           Lorem lpsum is simple dummy text of the printing 
                 and typesetting industry.Lorem ipsum has been the 
                 industry standers dummy text ever since the 1500s,
                 when an unknown printer took a gallery of the type 
                 and scrambled it to make a type specimen book.
           </p>
        </motion.div>
        {/*  about*/}
        <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants = {container}
        >
            {abouts.map((aboutlist : AboutType ) => (
              <AboutList 
                key={aboutlist.title}
                icon={aboutlist.icon}
                title={aboutlist.title}
                description={aboutlist.description}
                setSelectedPage={setSelectedPage}
                />
            ))}
        </motion.div>
        {/* graphic and desc */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
          {/* graphic */}
          <img className="mx-auto" alt="benifits-page-graphic" src={BenifitsPageGraphic} />
          {/* descr */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{  once:true,amount: 0.5 }}
                  transition={{ duration:0.5 }}
                  variants={{ 
                    hidden:{opacity:0, x:50},
                    visible:{opacity:1,x:0},
                   }}
                >
                  <HText>
                    Million of Engery
                    <span className="text-primary-500 ">  
                      Fit
                    </span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* descr */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{  once:true,amount: 0.5 }}
              transition={{ delay:0.2, duration:0.5 }}
              variants={{ 
                hidden:{opacity:0, x:50},
                visible:{opacity:1,x:0},
               }}
            >
              <p className="my-5"> Lorem lpsum is simple dummy text of the printing 
                 and typesetting industry.Lorem ipsum has been the 
                 industry standers dummy text ever since the 1500s,
                 when an unknown printer took a gallery of the type 
                 and scrambled it to make a type specimen book.</p>
              <p className="my-5"> Lorem lpsum is simple dummy text of the printing 
                 and typesetting industry.Lorem ipsum has been the 
                 industry standers dummy text ever since the 1500s,
                 when an unknown printer took a gallery of the type 
                 and scrambled it to make a type specimen book.</p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before: z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}



export default About;
