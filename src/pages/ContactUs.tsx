import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic  from "@/assets/img/contactus.png"

type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}
const ContactUs = ({ setSelectedPage }:Props) => {
  
  const {

    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async( e: any ) => {


    const isValid = await trigger();
    if(!isValid){

      e.preventDefault();

    }
 }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.Contact)}
         
        >
            {/*  */}
            <motion.div className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{  once:true,amount: 0.5 }}
              transition={{ duration:0.5 }}
              variants={{ 
                hidden:{opacity:0, x:-50},
                visible:{opacity:1,x:0},
                }}
                >
                  <HText>
                    <span className="text-primary-500">join now</span>
                  </HText>
                  <p className="my-5">
                  eque adipiscing dfdf.dfdgdgdrer.wrtrytfd
                  </p>
            </motion.div>
            <div className="mt-10 justify-between gap-8 md:flex">
              <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{  once:true,amount: 0.5 }}
              transition={{ duration:0.5 }}
              variants={{ 
                hidden:{opacity: 0, y: 50},
                visible:{opacity: 1, y:0},
                }}>
              
                <form 
                  target="_blank" 
                  onSubmit={onSubmit}

                  action="https://formsubmit.co/your@email.com"
                  method="POST"
                >
                  {/* e8a5bdfa807605332f809e5656e27c6 */}
                  <input type="email" className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white" 
                    placeholder="NAME"
                    {...register("name", { 
                        required: true,
                        maxLength:100,
                    })} 
                  />
                  {errors.name && (
                    <p className="mt-1 text-primary-500">
                      {errors.name.type === "required" && "This field is required."}
                      {errors.name.type === "maxLength" && "MAx Length is 100 characher."}
                      
                    </p>
                  )}

                <input type="text" className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white" 
                    placeholder="EMAIL"
                    {...register("email", { 
                        required: true,
                        pattern:/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i,
                    })} 
                  />
                  {errors.email && (
                    <p className="mt-1 text-primary-500">
                      {errors.email.type === "required" && "This field is required."}
                      {errors.email.type === "pattern" && "inValid MailID."}
                      
                    </p>
                  )}

                  <textarea rows={4} cols={50} className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white" 
                    placeholder="Message"
                    {...register("message", { 
                        required: true,
                        maxLength:2000,
                    })} 
                  />
                  {errors.message && (
                    <p className="mt-1 text-primary-500">
                      {errors.message.type === "required" && "This field is required."}
                      {errors.message.type === "maxLength" && "MAx Length is 2000 characher."}
                      
                    </p>
                  )}

                  <button type="submit" 
                  className="mt-5 rounder-lg bg-secondary-500 px-20 py-3
                   trasition duration-500 hover:text-white">
                      Submit
                   </button>




                </form>

              </motion.div>
              <motion.div
              className="relative mt-16 basis-2/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{  once:true,amount: 0.5 }}
              transition={{ delay:0.2, duration:0.5 }}
              variants={{ 
                hidden:{opacity: 0, y: 50},
                visible:{opacity: 1, y:0},
                }}
              >
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                  <img className="w-full" alt="content-us-page-graphic"
                   src={ContactUsPageGraphic}/>
                </div>
              </motion.div>

            </div>
        </motion.div>
    </section>
  )
}



export default ContactUs

